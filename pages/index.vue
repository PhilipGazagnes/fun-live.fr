<template>
  <div>
      <h1>Fun Live <span>Karaoké Live Band</span></h1>
    <Header />
    <Directory />
    <Band />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Directory from "../components/Directory.vue";
import Band from "../components/Band.vue";

export default {
  components: {
    Header,
    Directory,
    Band,
  },
};
</script>

<style lang="scss">
$accentColor: #c7af35;

body {
  background-color: #141414;
  background-image: url(/bg-450.jpg);
  background-size: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
  font-size: 16px;
  font-family: "Open Sans";
  @media screen and (min-width:450px) {
    background-image: url(/bg-800.jpg);
  }
  @media screen and (min-width:800px) {
    background-image: url(/bg-1200.jpg);
  }
  @media screen and (min-width:1200px) {
    background-image: url(/bg-1600.jpg);
  }
  @media screen and (min-width:1600px) {
    background-image: url(/bg-2000.jpg);
  }
}

</style>
