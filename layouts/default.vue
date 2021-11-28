<template>
  <div>
    <Header />
    <div class="page">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
body {
  background-color: var(--primaryColor);
}
.page {
  color: white;
  font-family: 'Open Sans', sans-serif;
  /* background: rgba(255, 255, 255, 0.1);
  width: 1300px;
  margin: 50px auto;
  padding: 30px; */
}
</style>
