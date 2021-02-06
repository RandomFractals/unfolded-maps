// URL: https://observablehq.com/@randomfractals/hello-unfolded
// Title: Hello, Unfolded!
// Author: Taras Novak (@randomfractals)
// Version: 63
// Runtime version: 1

const m0 = {
  id: "277eacf137ed23c3@63",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Hello, Unfolded!`
)})
    },
    {
      name: "fullscreen",
      inputs: ["html"],
      value: (function(html)
{
  const button = html`<button>Fullscreen`;
  button.onclick = () =>
    button.parentElement.nextElementSibling.requestFullscreen();
  return button;
}
)
    },
    {
      inputs: ["html","width","mapSDK"],
      value: (function(html,width,mapSDK){return(
html`<iframe id="mapFrame" height="600px" width="${width}" src="${mapSDK.getMapUrl('31b96f3a-92a0-4146-b6c2-c1c48fb128e5')}" />`
)})
    },
    {
      name: "mapSDK",
      value: (function(){return(
import('https://unpkg.com/@unfolded/map-sdk@0.1.1/dist/index.js?module')
)})
    }
  ]
};

const notebook = {
  id: "277eacf137ed23c3@63",
  modules: [m0]
};

export default notebook;
