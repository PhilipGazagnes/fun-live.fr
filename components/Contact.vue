<template>
  <section class="concertBg">
    <h2 class="sectionTitleType1">Contactez-nous</h2>
    <p class="containerNarrow">
      Vous souhaitez avoir plus d’informations sur nos prestations, planifier
      une date dans votre établissement, ou pour un événement ? Laissez nous un
      message et vos coordonnées à l'adresse suivante :
    </p>
    <p class="containerNarrow email">
      <button @click="handleClick">contactfunlive@gmail.com</button>
    </p>
    <p class="containerNarrow">
      Nous vous répondrons dans les plus brefs délais. Au plaisir de vous lire !
    </p>
  </section>
</template>

<script>
export default {
  methods: {
    handleClick() {
      if (window.ga) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'navigation',
          eventAction: 'clickEmail',
        });
      }
      window.location.href = 'mailto:contactfunlive@gmail.com';
    },
  },
};
</script>

<style lang="scss">
.concertBg {
  padding: 0 0 100px 0;
  @media screen and ($mfTablet) {
    padding: 0 0 150px 0;
  }
}
.email {
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and ($mfPhone) {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  button {
    color: white;
    text-decoration: none;
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: border 0.3s;
    cursor: pointer;
    text-align: center;
    padding: 10px 0;
    background: none;
    font-family: inherit;
    @media screen and ($mfPhone) {
      display: inline-block;
      padding: 20px 30px;
      font-size: 1.2em;
    }
    @media screen and ($mfTablet) {
      font-size: 1.5em;
    }
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
