<template>
  <div class="container">
    <div class="wrapper">
      <nuxt-link to="/">
        <img src="/logo-fun-live.png" />
      </nuxt-link>
      <div>
        <nuxt-link to="/agenda/">Agenda</nuxt-link>
        <nuxt-link to="/repertoire/">Répertoire</nuxt-link>
        <!--<nuxt-link to="/prestations/">Embauchez-nous !</nuxt-link>-->
        <button @click="showMenu = true">
          <small>Menu</small>
          <strong>Plus</strong>
          <span />
        </button>
      </div>
      <nav :data-visible="showMenu">
        <button @click="showMenu = false">Fermer</button>
        <nuxt-link to="/agenda/" data-first>Agenda</nuxt-link>
        <nuxt-link to="/repertoire/" data-first>Répertoire</nuxt-link>
        <!--<nuxt-link to="/">Notre concept</nuxt-link>
        <nuxt-link to="/prestations/" data-first>Embauchez-nous !</nuxt-link>
        <nuxt-link to="/groupe/">Le groupe</nuxt-link>
        <nuxt-link to="/photos-videos/">Photos / Vidéos</nuxt-link>-->
        <a target="_blank" href="https://www.facebook.com/funlive34/"
          >Facebook</a
        >
        <a target="_blank" href="https://www.instagram.com/funlivekaraoke/"
          >Instagram</a
        >
        <!--<a href="#">Linkedin</a>-->
        <nuxt-link to="/contact/">Contact</nuxt-link>
      </nav>
      <span v-if="showMenu" @click="showMenu = false" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  watch: {
    $route() {
      this.showMenu = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
.container {
  background: white;
  height: 75px;
  @media screen and (--desktop) {
    height: 120px;
  }
  & > div {
    display: flex;
    height: inherit;
    justify-content: space-between;
    & > a {
      display: block;
      padding: 17px 0 0 0;
      & > img {
        width: 116px;
        @media screen and (--desktop) {
          width: 232px;
        }
      }
    }
    & > div {
      display: flex;
      align-items: center;
      & > a {
        display: none;
        @media screen and (--desktop) {
          display: block;
          margin-left: 30px;
          font-size: 1.5em;
          font-family: 'Geomanist';
          text-transform: uppercase;
          text-decoration: none;
          color: var(--primaryColor);
          &:hover {
            color: var(--secondaryColor);
          }
        }
      }
      & > button {
        cursor: pointer;
        margin-left: 30px;
        font-size: 1.5em;
        font-family: 'Geomanist';
        text-transform: uppercase;
        background: none;
        border: none;
        padding: 0 20px 0 0;
        position: relative;
        & > small,
        & > strong {
          font-size: 1em;
          font-weight: normal;
        }
        & > small {
          @media screen and (--desktop) {
            display: none;
          }
        }
        & > strong {
          display: none;
          @media screen and (--desktop) {
            display: inline;
          }
        }
        & > span {
          width: 10px;
          height: 2px;
          background: var(--primaryColor);
          position: absolute;
          right: 0;
          top: calc(50% - 2px);
          &::after,
          &::before {
            content: '';
            width: 10px;
            height: 2px;
            background: var(--primaryColor);
            position: absolute;
            left: 0;
          }
          &::after {
            top: -5px;
          }
          &::before {
            top: 5px;
          }
        }
      }
    }
    & > nav {
      position: fixed;
      width: 300px;
      height: 100%;
      background: white;
      top: 0;
      right: 0;
      transform: translateX(300px);
      transition: transform 0.2s;
      z-index: 11;
      padding: 70px 0 0 0;
      @media screen and (--desktop) {
        padding: 105px 0 0 0;
      }
      &[data-visible] {
        transform: translateX(0);
      }
      & > button {
        position: absolute;
        top: 25px;
        opacity: 0.5;
        right: 10px;
        cursor: pointer;
        font-size: 1.5em;
        font-family: 'Geomanist';
        text-transform: uppercase;
        background: none;
        border: none;
        padding: 0 20px 0 0;
        @media screen and (--desktop) {
          top: 40px;
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
      & > a {
        display: block;
        margin-left: 30px;
        font-size: 1.5em;
        font-family: 'Geomanist';
        text-transform: uppercase;
        text-decoration: none;
        color: var(--primaryColor);
        margin-bottom: 10px;
        &:hover {
          color: var(--secondaryColor);
        }
        @media screen and (--desktop) {
          &[data-first] {
            display: none;
          }
        }
      }
    }
    & > span {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 10;
    }
  }
}
</style>
