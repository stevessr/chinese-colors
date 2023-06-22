import{s,a as e,j as c}from"./index-1543148e.js";const i=s.div`
  padding: 0;
  .circular-chart {
    display: block;
    max-width: 2.4rem;
    .circle-bg {
      fill: rgba(255, 255, 255, 0.8);
      stroke: #eee;
      stroke-width: 4.2;
    }
    .circle {
      fill: rgba(255, 255, 255, 0.6);
      stroke-width: 3.2;
      stroke-linecap: round;
      transition: all 1s ease-out;
    }
    .percentage {
      font-family: sans-serif;
      font-size: 0.5em;
      text-anchor: middle;
      font-weight: bold;
    }
  }
  &.percent .circular-chart {
    min-width: unset;
    overflow: unset;
    .circle-bg {
      stroke: none;
    }
    .circle {
      stroke-width: 8;
      stroke-linecap: butt;
    }
  }
`,n=({progress:a=10,color:r="#333",type:t=""})=>e(i,{className:`${t=="percent"?"percent":""}`,color:r,children:c("svg",{viewBox:"0 0 36 36",className:"circular-chart orange",children:[e("path",{className:"circle-bg",d:`M18 2.0845\r
          a 15.9155 15.9155 0 0 1 0 31.831\r
          a 15.9155 15.9155 0 0 1 0 -31.831`}),e("path",{className:"circle",style:{stroke:r},strokeDasharray:`${a}, 100`,d:`M18 2.0845\r
          a 15.9155 15.9155 0 0 1 0 31.831\r
          a 15.9155 15.9155 0 0 1 0 -31.831`}),t!=="percent"&&e("text",{x:"18",y:"22",style:{fill:r},className:"percentage",children:a})]})});export{n as C};
