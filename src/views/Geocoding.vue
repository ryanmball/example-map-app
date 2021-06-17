<template>
  <div id="geocoding-map"></div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#geocoding-map {
  /* position: absolute; */
  top: 0;
  bottom: 0;
  height: 650px;
  width: 100%;
}
</style>

<script>
/* global mapboxgl, mapboxSdk */
export default {
  data: function () {
    return {
      place: "",
    };
  },
  created: function () {},
  mounted: function () {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
      .forwardGeocode({
        query: "Zion National Park",
        autocomplete: false,
        limit: 1,
      })
      .send()
      .then(function (response) {
        if (
          response &&
          response.body &&
          response.body.features &&
          response.body.features.length
        ) {
          var feature = response.body.features[0];

          var map = new mapboxgl.Map({
            container: "geocoding-map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: feature.center,
            zoom: 10,
          });

          // Create a marker and add it to the map.
          new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
        }
      });
  },

  methods: {},
};
</script>
