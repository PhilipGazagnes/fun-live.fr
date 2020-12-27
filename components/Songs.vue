<template>
  <section id="Songs" :class="['songs', isInView ? 'isinview' : '']">
    <div class="container">
      <!-- <div class="filters">
        <select v-model="frenchOnly" @change="handleLanguageFilterChange">
          <option :value="false" selected>Toutes</option>
          <option :value="true">Les françaises</option>
        </select>
        <select v-model="sortByArtist" @change="handleSortChange">
          <option :value="false" selected>Tri par titre</option>
          <option :value="true">Tri par artiste</option>
        </select>
      </div> -->
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
        <button :disabled="page === 1" @click="handlePrev">
          next
        </button>
        <select v-model="page" @change="handleSelect">
          <option v-for="(p, index) in pages" :key="index" :value="p">
            {{ p }}
          </option>
        </select>
        <button :disabled="page === pages" @click="handleNext">
          suite
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import songsJson from '../data/index.json';

export default {
  data() {
    return {
      sortByArtist: false,
      frenchOnly: false,
      page: 1,
      itemsPerPage: 10,
      totalItems: undefined,
      isInView: false,
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
  mounted() {
    window.InView('#Songs').on('enter', () => {
      this.isInView = true;
    });
    if (window.InView.is(document.querySelector('#Songs'))) {
      this.isInView = true;
    }
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
      if (window.ga) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'navigation',
          eventAction: 'clickOnSong',
        });
      }
    },
    handleLanguageFilterChange() {
      this.page = 1;
      if (window.ga) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'navigation',
          eventAction: 'songFilters',
          eventLabel: 'language',
        });
      }
    },
    handleSortChange() {
      this.page = 1;
      if (window.ga) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'navigation',
          eventAction: 'songFilters',
          eventLabel: 'sort',
        });
      }
    },
    handlePrev() {
      this.page -= 1;
      if (window.ga) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'navigation',
          eventAction: 'songPagination',
          eventLabel: 'prev',
          eventValue: this.page,
        });
      }
    },
    handleSelect() {
      this.page -= 1;
      if (window.ga) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'navigation',
          eventAction: 'songPagination',
          eventLabel: 'select',
          eventValue: this.page,
        });
      }
    },
    handleNext() {
      this.page += 1;
      if (window.ga) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'navigation',
          eventAction: 'songPagination',
          eventLabel: 'next',
          eventValue: this.page,
        });
      }
    },
  },
};
</script>

<style lang="postcss">
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
    @media screen and (min-width: 980px) {
      width: 100%;
    }
  }
}
.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    column-count: 2;
    column-gap: 40px;
  }
  & > li {
    break-inside: avoid;
    cursor: pointer;
    &:hover {
      background: #fafafa;
    }
    & > strong {
      font-weight: bold;
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
  & > button {
    outline: none;
    height: 40px;
    padding: 0 15px;
    display: inline-block;
    border-radius: 3px;
    background: linear-gradient(83.58deg, #570C41 -6.19%, #BD0086 115.07%);
    border: none;
    color: white;
    font: inherit;
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
