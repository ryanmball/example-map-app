<template>
  <div id="map"></div>
</template>

<style>
#map {
  width: 100%;
  height: 650px;
}
#marker {
  /* background-size: cover; */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
}
</style>

<script>
/* global mapboxgl */
export default {
  data: function () {
    return {
      places: [
        {
          lat: 48.7596128,
          lng: -113.7870225,
          description: "Glacier National Park",
        },
        { lat: 37.8651, lng: -119.5383, description: "Yosemite National Park" },
        {
          lat: 37.75,
          lng: -105.5,
          description: "Great Sand Dunes National Park",
        },
        {
          lat: 40.3428,
          lng: -105.6836,
          description: "Rocky Mountain National Park",
        },
      ],
    };
  },
  created: function () {},
  mounted: function () {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
    var ceuse = [5.937, 44.499];
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: ceuse, // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
    // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
      "Ceuse is a beautiful climbing area in Southern France. The second ever 5.15d/9c route was established here by Alex Megos."
    );

    // create DOM element for the marker
    var el = document.createElement("div");
    el.id = "marker";

    // Create a default Marker and add it to the map.
    var marker1 = new mapboxgl.Marker()
      .setLngLat(ceuse)
      .setPopup(popup)
      .addTo(map);
    console.log(marker1);

    // Create a default Marker, colored black, rotated 45 degrees.
    var marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
      .setLngLat([2.697, 48.402])
      .addTo(map);
    console.log(marker2);

    this.places.forEach((place) => {
      var popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
      new mapboxgl.Marker()
        .setLngLat([place.lng, place.lat])
        .setPopup(popup)
        .addTo(map);
    });
  },

  methods: {},
};
</script>
