<template>
  <div>
    <p>
      Ecrivez-nous à
      <a class="textlink" :href="`mailto:${email}`">{{ email }}</a
      >.
    </p>
    <p>
      Contactez Nico au
      <a class="textlink" :href="`tel:${telNico}`">{{ telNico }}</a
      >.
    </p>
    <p>
      Contactez Phil au
      <a class="textlink" :href="`tel:${telPhil}`">{{ telPhil }}</a
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
    email() {
      return this.showTel ? 'contactfunlive@gmail.com' : '';
    },
  },
  mounted() {
    setTimeout(() => {
      this.showTel = true;
    }, 100);
  },
};
</script>
