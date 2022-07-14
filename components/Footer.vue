<template>
  <div class="wrapper">
    <div class="footer">
      <nuxt-link class="textlink" to="/contact">Contactez-nous !</nuxt-link>
      <div v-if="$store.state.subdomain === 'www'" class="social">
        L'aventure musicale continue sur
        <a
          class="textlink"
          target="_blank"
          href="https://www.facebook.com/funlive34/"
          >Facebook</a
        >
        et
        <a
          class="textlink"
          target="_blank"
          href="https://www.instagram.com/funlivekaraoke/"
          >Instagram</a
        >
        !
      </div>
      <!-- <div>
        <p>
          <Star />Groupe professionnel qui propose des soirées live avec
          ambiance garantie. Nous avons osé chanter avec une amie et nous nous
          sommes régalées. Les musiciens nous mettent très à l'aise. Je les ai
          déjà recommandé et ils ont toujours assuré dans toutes situations. À
          suivre ;)
        </p>
        <p><strong>Camping de l'Europe</strong>, Vic-la-Gardiole</p>

        <p>
          <Star />Avec le groupe Fun Live, soirée assurée dans la qualité des
          choix des chansons et dans l'ambiance toujours aussi joyeuse. Groupe à
          ne pas rater et à conseiller pour un bon Karaoké.
        </p>
        <p><strong>Le Zanzi-Bar</strong>, Sète</p>

        <p>
          <Star />Novateur, excellente prestation et un grand talent d'animation
          ! Un concept très sympa qui change du karaoké traditionnel. Vraiment
          ravie de ma colaboration avec Fun Live et enchantée de la
          participation et des retours positifs des clients qui ont grandement
          apprécié l'événement.
        </p>
        <p><strong>Association Esprit Partage</strong>, Sète</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.footer {
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 20px 20px 30px 20px;
}
.social {
  color: white;
  padding: 10px 0 0 0;
}
</style>
