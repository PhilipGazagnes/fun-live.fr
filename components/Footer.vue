<template>
  <div class="wrapper">
    <div class="livetonight">
      <a
        href="https://www.livetonight.fr/groupe-musique-dj/38645-fun-live"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/dcyafbpoh/image/upload/v1668091013/logo_blanc_vert_mv.png"
          alt="38645-fun-live"
          style="width: 200px; height: 200px"
        />
      </a>
    </div>
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.livetonight {
  text-align: center;
  margin-top: 50px;
}
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
