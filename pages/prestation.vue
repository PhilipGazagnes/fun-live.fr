<template>
  <div class="wrapper">
    <h1>Prestation</h1>
    <div class="sideImage">
      <span
        ><img
          src="https://aeovnsnhjq.cloudimg.io/v7/_funlive_/misc/embauchez-nous.jpg?width=600"
      /></span>
      <div>
        <p>
          Qu’il s’agisse d'une session team-building, d’une soirée festive, d'un
          mariage, d'un anniversaire, ou autre type d'événement, nous vous
          proposons une expérience karaoké live clé en main où vous n’aurez à
          vous soucier que de passer un très bon moment avec vos invités.
        </p>
        <p>
          Présentez-nous votre projet, nous vous proposerons rapidement un devis
          pour une prestation sur mesure !
        </p>
        <p>
          Fun Live s'adapte à vos envies en vous proposant les formules
          suivantes :
        </p>
        <p>
          <strong>Formule Trio</strong><br />
          Avec un guitariste, un bassiste et un batteur. C'est la formule la
          plus dynamique et énergique.
        </p>
        <p>
          <strong>Formule Duo</strong><br />
          Avec un guitariste et un bassiste ou un batteur.
        </p>
        <p>
          <strong>Formule Solo</strong><br />
          Avec un guitariste acoustique.
        </p>
        <p>
          Dans tous les cas, le groupe anime, chante et met à l'aise vos
          invités, qui se régaleront à venir chanter sur scène !
        </p>
        <Contact class="contact" />
        <p class="review">
          <Star />Groupe au top pour mettre les chanteurs d'un soir à l'aise,
          arrangeant, s'adapte aux participants, accompagne aussi les chanteurs
          en herbe ;-) ce qui permet de vraiment profiter du moment et pour
          couronner le tout, ils sont supers sympas ! Nous avons passé pour la
          deuxième année consécutive, un très bon moment. Merci !
          <span><strong>Audrey Cavalier</strong>, Heredis</span>
        </p>

        <p class="review">
          <Star />Super son, Super playlist, super musiciens, super idée : un
          cocktail gagnant pour vivre une soirée de folie. Le karaoké live
          permet de vivre l’expérience d’interpréter des chansons comme si vous
          étiez une star. Variété française ou internationale, les musiciens
          sont là et assurent avec vous. De vrais musiciens 4x4 qui s’adaptent
          aux lieux et au nombre d’invités. Pour moi une des meilleures idées
          pour clôturer un séminaire ou lors d’une soirée d’entreprise. A
          consommer sans modérations :)
          <span><strong>Loic Mersch</strong>, Agence bivouAk</span>
        </p>

        <p class="review">
          <Star />Groupe professionnel qui propose des soirées live avec
          ambiance garantie. Nous nous sommes régalés. Les musiciens mettent les
          participants très à l'aise. Je les ai déjà recommandé et ils ont
          toujours assuré dans toutes situations. À suivre ;)
          <span><strong>Camping de l'Europe</strong>, Vic-la-Gardiole</span>
        </p>

        <p class="review">
          <Star />Avec le groupe Fun Live, soirée assurée dans la qualité des
          choix des chansons et dans l'ambiance toujours aussi joyeuse. Groupe à
          ne pas rater et à conseiller pour un bon Karaoké.
          <span><strong>Le Zanzi-Bar</strong>, Sète</span>
        </p>

        <p class="review">
          <Star />Novateur, excellente prestation ! Un concept très sympa qui
          change du karaoké traditionnel. Vraiment ravie de ma colaboration avec
          Fun Live et enchantée de la participation et des retours positifs des
          clients qui ont grandement apprécié l'événement.
          <span><strong>Association Esprit Partage</strong>, Sète</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from '../components/Contact.vue';
import Star from '../assets/svg/star.svg?inline';

export default {
  components: {
    Contact,
    Star,
  },
  head: {
    title: 'Prestation | Fun Live',
  },
};
</script>

<style lang="postcss" scoped>
.contact {
  margin-bottom: 20px;
}
.review {
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-style: italic;
  svg {
    width: 20px;
    height: 20px;
    fill: yellow;
    margin: 0 5px 0 0;
    position: relative;
    top: 3px;
  }
  span {
    display: block;
    margin-top: 5px;
  }
}
</style>
