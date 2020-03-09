<template>
  <div>
    <ul class="songList">
      <li v-for="(s, index) in songs" :key="index">
        <strong>{{ s.name }}</strong>
        <small>{{ s.artist }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import songsJson from "./../data/index.json";

export default {
  data() {
    return {
      songs: songsJson.sort(this.compare)
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
      if (txt.startsWith("ç") || txt.startsWith("Ç")) {
        txt = `C${txt.substring(1)}`;
      }
      return txt;
    }
  }
};
</script>

<style lang="scss">
$accentColor: #c7af35;

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
