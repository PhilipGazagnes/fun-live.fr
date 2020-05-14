<template>
  <div>
    <Presentation />
    <Songs />
    <Contact />
  </div>
</template>

<script>
import Presentation from '../components/Presentation.vue';
import Songs from '../components/Songs.vue';
import Contact from '../components/Contact.vue';

export default {
  components: {
    Presentation,
    Songs,
    Contact,
  },
  head: {
    title: 'Animation karaoké avec musiciens | Fun live',
    description:
      'Fun Live est votre groupe de musique pour animer vos événements, soirées, mariages à Sète, Agde, Montpellier et alentours. Ambiance garantie !',
  },
};
</script>
