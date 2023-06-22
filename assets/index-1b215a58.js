import{a as o,I as u,j as r,s as f,B as w,d as x,r as k,g as y,D as S,T as v}from"./index-1543148e.js";import{Y as P}from"./yinyang-29328ad2.js";const T=({closePreview:e})=>o(u,{handleClick:e,icon:r("svg",{t:"1568731675226",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1724",width:"32",height:"32",children:[o("path",{d:"M511.818326 0.002914A511.454008 511.454008 0 0 0 0.000121 511.821119 512.061003 512.061003 0 0 0 874.072957 874.075749a512.4252 512.4252 0 0 0 0-724.145064A508.419033 508.419033 0 0 0 511.818326 0.002914z m304.590104 816.408308a430.72367 430.72367 0 1 1 0-609.180207 431.087867 431.087867 0 0 1 0 609.180207z",fill:"#ffffff","p-id":"1725"}),o("path",{d:"M735.799491 328.508621a40.30447 40.30447 0 0 0-12.139901-28.771564 40.790066 40.790066 0 0 0-57.421729 0L511.818326 454.399389 357.277393 299.737057a40.668667 40.668667 0 0 0-57.543128 57.543128l154.662332 154.540934L299.734265 666.483451a40.790066 40.790066 0 0 0 0 57.421729 40.790066 40.790066 0 0 0 57.543128 0L511.818326 569.364247 666.480659 723.90518a40.547268 40.547268 0 0 0 57.421729 0 40.547268 40.547268 0 0 0 0-57.421729L569.361455 511.821119l154.540933-154.540934a39.940273 39.940273 0 0 0 11.897103-28.771564z",fill:"#ffffff","p-id":"1726"})]})}),C=f.div`
  position: absolute;
  right: 0.8rem;
  top: 3.6rem;
  width: 32px;

  .onoffswitch-checkbox {
    display: none;
  }
  .onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 18px;
    padding: 0;
    line-height: 30px;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    background-color: #ffffff;
    transition: background-color 0.3s ease-in;
  }
  .onoffswitch-label:before {
    content: '';
    display: block;
    width: 16px;
    margin: 0;
    background-color: #fff;
    background-image: url(${P});
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 14px;
    border: 1px solid #e3e3e3;
    border-radius: 50%;
    transition: all 0.3s ease-in 0s;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label {
    background-color: #49e845;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label,
  .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    border-color: #49e845;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label:before {
    right: 0;
    transform: rotate(180deg);
  }
`;function z({checkVal:e=!0,togglePoetry:t}){return r(C,{"data-html2canvas-ignore":!0,children:[o("input",{type:"checkbox",name:"onoffswitch",className:"onoffswitch-checkbox",id:"myonoffswitch",checked:e,onChange:({target:i})=>{t(i.checked)}}),o("label",{className:"onoffswitch-label",htmlFor:"myonoffswitch"})]})}const N=f.article`
  font-family: SimSun, FangSong, STSong, STZhongsong, LiSu, KaiTi, 'Microsoft YaHei';
  position: absolute;
  left: 50%;
  top: 9rem;
  transform: translateX(-50%);
  min-width: 6rem;
  white-space: nowrap;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({bgRgb:e})=>`rgba(${e.join(",")},.5)`};
  padding: 0.8rem 1.2rem;

  .line {
    font-size: 1.6rem;
    font-weight: bold;
    word-break: keep-all;
    color: inherit;
    font-family: inherit;
    letter-spacing: 2px;
  }
  > h2 {
    font-size: 0.8rem;
    word-break: keep-all;
    margin-top: 1rem;
    color: inherit;
    font-family: inherit;
    .dot {
      color: inherit;
      padding: 0 0.4rem;
      font-weight: bold;
    }
  }
`;function $({bgColor:e,bgRgb:t}){const i=JSON.parse(localStorage.getItem("POETRY")),{author:n,title:c,content:a}=i;return r(N,{contentEditable:!0,style:{color:e},bgRgb:t,children:[a.map(s=>o("p",{className:"line",children:s},s)),r("h2",{children:[n,o("span",{className:"dot",children:"·"}),c]})]})}const g=navigator.userAgent,L=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(g),d=g.toLowerCase().indexOf("micromessenger")>-1||L,I=f.section`
  font-variant: normal;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  background-color: ${({bgColor:e})=>e};
  background-image: url(${w});
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  animation: ${x} 1s;
  animation-fill-mode: both;
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  &.starting {
    animation: none;
    transform: initial;
  }
  &.img {
    .downloadImg {
      width: 100%;
      height: 100%;
    }
    hgroup,
    .figure {
      display: none;
    }
  }
  .name {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
    z-index: 99;
  }

  .figure {
    position: absolute;
    right: 0;
    z-index: -1;
    max-height: 100%;
  }
`,B=({name:e,color:t,rgb:i,figure:n="default.png?width=8rem",closePreview:c})=>{const[a,s]=k.useState(!0),h=y(t),l=new URLSearchParams(n.split("?")[1]||""),m=l.get("width")||"23rem",p=+(l.get("o")||1),b=l.get("position")||"bottom";return r(I,{id:"PREVIEW",bgColor:t,bgRgb:i,children:[o(z,{checkVal:a,togglePoetry:s}),a&&o($,{bgColor:h,bgRgb:i}),o("div",{className:"close","data-html2canvas-ignore":!0,children:o(T,{closePreview:c})}),o("h1",{className:"name",style:{color:h},children:e}),n&&o("img",{className:"figure",style:{width:m,opacity:p,[b]:0},src:`figure/${n}`,alt:"figure"}),o(S,{name:e,isWebview:d,"data-html2canvas-ignore":!0}),d&&o(v,{children:"APP内打开，壁纸生成功能可能受限，建议在浏览器内打开"})]})};export{B as default};
