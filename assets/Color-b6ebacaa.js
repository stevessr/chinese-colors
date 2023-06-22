import{s as re,a as o,r as I,g as ie,j as C}from"./index-1543148e.js";import{C as le}from"./CircleProgress-236505ac.js";function F(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function G(e,r){return(!r||e!=="hidden")&&e!=="visible"&&e!=="clip"}function _(e,r){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var i=getComputedStyle(e,null);return G(i.overflowY,r)||G(i.overflowX,r)||function(l){var t=function(n){if(!n.ownerDocument||!n.ownerDocument.defaultView)return null;try{return n.ownerDocument.defaultView.frameElement}catch{return null}}(l);return!!t&&(t.clientHeight<l.scrollHeight||t.clientWidth<l.scrollWidth)}(e)}return!1}function Y(e,r,i,l,t,n,c,u){return n<e&&c>r||n>e&&c<r?0:n<=e&&u<=i||c>=r&&u>=i?n-e-l:c>r&&u<i||n<e&&u>i?c-r+t:0}function ee(e,r){var i=window,l=r.scrollMode,t=r.block,n=r.inline,c=r.boundary,u=r.skipOverflowHiddenElements,E=typeof c=="function"?c:function(ne){return ne!==c};if(!F(e))throw new TypeError("Invalid target");for(var W=document.scrollingElement||document.documentElement,$=[],s=e;F(s)&&E(s);){if((s=s.parentElement)===W){$.push(s);break}s!=null&&s===document.body&&_(s)&&!_(document.documentElement)||s!=null&&_(s,u)&&$.push(s)}for(var g=i.visualViewport?i.visualViewport.width:innerWidth,p=i.visualViewport?i.visualViewport.height:innerHeight,b=window.scrollX||pageXOffset,w=window.scrollY||pageYOffset,m=e.getBoundingClientRect(),h=m.height,y=m.width,j=m.top,P=m.right,Q=m.bottom,O=m.left,d=t==="start"||t==="nearest"?j:t==="end"?Q:j+h/2,f=n==="center"?O+y/2:n==="end"?P:O,R=[],U=0;U<$.length;U++){var a=$[U],N=a.getBoundingClientRect(),Z=N.height,q=N.width,H=N.top,B=N.right,A=N.bottom,M=N.left;if(l==="if-needed"&&j>=0&&O>=0&&Q<=p&&P<=g&&j>=H&&Q<=A&&O>=M&&P<=B)return R;var T=getComputedStyle(a),k=parseInt(T.borderLeftWidth,10),V=parseInt(T.borderTopWidth,10),D=parseInt(T.borderRightWidth,10),z=parseInt(T.borderBottomWidth,10),v=0,x=0,S="offsetWidth"in a?a.offsetWidth-a.clientWidth-k-D:0,X="offsetHeight"in a?a.offsetHeight-a.clientHeight-V-z:0;if(W===a)v=t==="start"?d:t==="end"?d-p:t==="nearest"?Y(w,w+p,p,V,z,w+d,w+d+h,h):d-p/2,x=n==="start"?f:n==="center"?f-g/2:n==="end"?f-g:Y(b,b+g,g,k,D,b+f,b+f+y,y),v=Math.max(0,v+w),x=Math.max(0,x+b);else{v=t==="start"?d-H-V:t==="end"?d-A+z+X:t==="nearest"?Y(H,A,Z,V,z+X,d,d+h,h):d-(H+Z/2)+X/2,x=n==="start"?f-M-k:n==="center"?f-(M+q/2)+S/2:n==="end"?f-B+D+S:Y(M,B,q,k,D+S,f,f+y,y);var J=a.scrollLeft,K=a.scrollTop;d+=K-(v=Math.max(0,Math.min(K+v,a.scrollHeight-Z+X))),f+=J-(x=Math.max(0,Math.min(J+x,a.scrollWidth-q+S)))}R.push({el:a,top:v,left:x})}return R}function te(e){return e===Object(e)&&Object.keys(e).length!==0}function oe(e,r){r===void 0&&(r="auto");var i="scrollBehavior"in document.body.style;e.forEach(function(l){var t=l.el,n=l.top,c=l.left;t.scroll&&i?t.scroll({top:n,left:c,behavior:r}):(t.scrollTop=n,t.scrollLeft=c)})}function ce(e){return e===!1?{block:"end",inline:"nearest"}:te(e)?e:{block:"start",inline:"nearest"}}function ae(e,r){var i=e.isConnected||e.ownerDocument.documentElement.contains(e);if(te(r)&&typeof r.behavior=="function")return r.behavior(i?ee(e,r):[]);if(i){var l=ce(r);return oe(ee(e,l),l.behavior)}}const se=re.div`
  padding: 0;
  width: 1.6rem;
  height: 1.6rem;
  background: transparent;
`,L=({progress:e=10,color:r="rgba(102, 87, 87, 0.96)"})=>o(se,{children:o(le,{progress:e,color:r,type:"percent"})}),de=re.li`
  color: ${({color:e})=>e};
  border-top: 0.4rem solid;
  display: flex;
  flex-direction: row;
  writing-mode: vertical-lr;
  padding: 0.5rem 0.2rem 0.4rem 0.2rem;
  margin: 0.4rem;
  cursor: pointer;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  transition: all 0.5s;
  align-self: flex-start;
  opacity: 0.8;
  background-color: ${({rgb:e})=>`rgba(${e.join(",")},.3)`};
  &:hover {
    opacity: 0.9;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  }
  &.curr {
    opacity: 1;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  }
  .line1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    min-height: 6.4rem;
    .name {
      color: ${({color:e})=>e};
      writing-mode: vertical-lr;
      align-self: flex-end;
      font-size: 0.8rem;
      margin-left: 0.2rem;
      font-weight: 800;
      display: flex;
      justify-content: space-between;
      height: 100%;
      .seq {
        opacity: 0.5;
      }
    }
    .cmyk {
      display: flex;
      justify-content: space-between;
      .circle:not(:last-child) {
        margin-bottom: 0.2rem;
      }
    }
  }
  .line2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: bold;
    color: ${({color:e})=>e};
    .hex {
      font-size: 0.6rem;
    }
    .pinyin {
      text-transform: capitalize;
    }
    .rgb {
      display: flex;
      flex-direction: column;
      .line {
        width: 2px;
        height: 6rem;
        margin: 0 1px;
        &.r {
          background-image: linear-gradient(
            180deg,
            ${({color:e})=>e} 0%,
            ${({color:e})=>e} ${({rgb:e})=>100*(e[0]/255)}%,
            rgba(255, 255, 255, 0.3) ${({rgb:e})=>100*(e[0]/255)}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
        &.g {
          background-image: linear-gradient(
            180deg,
            ${({color:e})=>e} 0%,
            ${({color:e})=>e} ${({rgb:e})=>100*(e[1]/255)}%,
            rgba(255, 255, 255, 0.3) ${({rgb:e})=>100*(e[1]/255)}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
        &.b {
          background-image: linear-gradient(
            180deg,
            ${({color:e})=>e} 0%,
            ${({color:e})=>e} ${({rgb:e})=>100*(e[2]/255)}%,
            rgba(255, 255, 255, 0.3) ${({rgb:e})=>100*(e[2]/255)}%,
            rgba(255, 255, 255, 0.3) 100%
          );
        }
      }
    }
  }
`,me=({setCurrColor:e,seq:r=1,isCurr:i,hex:l,name:t,pinyin:n,CMYK:c,RGB:u,intro:E,currColorRGB:W})=>{const[$,s,g]=u,[p,b,w,m]=c,h=I.useRef(null),y=ie(W);return I.useEffect(()=>{i&&ae(h.current,{behavior:"smooth",block:"center",scrollMode:"if-needed"})},[i]),C(de,{ref:h,rgb:u,className:i&&"curr",onClick:e.bind(null,t),color:y,title:E||null,style:{borderTopColor:l},children:[C("div",{className:"line1",children:[C("div",{className:"cmyk",children:[o("i",{className:"circle c",children:o(L,{progress:p})}),o("i",{className:"circle m",children:o(L,{progress:b})}),o("i",{className:"circle y",children:o(L,{progress:w})}),o("i",{className:"circle k",children:o(L,{progress:m})})]}),C("h2",{className:"name",children:[o("span",{className:"seq",children:r}),o("span",{className:"txt",children:t})]})]}),C("div",{className:"line2",children:[o("p",{className:"hex",children:l}),C("div",{className:"rgb",children:[o("i",{className:"line r",percent:$}),o("i",{className:"line g",percent:s}),o("i",{className:"line b",percent:g})]}),o("p",{className:"pinyin",children:n})]})]})};export{me as default};
