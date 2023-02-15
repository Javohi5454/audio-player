class PLAYER{
  constructor(options){
    this.player = options.player
    
    // elements
    
    this.wrapper = this.player.querySelector('.wrapper')
    this.audio = this.player.querySelector('.audio')
    this.timeLine = this.player.querySelector('.player-panel__line')
    this.timeLineCurrent = this.player.querySelector('.player-panel__line--current')
    this.timeLineRange = this.player.querySelector('.player-panel__line--range')
    this.top = this.player.querySelector('.top')
    this.btns = this.player.querySelector('.btns')
    this.iconSetting = this.player.querySelector('.icon-setting.btns-bars')
    this.iconMenu  = this.player.querySelector('.icon-menu.btns-bars')
    this.about1 = this.player.querySelector('.about-1')
    this.bottom = this.player.querySelector('.bottom')
    this.about2 = this.player.querySelector('.about-2')
    this.btnsPlay = this.player.querySelector('.btns-play')
    this.play = this.player.querySelector('.button-play')
    this.skipPrevios = this.player.querySelector('.skip__previos')
    this.skipNext = this.player.querySelector('.skip__next')
    this.iconPrevois = this.player.querySelector('.icon-previos.skip-previos')
    this.iconPlay = this.player.querySelector('.icon-play.play')
    this.iconNext = this.player.querySelector('.icon-next.skip-next')
    // events
    this.play.addEventListener('click', () => this.playPauseAudio())
    this.timeLineRange.addEventListener('input', () => this.setRange())
    this.audio.addEventListener('timeupdate', () => this.timeUpdate())
  }
  // methods
   timeUpdate(){
    const {audio,timeLineCurrent,timeLineRange} = this
    const currentTime = Math.floor(audio.currentTime)
    const duration = Math.floor(audio.duration)
    timeLineCurrent.style.width = `${currentTime/duration*100}%`
    timeLineRange.value = currentTime/duration*100
    if(timeLineRange.value >= 100){
      const {audio,iconPlay} = this
      this.switch = !this.switch
      this.switch ? audio.play() : audio.pause()
      iconPlay.className = this.switch ? 'icon-pause' : 'icon-play'
    }
   }
  
  setRange() {
    
    const {audio,timeLine,timeLineCurrent,timeLineRange, play} = this
    const position = timeLineRange.value
    const lineWidth = timeLine.clientWidth
    timeLineCurrent.style.width = `${position}%`
    audio.currentTime = Math.floor(position / lineWidth * 100 * audio.duration/45.87)
  }
  playPauseAudio(){
    const {audio,iconPlay} = this
    this.switch = !this.switch
    this.switch ? audio.play() : audio.pause()
    iconPlay.className = this.switch ? 'icon-pause' : 'icon-play'
    
  }
}

const players = document.querySelectorAll('.player')
for(const player of players){
  new PLAYER({
    player: player
  })
}
