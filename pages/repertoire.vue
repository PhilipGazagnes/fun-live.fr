<template>
  <div class="wrapper">
    <h1>Notre répertoire</h1>
    <div v-if="songChoice" class="songchoice">
      <button @click="songChoice = null"></button>
      <div class="choices">
        <img :data-src="`/artists/${songChoice.id}.jpg`" src="/blank.gif" />
        <h3>{{ songChoice.name }}</h3>
        <h4>{{ songChoice.artist }}</h4>
        <nuxt-link :to="`/note/${songChoice.id}`">Paroles</nuxt-link>
      </div>
      <div class="back">
        <button @click="songChoice = null">Retour à la liste</button>
      </div>
    </div>
    <div class="listpage">
      <ul v-if="showList" class="list">
        <li
          v-for="(s, index) in filteredSongs"
          :key="index"
          :data-first-letter="s.name.charAt(0)"
        >
          <a
            :href="`https://stately-meringue-48b151.netlify.app/note/${
              s.id
            }?directory=${
              $store.state.subdomain === 'star' ? 'airjprod' : 'funlive'
            }`"
            rel="nofollow"
          >
            <span>{{ s.name }}</span>
            <span>{{ s.artist }}</span>
            <img
              class="lazy"
              :data-src="`https://aeovnsnhjq.cloudimg.io/v7/_funlive_/artists/${s.id}.jpg?width=80&height=80`"
              src="/blank.gif"
            />
          </a>
        </li>
      </ul>
      <div class="filters">
        <!-- <input ref="textInput" type="text" /> -->
        <div class="filterpanel" :data-active="filtersActive">
          <button @click="closeFilters"></button>
          <div class="sections">
            <div>
              <h3>Langue</h3>
              <div>
                <input id="lang-fr" type="checkbox" @change="handleFrChange" />
                <label for="lang-fr">Français</label>
              </div>
              <div>
                <input id="lang-en" type="checkbox" @change="handleEnChange" />
                <label for="lang-en">Anglais</label>
              </div>
              <div>
                <input
                  id="lang-other"
                  type="checkbox"
                  @change="handleOtherChange"
                />
                <label for="lang-other">Autres</label>
              </div>
            </div>
          </div>
          <div class="back">
            <button @click="closeFilters">Retour à la liste</button>
          </div>
        </div>
        <button @click="openFilters">Filtrer</button>
      </div>

      <!-- <div class="letters">
        <button
          v-for="(l, index) in $options.alphabet"
          :key="index"
          @click="scrollToLetter(l)"
        >
          {{ l }}
        </button>
        <button class="switchscope" @click="switchscope">
          {{ scope.name }} ({{ scope.arr.length }})
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import songsJson from '../data/json/index.json';

export default {
  alphabet: 'abcdefghijklmnopqrstuvwxyz',
  data() {
    return {
      songs: songsJson.sort(this.compare).filter((s) => !s.inactive),
      filtersActive: false,
      filterLangFr: false,
      filterLangEn: false,
      filterLangOther: false,
      songChoice: null,
      showList: true,
    };
  },
  computed: {
    filteredSongs() {
      return this.songs
        .filter((song) => {
          if (this.$store.state.subdomain === 'acoustic') {
            console.log(song.scope, song.name);
            return song.scope.includes('phil');
          }
          return song.scope.includes('band');
        })
        .filter((song) => {
          if (
            !this.filterLangFr &&
            !this.filterLangEn &&
            !this.filterLangOther
          ) {
            return true;
          }
          if (
            (!this.filterLangFr && song.lang === 'FR') ||
            (!this.filterLangEn && song.lang === 'EN') ||
            (!this.filterLangOther && song.lang !== 'EN' && song.lang !== 'FR')
          ) {
            return false;
          }
          return true;
        });
    },
  },
  mounted() {
    window.LazyLoadInstance.update();
  },
  methods: {
    handleFrChange(e) {
      this.showList = false;
      this.filterLangFr = e.target.checked;
      this.$nextTick(() => {
        this.showList = true;
        this.$nextTick(() => {
          window.LazyLoadInstance.update();
        });
      });
    },
    handleEnChange(e) {
      this.showList = false;
      this.filterLangEn = e.target.checked;
      this.$nextTick(() => {
        this.showList = true;
        this.$nextTick(() => {
          window.LazyLoadInstance.update();
        });
      });
    },
    handleOtherChange(e) {
      this.showList = false;
      this.filterLangOther = e.target.checked;
      this.$nextTick(() => {
        this.showList = true;
        this.$nextTick(() => {
          window.LazyLoadInstance.update();
        });
      });
    },
    openFilters() {
      this.filtersActive = true;
    },
    closeFilters() {
      this.filtersActive = false;
    },
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
    scrollToLetter(letter) {
      const matches = document.querySelectorAll(
        `[data-first-letter=${letter.toUpperCase()}]`,
      );
      if (matches.length > 0) {
        const offsetTopFirstMatch = matches[0].offsetTop;
        window.scrollTo(0, offsetTopFirstMatch);
      }
    },
  },
  head: {
    title: 'Répertoire | Fun Live',
  },
};
</script>

