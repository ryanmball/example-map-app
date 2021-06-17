<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <button @click="showAlert()">Hello world</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

/* global Swal */
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created: function () {},
  methods: {
    showAlert() {
      Swal.fire({
        title: "Hello!",
        text: "Hello from SweetAlerts!",
        icon: "success",
        confirmButtonText: "Rad",
      });
    },
  },
};
</script>
