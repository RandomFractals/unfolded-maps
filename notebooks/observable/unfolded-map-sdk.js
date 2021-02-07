// URL: https://observablehq.com/@randomfractals/unfolded-map-sdk
// Title: Unfolded Map SDK
// Author: Taras Novak (@randomfractals)
// Version: 78
// Runtime version: 1

const m0 = {
  id: "3c2b05bd9a1b89e8@78",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Unfolded Map SDK

Simple example using [Unfolded Map SDK](https://docs.unfolded.ai/map-sdk)
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### 1. Import Unfolded Map SDK Module`
)})
    },
    {
      name: "mapSDK",
      value: (function(){return(
import('https://unpkg.com/@unfolded/map-sdk@0.1.1/dist/index.js?module')
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### 2. Create and Display Unfolded Map IFrame`
)})
    },
    {
      name: "viewof map",
      inputs: ["mapSDK","width"],
      value: (function*(mapSDK,width)
{
  let iframe;  
  const map = mapSDK.createMap({
    mapUUID: '31b96f3a-92a0-4146-b6c2-c1c48fb128e5',
    embed: false,
    width: width,
    height: 600,
    onLoad: () => {
      iframe.value = map;
      iframe.dispatchEvent(new CustomEvent("input"));
    }
  });
  iframe = map.iframe;
  yield iframe;
}
)
    },
    {
      name: "map",
      inputs: ["Generators","viewof map"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### 3. Set Map View State`
)})
    },
    {
      inputs: ["mapSDK","map"],
      value: (function(mapSDK,map){return(
mapSDK.setViewState(map, {
  longitude: -96.4247,
  latitude: 31.51073,
  zoom: 1
})
)})
    }
  ]
};

const notebook = {
  id: "3c2b05bd9a1b89e8@78",
  modules: [m0]
};

export default notebook;