<style lang="postcss" scoped>
body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  font-weight: 400;
}
.random {
  padding: 10px 20px;
  margin: 0 0 40px 20px;
  font-size: 1em;
}
.songchoice {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: var(--primaryColor);
  & > button {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    @media screen and (--tablet) {
      display: none;
    }
    &::after,
    &::before {
      width: 15px;
      height: 2px;
      content: '';
      position: absolute;
      top: calc(50% - 2px);
      left: 50%;
      background: white;
    }
    &::after {
      transform: translateX(-50%) rotate(45deg);
    }
    &::before {
      transform: translateX(-50%) rotate(-45deg);
    }
  }
  & > .choices {
    flex: 1 1 100%;
    text-align: center;
    & > img {
      width: 80%;
    }
    & > button,
    & > a {
      width: calc(100% - 10px);
      text-align: center;
      padding: 15px 0;
      text-decoration: none;
      display: block;
      margin: 0 0 5px 5px;
      background: var(--secondaryColor);
      color: white;
      border-radius: 4px;
    }
  }
  & > .back {
    flex: 0 0 60px;
    @media screen and (--tablet) {
      display: none;
    }
    & > button {
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      margin: 5px 0 0 5px;
      border: var(--secondaryColor) 1px solid;
      background: none;
      color: var(--secondaryColor);
      border-radius: 4px;
    }
  }
}
.listpage {
  position: relative;
  padding: 0 0 100px 0;
  @media screen and (--tablet) {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
  }
}
ul.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  @media screen and (--tablet) {
    flex: 1 1 75%;
  }
  li {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    margin: 0 0 10px 0;
    & > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 10px 0 95px;
      text-decoration: none;
      color: white;
      position: relative;
      height: 80px;
      & > img {
        position: absolute;
        width: auto;
        height: 100%;
        top: 0;
        left: 0;
      }
      & > span {
        &:nth-child(1) {
          display: block;
          font-weight: bold;
          font-size: 1.1em;
          line-height: 1.1em;
          padding: 5px 0 5px;
        }
        &:nth-child(2) {
          opacity: 0.7;
        }
        &.nota {
          color: red;
        }
      }
    }
  }
}
.filters {
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background: white;
    z-index: 1;
    color: var(--primaryColor);
  }
  @media screen and (--tablet) {
    flex: 1 1 25%;
  }
  & > button {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    margin: 5px 0 0 5px;
    background: rgb(190, 31, 151);
    background: linear-gradient(
      15deg,
      rgba(108, 20, 208, 1) 0%,
      rgba(190, 31, 151, 1) 70%
    );
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1.2em;
    font-weight: bold;
    @media screen and (--tablet) {
      display: none;
    }
  }
  & > .filterpanel {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transform: translateY(100%);
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    @media screen and (--tablet) {
      position: static;
      bottom: auto;
      left: auto;
      width: auto;
      height: auto;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      transform: none;
      transition: none;
    }
    &[data-active] {
      transform: translateY(0);
    }
    & > button {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      background: none;
      border: none;
      @media screen and (--tablet) {
        display: none;
      }
      &::after,
      &::before {
        width: 15px;
        height: 2px;
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        right: 0;
        background: var(--primaryColor);
      }
      &::after {
        transform: rotate(45deg);
      }
      &::before {
        transform: rotate(-45deg);
      }
    }
    & > .sections {
      flex: 1 1 100%;
      & > div {
        padding: 10px;
        & > h3 {
          margin: 0 0 10px 0;
          padding: 0;
          color: var(--secondaryColor);
        }
        & > div {
          &:not(:last-child) {
            margin-bottom: 5px;
          }
          & > input[type='checkbox'] {
            width: 20px;
            height: 20px;
            position: relative;
            left: -3px;
          }
          & > label {
            position: relative;
            top: -3px;
          }
        }
      }
    }
    & > .back {
      flex: 0 0 60px;
      @media screen and (--tablet) {
        display: none;
      }
      & > button {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        margin: 5px 0 0 5px;
        background: rgb(190, 31, 151);
        background: linear-gradient(
          15deg,
          rgba(108, 20, 208, 1) 0%,
          rgba(190, 31, 151, 1) 70%
        );
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1.2em;
        font-weight: bold;
      }
    }
  }
}
.letters {
  position: fixed;
  height: 100%;
  width: 25%;
  top: 0;
  right: 0;
  background: #222;
  overflow: auto;
  & > button {
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5em;
    line-height: 1em;
    width: 50%;
    padding: 22px 0;
    &.switchscope {
      width: 100%;
      border: purple 2px solid;
      font-size: 1em;
    }
  }
  @media screen and (min-width: 768px) {
    width: 20%;
    button {
      width: 33.33%;
      padding: 16px 0;
    }
  }
}
</style>
