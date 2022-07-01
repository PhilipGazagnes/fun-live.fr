<template>
  <div>
    <p>
      Ecrivez-nous à
      <a class="textlink" :href="`mailto:${email}`">{{ email }}</a
      >.
    </p>
    <p v-if="!$store.state.airjprod">
      Contactez Nico au
      <a class="textlink" :href="`tel:${telNico}`">{{ telNico }}</a
      >.
    </p>
    <img v-if="$store.state.airjprod" src="/logo-airjprod.png" width="300" />
    <p v-if="!$store.state.airjprod">
      Contactez Phil au
      <a class="textlink" :href="`tel:${telPhil}`">{{ telPhil }}</a
      >.
    </p>
    <p v-if="$store.state.airjprod">
      Contactez Airjprod au
      <a class="textlink" :href="`tel:${telPhil}`">{{ telAirjprod1 }}</a> ou au
      <a class="textlink" :href="`tel:${telPhil}`">{{ telAirjprod2 }}</a
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
    telAirjprod1() {
      return this.showTel ? '04 68 47 13 48' : '';
    },
    telAirjprod2() {
      return this.showTel ? '06 86 70 20 50' : '';
    },
    email() {
      const email = this.$store.state.airjprod
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
