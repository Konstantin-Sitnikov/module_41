

function clickButton() {
  const widthWindow = window.screen.width
  const heightWindow = window.screen.height
  
  const widthViewingArea = document.documentElement.clientWidth
  const heightViewingArea = document.documentElement.clientHeight

  const widthViewingAreaScroll = window.innerWidth
  const heightViewingAreascroll = window.innerHeight



  window.alert(`Экран: ширина: ${widthWindow}, высота ${heightWindow}
    Область просмотра: ширина: ${widthViewingArea}, высота ${heightViewingArea}
    Область просмотра+ scroll: ширина: ${widthViewingAreaScroll}, высота ${heightViewingAreascroll}`)
}