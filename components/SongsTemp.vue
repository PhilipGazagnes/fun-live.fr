<template>
  <ul class="templist">
    <li v-for="s in songs">
      <strong>{{ s.name }}</strong> {{ s.artist }}
    </li>
  </ul>
</template>

<script>
import songsJson from '../data/index.json';

export default {
  computed: {
    songs() {
      return songsJson.sort(this.compare);
    },
  },
  methods: {
    compare(a, b) {
      let strA = a.name
      let strB = b.name;
      // Use toUpperCase() to ignore character casing
      strA = this.regularFirstLetter(strA.toUpperCase());
      strB = this.regularFirstLetter(strB.toUpperCase());

      let comparison = 0;
      if (strA > strB) {
        comparison = 1;
      } else if (strA < strB) {
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
}
</script>

<style lang="postcss">
.templist {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  & > li {
    padding: 0;
    margin: 0;
  }
}
</style>