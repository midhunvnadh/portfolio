import { TimelineMax as Timeline } from 'gsap';

const gotoAPage = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  timeline
    .from(node, 0.3, {
      display:"none",
      marginLeft:window.innerWidth * -1,
      opacity:0,
    }, 0)
    .from(window, 0.3,{
      overflow:"hidden"
    },0);
  return timeline;
}

const gotoHome = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    timeline
      .from(node, 0.3, {
        display:"none",
        marginLeft:window.innerWidth,
        opacity:0,
      },0)
      .from(window, 0.3,{
        overflowX:"hidden"
      },0);
    return timeline;
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline

(pathname === '/') ? 
  timeline = gotoHome(node, delay) 
  : 
  timeline = gotoAPage(node, delay);

  window.loadPromise = new Promise(resolve => {
    requestAnimationFrame(() => timeline.play())
  })
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });
  timeline
  .from(node, 0.3, {},3)
  
  timeline.play();
}
