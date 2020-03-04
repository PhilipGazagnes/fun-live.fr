<template>
  <section class="band">
    <div>
      <h2>3 musiciens pour vous accompagner !</h2>
    </div>
    <div>
      Fun Live est votre groupe pour passer un excellent moment. Fini les karaokés sur bande son. Notre concept : vous faire chanter dans les conditions d’un vrai concert.  Pour cela trois musiciens expérimentés vous accompagneront. Vous aurez la possibilité de choisir votre chanson dans le large répertoire que nous vous proposons, que ce soit pour devenir Mick Jagger, Elvis Presley, Johnny Halliday, Patricia Kaas ou encore Alain Souchon !
    </div>
  </section>
</template>

<script>
import SongList from "../components/SongList.vue";

export default {
  components: {
    SongList,
  },
};
</script>

<style lang="scss">
.band {
  margin:0 auto 50px;
  max-width:1200px;
  padding:0 20px;
  &::after {
    content: '';
    display: block;
    clear:both;
  }
  h2 {
    font-family: 'Permanent Marker';
    font-weight:normal;
    padding:0 30px 0 0;
    margin: 0;
    line-height:1.2em;
    font-size:1.5em;
    margin-bottom:15px;
    @media screen and (min-width:992px) {
      font-size:2.5em;
      line-height:1.2em;
      padding:0 60px 0 0;
    }
  }
  & > div {
    &:first-child {
      margin: 0 0 15px 0;
      @media screen and (min-width:768px) {
        float:left;
        width:33%;
      }
    }
    &:last-child {
      line-height:1.7em;
      @media screen and (min-width:768px) {
        float:left;
        width:66%;
      }
    }
  }
}
</style>