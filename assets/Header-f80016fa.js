import{u as t,j as s,a as r,L as i,g as n,s as a}from"./index-1543148e.js";const l=a.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  .logo {
    width: 2.8rem;
    height: 2.8rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background-color 1s;
    transition-delay: 0.6s;
  }
  > h1 {
    writing-mode: vertical-lr;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
  }
`;function d({rgb:e=[0,0,0]}){const{isMobile:o}=t();return o?null:s(l,{children:[r("img",{className:"logo",src:i,alt:"logo",style:{backgroundColor:`rgba(${e.join(",")},.5)`}}),r("h1",{style:{color:n(e)},children:"chinese color"})]})}export{d as default};
