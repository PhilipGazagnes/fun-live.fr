<template>
  <section class="songs">
    <div class="container">
      <div>
        <h2>Notre répertoire</h2>
        <div class="filters">
          <select v-model="frenchOnly" @change="page = 1">
            <option :value="false" selected>Toutes</option>
            <option :value="true">Les françaises</option>
          </select>
          <select v-model="sortByArtist" @change="page = 1">
            <option :value="false" selected>Tri par titre</option>
            <option :value="true">Tri par artiste</option>
          </select>
        </div>
      </div>
      <div>
        <ul class="list">
          <li
            v-for="(s, index) in songs.filter(
              (i) =>
                songs.indexOf(i) >= (page - 1) * itemsPerPage &&
                songs.indexOf(i) < page * itemsPerPage,
            )"
            :key="index"
            @click="openBlankPage(s.v)"
          >
            <strong>{{ s.t }}</strong>
            <small>{{ s.a }}</small>
          </li>
        </ul>
        <div class="pagination">
          <button :disabled="page === 1" @click="page = page -= 1">
            <Arrow />
          </button>
          <select v-model="page">
            <option v-for="(p, index) in pages" :key="index" :value="p">
              {{ p }}
            </option>
          </select>
          <button :disabled="page === pages" @click="page += 1">
            suite <Arrow />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import songsJson from '../data/index.json';
// eslint-disable-next-line import/no-unresolved
import Arrow from '../assets/svg/arrow.svg?inline';

export default {
  components: {
    Arrow,
  },
  data() {
    return {
      sortByArtist: false,
      frenchOnly: false,
      page: 1,
      itemsPerPage: 10,
      totalItems: undefined,
    };
  },
  computed: {
    songs() {
      return songsJson.filter(this.langFilter).sort(this.compare);
    },
    pages() {
      return Math.ceil(this.songs.length / this.itemsPerPage);
    },
  },
  methods: {
    langFilter(s) {
      return this.frenchOnly ? s.l === 'FR' : s;
    },
    compare(a, b) {
      let strA = this.sortByArtist ? a.a : a.t;
      let strB = this.sortByArtist ? b.a : b.t;
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
    openBlankPage(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="scss">
.songs {
  position: relative;
  background-image: url('/slammer/slammer-mobile.jpg');
  background-position: left bottom;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 60px 0 300px;
  @media screen and ($mfPhone) {
    padding: 70px 0 400px;
    background-image: url('/slammer/slammer.jpg');
  }
  @media screen and ($mfTablet) {
    background-position: right bottom;
  }
  h2 {
    @include handwritten;
    color: $primaryColor;
    text-align: center;
    font-size: 2.2em;
    line-height: 1.2em;
    @media screen and ($mfDesktop) {
      font-size: 2.4em;
      text-align: left;
    }
  }
  & > div {
    @media screen and ($mfDesktop) {
      &::after {
        content: '';
        display: block;
        clear: both;
      }
      & > div {
        &:first-child {
          float: left;
          width: 30%;
        }
        &:last-child {
          float: right;
          width: 60%;
        }
      }
    }
  }
}
.filters {
  margin-top: 50px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  select {
    background: none;
    border: 1px solid #ddd;
    padding: 0 10px;
    height: 50px;
    border-radius: 3px;
    font: inherit;
    font-size: 0.8em;
    margin-bottom: 15px;
    width: calc(50% - 10px);
    &:first-child {
      float: left;
    }
    &:last-child {
      float: right;
    }
    @media screen and ($mfDesktop) {
      width: 100%;
    }
  }
}
.list {
  margin-top: 40px;
  @media screen and ($mfTablet) {
    column-count: 2;
    column-gap: 40px;
  }
  @media screen and ($mfDesktop) {
    margin-top: 0;
  }
  & > li {
    break-inside: avoid;
    cursor: pointer;
    &:hover {
      background: #fafafa;
    }
    & > strong {
      font-weight: 400;
      display: block;
      color: $primaryColor;
      line-height: 1.4em;
    }
    & > small {
      margin-top: 5px;
      display: block;
      font-size: 0.8em;
      line-height: 1.4em;
      padding: 0 0 15px 0;
    }
  }
}
.pagination {
  margin-top: 50px;
  & > button {
    outline: none;
    height: 40px;
    padding: 0 15px;
    display: inline-block;
    border-radius: 3px;
    background: $primaryColor;
    border: none;
    color: white;
    font: inherit;
    font-size: 0.8em;
    cursor: pointer;
    &:not(:first-child) {
      margin-left: 10px;
    }
    &:first-child,
    &:last-child {
      & > svg {
        position: relative;
        top: 2px;
        width: 15px;
        height: 15px;
        fill: white;
      }
      &[disabled] {
        opacity: 0.2;
      }
    }
    &:first-child {
      & > svg {
        transform: rotate(180deg);
      }
    }
  }
  & > select {
    display: inline-block;
    height: 40px;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 3px;
    background: none;
    border: 1px solid #ddd;
    font: inherit;
    font-size: 0.8em;
  }
}
</style>
