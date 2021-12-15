<template>
  <div class="wrapper">
    <div class="contact">
      <h1>Contact</h1>
      <div>
        Ecrivez-nous un email à :
        <a href="mailto:contactfunlive@gmail.com">contactfunlive@gmail.com</a>.
      </div>
      <div>
        Contactez Nico au <a :href="`tel:${telNico}`">{{ telNico }}</a
        >.
      </div>
      <div>
        Contactez Phil au <a :href="`tel:${telPhil}`">{{ telPhil }}</a
        >.
      </div>
    </div>
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
  },
  mounted() {
    setTimeout(() => {
      this.showTel = true;
    }, 100);
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
