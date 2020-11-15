<template>
  <div>
    <Header />
    <Video />
    <About />
    <Songs />
    <Faq />
    <Review />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Video from '../components/Video';
import About from '../components/About';
import Songs from '../components/Songs';
import Faq from '../components/Faq';
import Review from '../components/Review';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default {
  components: {
    Header,
    Video,
    About,
    Songs,
    Faq,
    Review,
    Contact,
    Footer,
  },
  head: {
    title: 'FUN LIVE',
    description: '',
  },
};
</script>

<style lang="postcss" scoped>

</style>
