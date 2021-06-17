import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mapbox from "../views/Map.vue";
import TerrainMap from "../views/TerrainMap.vue";
import Geocoding from "../views/Geocoding.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/map",
    name: "Map",
    component: Mapbox,
  },
  {
    path: "/terrain-map",
    name: "TerrainMap",
    component: TerrainMap,
  },
  {
    path: "/geocoding",
    name: "Geocoding",
    component: Geocoding,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
