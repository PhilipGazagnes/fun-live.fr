<template>
  <section class="directory">
    <div>
      <h2>Un large répertoire à chanter !</h2>
      <p>
        Comme lors d’un karaoké classique, les paroles sont à votre disposition,
        et les musiciens vous aident à assurer !
      </p>
    </div>
    <div>
      <div>
        <ul class="songList">
          <li v-for="(s, index) in songs" :key="index">
            <strong>{{ s.name }}</strong>
            <small>{{ s.artist }}</small>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import songsJson from '../data/index.json';

export default {
  data() {
    return {
      songs: songsJson.sort(this.compare),
    };
  },
  methods: {
    compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const songA = this.regularFirstLetter(a.name.toUpperCase());
      const songB = this.regularFirstLetter(b.name.toUpperCase());

      let comparison = 0;
      if (songA > songB) {
        comparison = 1;
      } else if (songA < songB) {
        comparison = -1;
      }
      return comparison;
    },
    regularFirstLetter(str) {
      let txt = str;
      if (txt.startsWith('ç') || txt.startsWith('Ç')) {
        txt = `C${txt.substring(1)}`;
      }
      return txt;
    },
  },
};
</script>

<style lang="scss">
.directory {
  margin: 0 auto 50px;
  max-width: 1200px;
  padding: 0 20px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  h2 {
    font-family: 'Permanent Marker';
    font-weight: normal;
    padding: 0 30px 0 0;
    margin: 0;
    line-height: 1.2em;
    font-size: 1.5em;
    margin-bottom: 15px;
    @media screen and (min-width: 992px) {
      font-size: 2.5em;
      line-height: 1.2em;
      padding: 0 60px 0 0;
    }
  }
  p {
    padding: 0 30px 0 0;
    margin: 0;
  }
  & > div {
    &:first-child {
      margin: 0 0 15px 0;
      @media screen and (min-width: 768px) {
        float: left;
        width: 33%;
      }
    }
    &:last-child {
      @media screen and (min-width: 768px) {
        float: left;
        width: 66%;
      }
    }
  }
}
.songList {
  margin: 0;
  padding: 0;
  list-style-type: none;
  @media screen and (min-width: 992px) {
    column-count: 2;
    column-gap: 60px;
  }
  & > li {
    margin: 0 0 5px 0;
    & > strong {
      color: $accentColor;
      font-size: 1em;
      font-weight: normal;
    }
    & > small {
      font-size: 1em;
    }
  }
}
</style>
