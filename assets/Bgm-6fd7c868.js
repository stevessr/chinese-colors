import{r as a,j as d,a as e,U as r,s as c}from"./index-1543148e.js";const g=r`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
`,m=r`
  from {
      transform: translateX(10px);
    }
    to {
      transform: translateX(0);
    }
`,p=c.aside`
  position: fixed;
  left: 0.4rem;
  bottom: 0.4rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  background: #fff;
  padding: 0.3rem;
  box-shadow: 0 0 6px black;
  display: flex;
  justify-content: center;
  align-items: center;
  audio {
    display: none;
  }
  animation: ${g} 2s infinite linear forwards;
  &.playing {
    animation-play-state: running;
  }
  &.paused {
    animation-play-state: paused;
  }
  .tip {
    position: absolute;
    font-size: 0.5rem;
    padding: 0.2rem 0.4rem;
    background: rgba(2, 2, 2, 0.4);
    line-height: 1.4;
    right: -180%;
    border-radius: 0.5rem;
    animation: ${m} 2s infinite ease-in-out forwards;
  }
`,u=!!localStorage.getItem("MUSIC_PLAYED")||!1;function b(){const[t,s]=a.useState(!1),[n,l]=a.useState(u),o=a.useRef(null);return d(p,{onClick:()=>{n||(l(!0),localStorage.setItem("MUSIC_PLAYED",!0));const i=o.current;t?i.pause():i.play()},className:t?"playing":"paused",children:[e("svg",{t:"1571192531683",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"9314",width:"24",height:"24",children:e("path",{d:"M217.7 928.3c-47.7 0-84.1-36.4-84.1-84.1V619.9c0-47.7 36.4-84.1 84.1-84.1 47.7 0 84.1 36.4 84.1 84.1v224.3c0 47.6-36.5 84.1-84.1 84.1z m672.7-84.1V619.9c0-47.7-39.2-84.1-84.1-84.1-44.9 0-84.1 36.4-84.1 84.1v224.3c0 47.7 39.2 84.1 84.1 84.1 44.9 0 84.1-36.5 84.1-84.1z m70.1-266.3C960.5 320 755.9 95.7 512 95.7S63.5 322.8 63.5 577.9v280.3h42V577.9c0-235.5 185-442.9 406.5-442.9s406.5 207.4 406.5 442.9v280.3h42V577.9z","p-id":"9315",fill:"#515151"})}),e("audio",{ref:o,autoPlay:!1,onPlaying:()=>{s(!0)},onPause:()=>{s(!1)},loop:!0,src:"/bgm.mp3"}),!n&&e("div",{className:"tip",children:"👈 点击播放"})]})}export{b as default};
