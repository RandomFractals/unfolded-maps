// URL: https://observablehq.com/@randomfractals/unfolded-maps
// Title: Unfolded Maps
// Author: Taras Novak (@randomfractals)
// Version: 126
// Runtime version: 1

const m0 = {
  id: "b77afae70fb6e351@126",
  variables: [
    {
      inputs: ["md","previews","maps"],
      value: (function(md,previews,maps){return(
md`# Unfolded Maps

Sample maps from [Unfolded Studio](https://studio.unfolded.ai/home)

${previews(maps.items)}`
)})
    },
    {
      name: "maps",
      value: (function(){return(
{
  "items": [
    {
      "id": "70a7a095-1864-45c1-8530-b1767945d433",
      "name": "The Lego New York",
      "description": "A map made using GeoTIFF raster data from SRTM DEM, hexified by unfolded's data pipeline to ~130m diameter H3 hexagons with kring smoothing.",
      "datasets": [
        {
          "id": "7ee6e40f-4066-4892-977a-8754b96c5630",
          "url": "https://cdn.unfolded.ai/maps/30504078-cc24-454b-bcc7-a9cf7b0d21b7/published/70a7a095-1864-45c1-8530-b1767945d433/dataset-7ee6e40f-4066-4892-977a-8754b96c5630.json"
        }
      ],
      "studioState": {
        "url": "https://cdn.unfolded.ai/maps/30504078-cc24-454b-bcc7-a9cf7b0d21b7/published/70a7a095-1864-45c1-8530-b1767945d433/studio-state.json"
      },
      "previewPath": "https://cdn.unfolded.ai/maps/30504078-cc24-454b-bcc7-a9cf7b0d21b7/published/70a7a095-1864-45c1-8530-b1767945d433/preview.png",
      "numberOfViews": 108,
      "ownerId": "00000000-a83a-49f8-aaaa-000000000000",
      "sourceMapId": "30504078-cc24-454b-bcc7-a9cf7b0d21b7",
      "createdAt": "2020-11-02T22:17:18.000Z",
      "updatedAt": "2021-01-13T00:32:39.000Z"
    },
    {
      "id": "c344c980-1eac-4f50-96fc-a3b335b06790",
      "name": "Every Thousand People in the United States",
      "description": "Draw a population map that reflects where people actually are has always been a challenge. Traditional population data comes from census blocks of arbitrary boundaries. At unfolded we used Microsoft's building footprint data as our starting point. Using H3’s geo transform power, we projected Census block level population data (ACS) onto the buildings to calculate the probability of population density and demographics for each buildings in united State. We then used hierarchical properties of H3 to distribute the population of every 1000-3000 people to each hexagon.",
      "datasets": [
        {
          "id": "b6dd53cd-cb75-48c3-b74c-dd4b7168f010",
          "url": "https://cdn.unfolded.ai/maps/859ee1e4-864f-4dc2-83a8-c891089a0f86/published/c344c980-1eac-4f50-96fc-a3b335b06790/dataset-b6dd53cd-cb75-48c3-b74c-dd4b7168f010.json"
        }
      ],
      "studioState": {
        "url": "https://cdn.unfolded.ai/maps/859ee1e4-864f-4dc2-83a8-c891089a0f86/published/c344c980-1eac-4f50-96fc-a3b335b06790/studio-state.json"
      },
      "previewPath": "https://cdn.unfolded.ai/maps/859ee1e4-864f-4dc2-83a8-c891089a0f86/published/c344c980-1eac-4f50-96fc-a3b335b06790/preview.png",
      "numberOfViews": 89,
      "ownerId": "00000000-a83a-49f8-aaaa-000000000000",
      "sourceMapId": "859ee1e4-864f-4dc2-83a8-c891089a0f86",
      "createdAt": "2020-11-02T22:53:13.000Z",
      "updatedAt": "2021-01-13T00:24:27.000Z"
    },
    {
      "id": "eb6faefc-4670-4cb2-bd5f-77c7ec43b94c",
      "name": "Farmlands in H3 Vector Tiles",
      "description": "An interactive map of 300 million acres of US farmland overlaying crop health and farming practices from the Indigo Atlas Technology Platform.\\n\\n Unfolded’s hexagonal tiling technology and GPU rendering made it possible to bring these eight million individual fields to life right in your browser.",
      "datasets": [],
      "studioState": {
        "url": "https://cdn.unfolded.ai/maps/9c0dd217-7e2b-4215-8a04-dfbf16b85914/published/eb6faefc-4670-4cb2-bd5f-77c7ec43b94c/studio-state.json"
      },
      "previewPath": "https://cdn.unfolded.ai/maps/9c0dd217-7e2b-4215-8a04-dfbf16b85914/published/eb6faefc-4670-4cb2-bd5f-77c7ec43b94c/preview.png",
      "numberOfViews": 103,
      "ownerId": "00000000-a83a-49f8-aaaa-000000000000",
      "sourceMapId": "9c0dd217-7e2b-4215-8a04-dfbf16b85914",
      "createdAt": "2020-11-17T17:48:25.000Z",
      "updatedAt": "2021-01-13T00:33:08.000Z"
    },
    {
      "id": "ecfb3cf1-0fc7-4154-93b9-20c5d07c9320",
      "name": "Human Modification of the Earth",
      "description": "The level of human modification of the earth at 1 square-kilometer resolution. \nUsing the global Human Modification dataset provided by Google Earth Engine. Color red correlates with higher intensity of modification.",
      "datasets": [
        {
          "id": "0592d191-a2e6-4bae-874d-b88ec4f1336c",
          "url": "https://cdn.unfolded.ai/maps/a21a7817-070d-4f76-9dca-4408458276ad/published/ecfb3cf1-0fc7-4154-93b9-20c5d07c9320/dataset-0592d191-a2e6-4bae-874d-b88ec4f1336c.json",
          "name": "human_modify.csv",
          "type": "managed"
        }
      ],
      "studioState": {
        "url": "https://cdn.unfolded.ai/maps/a21a7817-070d-4f76-9dca-4408458276ad/published/ecfb3cf1-0fc7-4154-93b9-20c5d07c9320/studio-state.json"
      },
      "previewPath": "https://cdn.unfolded.ai/maps/a21a7817-070d-4f76-9dca-4408458276ad/published/ecfb3cf1-0fc7-4154-93b9-20c5d07c9320/preview.png",
      "numberOfViews": 54,
      "ownerId": "00000000-a83a-49f8-aaaa-000000000000",
      "sourceMapId": "a21a7817-070d-4f76-9dca-4408458276ad",
      "createdAt": "2020-11-17T18:11:19.000Z",
      "updatedAt": "2021-01-13T00:18:57.000Z"
    },
    {
      "id": "76aca1e0-896c-4e36-a2d2-f817ba44f3a5",
      "name": "Medium Household Income in the US",
      "description": "A US county map by medium household income based on 2017 Labor Force Information. This map is made using the join function to link county geometries and the survey results. ",
      "datasets": [
        {
          "id": "06d80201-1d6a-4386-8cd0-69f30b4c74ad",
          "url": "https://cdn.unfolded.ai/maps/b80069c4-c7d9-46eb-9bf3-b7118867ddba/published/76aca1e0-896c-4e36-a2d2-f817ba44f3a5/dataset-06d80201-1d6a-4386-8cd0-69f30b4c74ad.json",
          "name": "county_income_estimates.csv",
          "type": "managed"
        },
        {
          "id": "6374b375-e238-40d6-91ad-41ad6710d54e",
          "url": "https://cdn.unfolded.ai/maps/b80069c4-c7d9-46eb-9bf3-b7118867ddba/published/76aca1e0-896c-4e36-a2d2-f817ba44f3a5/dataset-6374b375-e238-40d6-91ad-41ad6710d54e.json",
          "name": "Us Counties.json",
          "type": "managed"
        }
      ],
      "studioState": {
        "url": "https://cdn.unfolded.ai/maps/b80069c4-c7d9-46eb-9bf3-b7118867ddba/published/76aca1e0-896c-4e36-a2d2-f817ba44f3a5/studio-state.json"
      },
      "previewPath": "https://cdn.unfolded.ai/maps/b80069c4-c7d9-46eb-9bf3-b7118867ddba/published/76aca1e0-896c-4e36-a2d2-f817ba44f3a5/preview.png",
      "numberOfViews": 119,
      "ownerId": "00000000-a83a-49f8-aaaa-000000000000",
      "sourceMapId": "b80069c4-c7d9-46eb-9bf3-b7118867ddba",
      "createdAt": "2020-11-17T18:03:02.000Z",
      "updatedAt": "2021-01-13T00:11:51.000Z"
    },
    {
      "id": "0954dd97-7d03-48c1-9d58-a0ab42b0ddf3",
      "name": "Refugee Settlements",
      "description": "Refugee settlements population by country of origin and asylum, between 1960 - 2019",
      "datasets": [
        {
          "id": "c0ddbe47-8b7f-4d14-8404-8369fc7b5eb7",
          "url": "https://cdn.unfolded.ai/maps/e91ecef8-68ee-493d-b4e9-1e31274ebba0/published/0954dd97-7d03-48c1-9d58-a0ab42b0ddf3/dataset-c0ddbe47-8b7f-4d14-8404-8369fc7b5eb7.json"
        }
      ],
      "studioState": {
        "url": "https://cdn.unfolded.ai/maps/e91ecef8-68ee-493d-b4e9-1e31274ebba0/published/0954dd97-7d03-48c1-9d58-a0ab42b0ddf3/studio-state.json"
      },
      "previewPath": "https://cdn.unfolded.ai/maps/e91ecef8-68ee-493d-b4e9-1e31274ebba0/published/0954dd97-7d03-48c1-9d58-a0ab42b0ddf3/preview.png",
      "numberOfViews": 35,
      "ownerId": "00000000-a83a-49f8-aaaa-000000000000",
      "sourceMapId": "e91ecef8-68ee-493d-b4e9-1e31274ebba0",
      "createdAt": "2020-11-16T18:39:11.000Z",
      "updatedAt": "2021-01-13T00:31:21.000Z"
    },
    {
      "id": "e3eb7ff4-045b-4f12-ba72-f687e428f2e5",
      "name": "World Flights",
      "description": "Animating two hours of flight path data collected by OpenSky Network using the trip layer. ",
      "datasets": [
        {
          "id": "cbe602c1-699c-4390-8fd3-3b198f13607a",
          "url": "https://cdn.unfolded.ai/maps/ecca7b08-4d00-47e5-a3c9-44a146311531/published/e3eb7ff4-045b-4f12-ba72-f687e428f2e5/dataset-cbe602c1-699c-4390-8fd3-3b198f13607a.json",
          "name": "world_flights.json",
          "type": "managed"
        }
      ],
      "studioState": {
        "url": "https://cdn.unfolded.ai/maps/ecca7b08-4d00-47e5-a3c9-44a146311531/published/e3eb7ff4-045b-4f12-ba72-f687e428f2e5/studio-state.json"
      },
      "previewPath": "https://cdn.unfolded.ai/maps/ecca7b08-4d00-47e5-a3c9-44a146311531/published/e3eb7ff4-045b-4f12-ba72-f687e428f2e5/preview.png",
      "numberOfViews": 72,
      "ownerId": "00000000-a83a-49f8-aaaa-000000000000",
      "sourceMapId": "ecca7b08-4d00-47e5-a3c9-44a146311531",
      "createdAt": "2020-11-17T18:42:22.000Z",
      "updatedAt": "2021-01-13T00:13:03.000Z"
    },
    {
      "id": "cc2f7caa-a5e8-480a-a0ad-72d80f4d5d9c",
      "name": "SF Building Footprints",
      "description": "Building footprints in San Francisco, colored by ground elevation.",
      "datasets": [
        {
          "id": "d262dd85-f932-418a-a7e7-a9aa36edaccf",
          "url": "https://cdn.unfolded.ai/maps/f72cdbd9-51dd-4517-9b2f-a08bab810afc/published/cc2f7caa-a5e8-480a-a0ad-72d80f4d5d9c/dataset-d262dd85-f932-418a-a7e7-a9aa36edaccf.json",
          "name": "SF Building Footprints.csv",
          "type": "managed"
        }
      ],
      "studioState": {
        "url": "https://cdn.unfolded.ai/maps/f72cdbd9-51dd-4517-9b2f-a08bab810afc/published/cc2f7caa-a5e8-480a-a0ad-72d80f4d5d9c/studio-state.json"
      },
      "previewPath": "https://cdn.unfolded.ai/maps/f72cdbd9-51dd-4517-9b2f-a08bab810afc/published/cc2f7caa-a5e8-480a-a0ad-72d80f4d5d9c/preview.png",
      "numberOfViews": 0,
      "ownerId": "00000000-a83a-49f8-aaaa-000000000000",
      "sourceMapId": "f72cdbd9-51dd-4517-9b2f-a08bab810afc",
      "createdAt": "2021-01-13T00:32:59.000Z",
      "updatedAt": "2021-01-13T00:32:59.000Z"
    }
  ]
}
)})
    },
    {
      name: "previews",
      inputs: ["html","preview"],
      value: (function(html,preview){return(
function previews(maps) {
  return html`<div class="map-list">${maps.map(preview)}</div>`;
}
)})
    },
    {
      name: "preview",
      inputs: ["html"],
      value: (function(html){return(
function preview({sourceMapId, name, description, previewPath}) {
  return html`<a class="map-card" href="https://studio.unfolded.ai/public/${encodeURI(sourceMapId)}" target="_blank" title="${name} - ${description}">
  <div class="map-thumbnail" style="background-image: url(${previewPath});"></div>
  <div class="map-title">${name}</div>
  <div class="map-description">${description}</div>
</a>`;
}
)})
    },
    {
      name: "mapStyles",
      inputs: ["html"],
      value: (function(html){return(
html `
<style>
.map-list {
  display: grid; 
  grid-gap: 20px; 
  grid-template-columns: repeat(auto-fill, minmax(240px, 5fr));
}
.map-card {
  border: solid 1px #e8e8e8;
  border-radius: 4px; 
  display: inline-flex; 
  flex-direction: column; 
  align-items: center; 
  font-size: 18px; 
  color: #1b1e23; 
  width: 100%;
}
.map-thumbnail {
  border: solid 1px #e8e8e8;
  box-sizing: border-box; 
  width: 100%; 
  padding-top: 62.5%; 
  background-size: cover;
}
.map-title {
  width: 95%; 
  white-space: nowrap; 
  text-overflow: ellipsis; 
  overflow: hidden; 
  padding: 4px;
  padding-bottom: 0px;
}
.map-description {
  color: #696969;
  font-size: 15px;
  overflow: hidden;
  text-overflow: clip;
  white-space: normal;
  width: 95%;
  height: 3em;
  padding: 4px;
  margin-bottom: 10px;
}
</style>
`
)})
    }
  ]
};

const notebook = {
  id: "b77afae70fb6e351@126",
  modules: [m0]
};

export default notebook;
