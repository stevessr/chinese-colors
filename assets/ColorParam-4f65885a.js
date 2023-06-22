import{r as D,s as j,a as c,j as v}from"./index-1543148e.js";import{C as y}from"./CircleProgress-236505ac.js";var g={},z=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(n){e.addRange(n)}),t&&t.focus()}},A=z,x={"text/plain":"Text","text/html":"Url",default:"Text"},I="Copy to clipboard: #{key}, Enter";function M(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function U(e,t){var r,o,n,i,l,a,s=!1;t||(t={}),r=t.debug||!1;try{n=A(),i=document.createRange(),l=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(f){if(f.stopPropagation(),t.format)if(f.preventDefault(),typeof f.clipboardData>"u"){window.clipboardData.clearData();var u=x[t.format]||x.default;window.clipboardData.setData(u,e)}else f.clipboardData.clearData(),f.clipboardData.setData(t.format,e);t.onCopy&&(f.preventDefault(),t.onCopy(f.clipboardData))}),document.body.appendChild(a),i.selectNodeContents(a),l.addRange(i);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");s=!0}catch{try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch{o=M("message"in t?t.message:I),window.prompt(o,e)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(i):l.removeAllRanges()),a&&document.body.removeChild(a),n()}return s}var B=U;function h(e){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(e)}Object.defineProperty(g,"__esModule",{value:!0});g.CopyToClipboard=void 0;var m=T(D),F=T(B),W=["text","onCopy","options","children"];function T(e){return e&&e.__esModule?e:{default:e}}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(o){O(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function $(e,t){if(e==null)return{};var r=K(e,t),o,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function K(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,i;for(i=0;i<o.length;i++)n=o[i],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t,r){return t&&k(e.prototype,t),r&&k(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}function C(e,t){return C=Object.setPrototypeOf||function(o,n){return o.__proto__=n,o},C(e,t)}function G(e){var t=X();return function(){var o=b(e),n;if(t){var i=b(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return H(this,n)}}function H(e,t){if(t&&(h(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},b(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=function(e){Y(r,e);var t=G(r);function r(){var o;q(this,r);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return o=t.call.apply(t,[this].concat(i)),O(S(o),"onClick",function(a){var s=o.props,p=s.text,f=s.onCopy,u=s.children,E=s.options,d=m.default.Children.only(u),N=(0,F.default)(p,E);f&&f(p,N),d&&d.props&&typeof d.props.onClick=="function"&&d.props.onClick(a)}),o}return L(r,[{key:"render",value:function(){var n=this.props;n.text,n.onCopy,n.options;var i=n.children,l=$(n,W),a=m.default.Children.only(i);return m.default.cloneElement(a,P(P({},l),{},{onClick:this.onClick}))}}]),r}(m.default.PureComponent);g.CopyToClipboard=R;O(R,"defaultProps",{onCopy:void 0,options:void 0});var J=g,w=J.CopyToClipboard;w.CopyToClipboard=w;var Q=w;const V=j.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .icon {
    width: 1.4rem;
  }
  > .hex {
    font-size: 0.6rem;
    padding: 0.3rem;
    background: rgba(51, 51, 51, 0.5);
    border-radius: 0.2rem;
    text-transform: uppercase;
  }
  .copyTip {
    position: absolute;
    left: -3rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.6rem;
    padding: 0.3rem 0.4rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.2rem;
  }
`,Z=({currColorHex:e})=>{const[t,r]=D.useState(!1),o=()=>{};return c(Q.CopyToClipboard,{text:e,onCopy:()=>{r(!0),setTimeout(()=>{r(!1)},1800)},children:v(V,{onClick:o,children:[v("svg",{t:"1568174087144",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7098",width:"36",height:"36",children:[c("path",{d:"M220.429 838.029c-18.2 0-32.9-14.7-32.9-32.9v-437c0-18.2 14.7-32.9 32.9-32.9h440c18.2 0 32.9 14.7 32.9 32.9v436.9c0 18.2-14.7 32.9-32.9 32.9h-440z m407-65.9v-371.1h-374.1v371.1h374.1z",fill:"#fff","p-id":"7099"}),c("path",{d:"M438.129 254.029c-18.2 0-32.9-14.7-32.9-32.9s14.7-32.9 32.9-32.9h369.6c18.2 0 32.9 14.7 32.9 32.9v363.5c0 18.2-14.7 32.9-32.9 32.9s-32.9-14.7-32.9-32.9v-330.6h-336.7z",fill:"#fff","p-id":"7100"})]}),c("span",{className:"hex",children:e}),t?c("span",{className:"copyTip",children:"已复制!"}):null]})})},ee=j.section`
  color: #333;
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
  margin-top: 0.6rem;
  overflow: visible;
  .item {
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    padding: 0.8rem 0 0.4rem 0.2rem;
    position: relative;
    &.cmyk {
      padding-left: 2.4rem;
    }
    &.rgb {
      color: #fff;
      text-align: right;
      &.r {
        color: rgb(255, 0, 0, 0.8);
      }
      &.g {
        color: rgb(0, 255, 0, 0.8);
      }
      &.b {
        color: rgb(0, 0, 255, 0.8);
      }
    }

    &:before {
      content: attr(data-id);
      text-transform: uppercase;
      position: absolute;
      font-size: 0.5rem;
      font-weight: 800;
      color: #fff;
      top: 0.4rem;
      left: 0;
      text-shadow: 0px 0 6px black;
    }
  }
`,oe=({CMYK:e,RGB:t=[0,0,0],hex:r,...o})=>{const[n,i,l,a]=e,[s,p,f]=t;return v(ee,{...o,children:[c("div",{className:"item cmyk c","data-id":"c",children:c(y,{progress:n,color:"#0093D3"})}),c("div",{className:"item cmyk m","data-id":"m",children:c(y,{progress:i,color:"#CC006B"})}),c("div",{className:"item cmyk y","data-id":"y",children:c(y,{progress:l,color:"#FFF10C"})}),c("div",{className:"item cmyk k","data-id":"k",children:c(y,{progress:a,color:"#333"})}),c("div",{className:"item rgb r","data-id":"r",children:s}),c("div",{className:"item rgb g","data-id":"g",children:p}),c("div",{className:"item rgb b","data-id":"b",children:f}),c("div",{className:"item","data-id":"hex",children:c(Z,{currColorHex:r})})]})};export{oe as default};
