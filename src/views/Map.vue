<template>
  <div id="map"></div>
</template>

<style>
#map {
  width: 100%;
  height: 650px;
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
    new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [1.5209, 41.5912], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
  methods: {},
};
</script>
