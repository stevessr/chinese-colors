import{s as c,r as d,j as n,a as r}from"./index-1543148e.js";import{Y as m}from"./yinyang-29328ad2.js";const u="/assets/chinese.circle.border-fd84ed83.png",f=c.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ef7a82;
  background-image: url(${u});
  background-size: cover;
  position: relative;
  .icon {
    width: 1.4rem;
    path {
      transition: all 0.5s ease-in;
    }
  }
  .favTip {
    position: absolute;
    top: -2rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    width: 4rem;
    font-size: 0.7rem;
    text-align: center;
  }
`,g=({showCollection:t,...o})=>{const[s,i]=d.useState(!1);return n(f,{onClick:()=>{if(s)return;JSON.parse(localStorage.getItem("FAV_COLORS")||"[]").length?t():(i(!0),setTimeout(()=>{i(!1)},2e3))},...o,children:[s&&r("p",{className:"favTip",children:"暂无收藏"}),r("svg",{t:"1568178514471",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8559",width:"32",height:"32",children:r("path",{d:"M914.304 182.848H109.696v36.608h804.608v-36.608z m-73.152-109.696H182.848v36.544h658.304v-36.544z m109.696 256h36.544v-36.608H36.544v621.696h950.912v-512h-36.608v475.456H73.152V329.152h877.696zM510.464 440.064a130.112 130.112 0 0 0-181.056-2.112 132.8 132.8 0 0 0 1.6 188.224l166.784 165.952a17.984 17.984 0 0 0 25.6 0l166.528-165.952a132.8 132.8 0 0 0 1.28-188.288 130.112 130.112 0 0 0-180.736 2.176z m182.848 88.256a100.288 100.288 0 0 1-29.184 71.936l-153.6 152.896-153.6-152.896a100.288 100.288 0 0 1-29.12-71.936 88.384 88.384 0 0 1 26.944-64 93.504 93.504 0 0 1 130.112 1.536l25.6 25.6 25.6-25.6a93.504 93.504 0 0 1 130.112-1.536 88.384 88.384 0 0 1 27.136 63.936z",fill:"#fff","p-id":"8560"})})]})},b=c.div`
  ul {
    display: flex;
    position: relative;
    > li {
      transition: all 0.6s;
      cursor: pointer;
      box-shadow: 0 0 0.8rem black;
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      font-weight: 800;
      &:not(:first-child) {
        margin-right: -1.8rem;
      }
      &.selected {
        transform: translateY(-1.6rem);
      }
    }
  }
  &.expand ul li {
    margin-right: -0.34rem;
  }

  .btn {
    cursor: pointer;
    position: absolute;
    right: -1.6rem;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${m});
    background-size: cover;
    width: 3rem;
    height: 3rem;
    border: 1px solid #000;
    border-radius: 50%;
    transition: all 0.6s;
    box-shadow: 1px -1px 6px black;
  }
  &.expand .btn {
    transform: translateY(-50%) rotateZ(180deg);
  }
`,w=({currSetName:t="",setCurrSet:o,sets:s=[]})=>{const[i,l]=d.useState(!1),a=e=>{o(e)},h=()=>{l(e=>!e)};return n(b,{className:`sets ${i?"expand":""}`,children:[n("ul",{children:[r(g,{className:t==""?"selected":"",showCollection:a.bind(null,"")}),s.map(({name:e,RGB:p})=>e?r("li",{onClick:a.bind(null,e),style:{background:`rgba(${p.join(",")})`},className:e==t?"selected":"",children:e},e):null)]}),r("button",{onClick:h,className:"btn"})]})};export{w as default};
