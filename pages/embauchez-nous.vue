<template>
  <div class="wrapper">
    <h1>Embauchez-nous !</h1>
    <div class="sideImage">
      <span><img src="/misc/embauchez-nous.jpg" /></span>
      <div>
        <p>
          Qu’il s’agisse d'une session team-building, d’une soirée festive, d'un
          mariage, d'un anniversaire, ou autre type d'événement, nous vous
          proposons une expérience clé en main où vous n’aurez à vous soucier
          que de passer un très bon moment avec vos invités.
        </p>
        <p>
          Du début à la fin de la soirée, nous vous proposons différentes phases
          avant et après le concert karaoké Live : ambiance musicale, concert,
          dj, blind-test et autres animations pour entretenir l'ambiance tout au
          long de votre soirée.
        </p>
        <p>
          Présentez-nous votre projet, nous vous proposerons rapidement un devis
          pour une prestation sur mesure !
        </p>
        <Contact />
      </div>
    </div>
  </div>
</template>

<script>
import Contact from '../components/Contact.vue';

export default {
  components: {
    Contact,
  },
};
</script>
