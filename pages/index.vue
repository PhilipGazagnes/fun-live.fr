<template>
  <div>
    <Header />
    <Presentation />
    <Songs />
    <Contact />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Presentation from '../components/Presentation.vue';
import Songs from '../components/Songs.vue';
import Contact from '../components/Contact.vue';

export default {
  components: {
    Header,
    Presentation,
    Songs,
    Contact,
  },
};
</script>

<style lang="scss">
body {
  background-color: #141414;
  background-image: url(/bg-450.jpg);
  background-size: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
  font-size: 16px;
  font-family: 'Open Sans';
  @media screen and (min-width: 450px) {
    background-image: url(/bg-800.jpg);
  }
  @media screen and (min-width: 800px) {
    background-image: url(/bg-1200.jpg);
  }
  @media screen and (min-width: 1200px) {
    background-image: url(/bg-1600.jpg);
  }
  @media screen and (min-width: 1600px) {
    background-image: url(/bg-2000.jpg);
  }
}
</style>
