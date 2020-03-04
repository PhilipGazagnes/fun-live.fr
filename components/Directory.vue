<template>
  <section class="directory">
    <div>
      <h2>Un large répertoire à chanter !</h2>
      <p>Comme lors d’un karaoké classique, les paroles sont à votre disposition, et les musiciens vous aident à assurer !</p>
    </div>
    <div>
      <SongList />
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
.directory {
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
  p {
    padding:0 30px 0 0;
    margin:0;
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
      @media screen and (min-width:768px) {
        float:left;
        width:66%;
      }
    }
  }
}
</style>