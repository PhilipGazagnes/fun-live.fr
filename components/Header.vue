<template>
  <div class="container">
    <nuxt-link to="/">
      <img src="/logo-fun-live.png" />
    </nuxt-link>
    <div>
      <nuxt-link to="/agenda/">Agenda</nuxt-link>
      <nuxt-link to="/prestations/">Prestations</nuxt-link>
      <nuxt-link to="/prestations/">Répertoire</nuxt-link>
      <nuxt-link to="/contact/">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sticky: false,
    };
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped>
.container {
  background: white;
  height: 120px;
  display: flex;
  justify-content: space-between;
  & > a {
    display: block;
    padding: 17px 0 0 30px;
    & > svg {
      width: 200px;
      height: 72px;
    }
  }
  & > div {
    display: flex;
    align-items: center;
    padding-right: 30px;
    & > a {
      display: block;
      margin-left: 30px;
      font-size: 1.5em;
      font-family: 'Geomanist';
      text-transform: uppercase;
      text-decoration: none;
      color: var(--primaryColor);
      &:hover {
        color: var(--secondaryColor);
      }
    }
  }
}
</style>
