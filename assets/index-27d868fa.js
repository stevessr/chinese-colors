import{s as d,r as f,a as i,j as c,u as p,U as x,B as y,b as S,g as C,h as F,F as z}from"./index-1543148e.js";const N=d.div`
  position: absolute;
  top: 4px;
  left: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 1rem;
    height: 1rem;
    path {
      transition: all 0.5s ease-in;
    }
  }
`,m="FAV_COLORS",$=({currColor:e})=>{const[r,n]=f.useState(!1);return f.useEffect(()=>{JSON.parse(localStorage.getItem(m)||"[]").some(t=>t.name==e.name)?n(!0):n(!1)},[e]),i(N,{className:"fav",onClick:()=>{let o=JSON.parse(localStorage.getItem(m)||"[]");r?o=o.filter(t=>t.name!=e.name):o.push(e),n(t=>!t),localStorage.setItem(m,JSON.stringify(o))},children:i("svg",{t:"1568172188297",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2640",width:"32",height:"32",children:i("path",{d:"M512 910.933333l-61.866667-56.106667c-219.733333-199.466667-364.8-331.093333-364.8-492.16 0-131.626667 103.04-234.666667 234.666667-234.666667 74.24 0 145.493333 34.56 192 88.96 46.506667-54.4 117.76-88.96 192-88.96 131.626667 0 234.666667 103.04 234.666667 234.666667 0 161.066667-145.066667 292.693333-364.8 492.16l-61.866667 56.106667z","p-id":"2641",fill:r?"#ef7a82":"#fff"})})})},T=d.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  .icon {
    width: 1rem;
    height: 1rem;
  }
`,k=({handleDownload:e})=>i(T,{className:"download",onClick:e,children:c("svg",{t:"1568731641905",className:"icon",viewBox:"0 0 1047 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1446",width:"32",height:"32",children:[i("path",{d:"M523.987449 0a42.759353 42.759353 0 0 0-42.759353 42.759353v498.158822L301.663529 361.353608a43.500845 43.500845 0 0 0-60.555153 0 42.759353 42.759353 0 0 0 0 60.431572l227.020033 227.267198a79.092445 79.092445 0 0 0 111.223751 0l227.514362-227.143616a42.635771 42.635771 0 0 0 0-60.555154 42.882935 42.882935 0 0 0-60.555153 0L566.870384 540.918175V42.759353A42.882935 42.882935 0 0 0 523.987449 0z",fill:"#ffffff","p-id":"1447"}),i("path",{d:"M860.871832 120.245233a42.882935 42.882935 0 1 0 0 85.642288 101.584359 101.584359 0 0 1 101.460777 101.584359v529.301473a101.584359 101.584359 0 0 1-101.460777 101.584359H187.226647a101.707941 101.707941 0 0 1-101.584359-101.584359V307.47188a101.707941 101.707941 0 0 1 101.584359-101.584359 42.882935 42.882935 0 0 0 0-85.642288A187.473811 187.473811 0 0 0 0 307.47188v529.301473a187.473811 187.473811 0 0 0 187.226647 187.226647h673.645185A187.350229 187.350229 0 0 0 1047.974897 836.773353V307.47188A187.350229 187.350229 0 0 0 860.871832 120.245233z",fill:"#ffffff","p-id":"1448"})]})}),j=d.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  font-size: 0.6rem;
  line-height: 1.2;
  padding: 0.6rem 0.4rem;
  margin: 1rem 0;
  margin-bottom: 2rem;
  cursor: pointer;
  font-family: SimSun, FangSong, STSong, STZhongsong, LiSu, KaiTi, 'Microsoft YaHei';
  &.mobile {
    font-size: 0.8rem;
  }
  > h2 {
    color: inherit;
    font-size: 0.4rem;
    width: 0.5rem;
    align-self: flex-end;
    margin-right: 0.3rem;
  }
  .line {
    color: inherit;
    text-align: right;
    width: 1rem;
    letter-spacing: 0.14rem;
    font-weight: bold;
  }
`,M=({bgColor:e,fontColor:r="#fff",content:n="",author:a="",title:o="",refetch:t})=>{const{isMobile:s}=p();return c(j,{onClick:()=>{t()},style:{background:e,color:r},className:s?"mobile":"",children:[n.map(l=>i("p",{className:"line",children:l},l)),c("h2",{children:[a," · ",o]})]})},I=x`
from {
    opacity: 0;
  }

  to {
    opacity: .8;
  }
`,L=d.hgroup`
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 1rem 0.8rem;
  position: relative;
  width: 4.6rem;
  cursor: default;
  margin-top: 1rem;
  margin-right: 0.5rem;
  min-height: 18rem;
  &.mobile {
    width: 5.8rem;
    margin-top: 8rem;
    > h1 {
      font-size: 3.6rem;
    }
  }
  &:hover > h1 {
    transform: scale(1.1);
  }
  &:hover .download {
    visibility: visible;
  }
  &.download {
    border-radius: 0;
    box-shadow: none;
    background-color: ${({bgColor:e})=>e};
    background-image: url(${y});
    background-repeat: repeat;
    .fav {
      display: none;
    }
    > h2 {
      writing-mode: initial;
    }
  }
  > h1 {
    color: inherit;
    font-size: 3.2rem;
    letter-spacing: -0.5rem;
    writing-mode: vertical-lr;
    transition: transform 0.4s ease-in;

    font-family: 'TChinese', 'SimSun', 'FangSong', 'STSong', 'STZhongsong', 'LiSu', 'KaiTi',
      'Microsoft YaHei';
  }
  > h2 {
    text-transform: capitalize;
    font-size: 0.6rem;
    writing-mode: vertical-lr;
    position: absolute;
    right: 0.2rem;
    top: 0.4rem;
    color: inherit;
  }
  > h3 {
    width: 100%;
    position: absolute;
    left: -0.4rem;
    top: -2rem;
    display: flex;
  }
  .figure {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: -1;
    opacity: 0;
    animation: ${I} 1s forwards;
    animation-delay: 1s;
  }
`,O=({name:e,pinyin:r,hex:n,RGB:a,CMYK:o,figure:t})=>{const s=f.useRef(null),{isMobile:g}=p(),{poetry:l,fetchPoetry:u}=S(e),h=C(a),v=()=>{s.current&&(s.current.classList.add("download"),F(s.current,{debug:!1,scale:window.devicePixelRatio*2}).then(function(w){w.toBlob(b=>{z.saveAs(b,`card-${e}-${new Date().getTime()}.png`),s.current.classList.remove("download")},"image/png")}))};return c(L,{bgColor:`rgba(${a.join(",")})`,ref:s,className:g?"mobile":"",style:{color:h},children:[i("h1",{children:e}),i($,{currColor:{hex:n,name:e,pinyin:r,RGB:a,CMYK:o}}),i(k,{handleDownload:v}),i("h2",{children:r}),l&&i(M,{refetch:u,bgColor:`rgba(${a.join(",")},.5)`,fontColor:h,...l}),t&&i("img",{className:"figure",src:`figure/${t}`,alt:"figure"})]})};export{O as default};
