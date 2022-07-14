<template>
  <div>
    <p>
      Ecrivez-nous à
      <a class="textlink" :href="`mailto:${email}`">{{ email }}</a
      >.
    </p>
    <p v-if="$store.state.subdomain === 'www'">
      Contactez Nico au
      <a class="textlink" :href="`tel:${telNico}`">{{ telNico }}</a
      >.
    </p>
    <img
      v-if="$store.state.subdomain === 'star'"
      src="/logo-airjprod.png"
      width="300"
    />
    <p v-if="$store.state.subdomain === 'www'">
      Contactez Phil au
      <a class="textlink" :href="`tel:${telPhil}`">{{ telPhil }}</a
      >.
    </p>
    <p v-if="$store.state.subdomain === 'star'">
      Contactez Airjprod au
      <a class="textlink" :href="`tel:${telAirjprod}`">{{ telAirjprod }}</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTel: false,
    };
  },
  computed: {
    telNico() {
      return this.showTel ? '07 83 89 45 85' : '';
    },
    telPhil() {
      return this.showTel ? '06 73 51 74 46' : '';
    },
    telAirjprod() {
      return this.showTel ? '06 62 52 14 14' : '';
    },
    email() {
      const email =
        this.$store.state.subdomain === 'star'
          ? 'info@airjprod.fr'
          : 'contactfunlive@gmail.com';
      return this.showTel ? email : '';
    },
  },
  mounted() {
    setTimeout(() => {
      this.showTel = true;
    }, 100);
  },
};
</script>
