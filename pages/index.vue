<template>
  <div>
    <Header />
    <Presentation />
    <Songs />
    <!-- <Contact /> -->
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Presentation from '../components/Presentation.vue';
import Songs from '../components/Songs.vue';
// import Contact from '../components/Contact.vue';

export default {
  components: {
    Header,
    Presentation,
    Songs,
    // Contact,
  },
};
</script>

<style lang="scss"></style>
