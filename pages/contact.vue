<template>
  <div class="wrapper">
    <div class="contact">
      <h1>Contact</h1>
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from '../components/Contact.vue';

export default {
  components: {
    Contact,
  },
  head: {
    title: 'Contact | Fun Live',
  },
};
</script>

<style type="postcss" scoped>
.contact {
  padding-bottom: 50px;
  & > div {
    margin-bottom: 10px;
    & > a {
      color: var(--secondaryColor);
      font-weight: bold;
    }
  }
}
</style>
