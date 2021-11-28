<template>
  <div class="home">
    <div class="banner">
      <h1>Chanter des tubes sur scène avec 3 musiciens, mais oui !</h1>
      <div class="video">
        <video autoplay muted loop>
          <source src="/tempvid.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <!-- <Temp />
    <Header />
    <Video />
    <About />
    <Songs />
    <Faq />
    <Review />
    <Contact />
    <Footer /> -->
  </div>
</template>

<script>
// import Temp from '../components/Temp';
// import Header from '../components/Header';
// import Video from '../components/Video';
// import About from '../components/About';
// import Songs from '../components/Songs';
// import Faq from '../components/Faq';
// import Review from '../components/Review';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

export default {
  components: {
    // Temp,
    // Header,
    // Video,
    // About,
    // Songs,
    // Faq,
    // Review,
    // Contact,
    // Footer,
  },
  head: {
    title: 'FUN LIVE',
    description: '',
  },
};
</script>

<style lang="postcss" scoped>
.home {
  position: relative;
}
.banner {
  position: relative;
  h1 {
    font-family: 'Geomanist';
    text-transform: uppercase;
    color: white;
    font-size: 3em;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 1000px;
    max-width: 80%;
    z-index: 1;
    margin: 0;
  }
}
.video {
  width: 100%;
  padding: 0 0 50% 0;
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
}
</style>
