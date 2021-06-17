<template>
  <div id="terrain-map"></div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#terrain-map {
  /* position: absolute; */
  top: 0;
  bottom: 0;
  height: 650px;
  width: 100%;
}
</style>

<script>
/* global mapboxgl */
export default {
  data: function () {
    return {};
  },
  created: function () {},
  mounted: function () {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
    var map = new mapboxgl.Map({
      container: "terrain-map",
      zoom: 13.1,
      center: [-114.34411, 32.6141],
      pitch: 50,
      bearing: 80,
      style: "mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y",
    });

    map.on("load", function () {
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

      // add a sky layer that will show when the map is highly pitched
      map.addLayer({
        id: "sky",
        type: "sky",
        paint: {
          "sky-type": "atmosphere",
          "sky-atmosphere-sun": [0.0, 0.0],
          "sky-atmosphere-sun-intensity": 15,
        },
      });
    });
  },
};
</script>
