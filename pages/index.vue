<template>
  <div class="wrapper home">
    <div class="banner">
      <h1>
        Chanter des tubes sur scène avec 3 musiciens, <span>mais oui !</span>
      </h1>
      <video autoplay muted loop>
        <source src="/tempvid.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="main">
      <nuxt-link to="/repertoire"
        ><span>Répertoire</span> Toutes les chansons que vous pouvez chanter
        avec nous !
      </nuxt-link>
      <nuxt-link to="/agenda"
        ><span>Agenda</span> Tous nos concerts karaoké à venir, venez nombreux !
      </nuxt-link>
      <nuxt-link to="/concept"
        ><span>Le concept</span> Karaoké Live ? Kezako ? Par ici pour tout
        savoir !
      </nuxt-link>
      <nuxt-link to="/le-groupe"
        ><span>Le groupe</span> Trois musiciens au top pour des soirées de folie
        !
      </nuxt-link>
      <nuxt-link to="/videos"
        ><span>Vidéos</span> Quelques vidéos valent mieux qu'un long discours !
      </nuxt-link>
      <nuxt-link to="/embauchez-nous"
        ><span>Embauchez-nous !</span> Marquez les esprits avec votre soirée
        concert karaoké !</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  head: {
    title: 'FUN LIVE',
    description: '',
  },
};
</script>

<style lang="postcss" scoped>
.home {
  position: relative;
}
.banner {
  position: relative;
  margin-top: 15px;
  @media screen and (--tablet) {
    margin-top: 30px;
  }
  h1 {
    font-family: 'Geomanist';
    text-transform: uppercase;
    color: white;
    font-size: 1.5em;
    line-height: 1.5em;
    text-align: center;

    z-index: 1;
    margin: 0 0 10px 0;
    padding: 0;
    & > span {
      text-shadow: 2px 2px 0 var(--secondaryColor);
    }
    @media screen and (--tablet) {
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 1000px;
      max-width: 80%;
    }
    @media screen and (--desktop) {
      font-size: 3em;
    }
  }
  video {
    width: 100%;
    opacity: 1;
    position: relative;
    z-index: 0;
  }
}
.intro {
  text-align: center;
  font-size: 2em;
  padding: 50px 0;
}
.mission {
  & > div {
    display: flex;
    gap: 30px;
    & > div {
      flex: 1 1 calc(33.33% - 60px);
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
.main {
  padding-top: 15px;
  margin: 0 -10px;
  &::after {
    clear: both;
    content: '';
    display: block;
  }
  & > a {
    display: block;
    margin: 0 10px 20px;
    float: left;
    background: rgb(190, 31, 151);
    background: linear-gradient(
      15deg,
      rgba(108, 20, 208, 1) 0%,
      rgba(190, 31, 151, 1) 70%
    );
    color: white;
    text-align: center;
    padding: 20px;
    text-decoration: none;
    border-radius: 4px;
    width: calc(100% - 60px);
    @media screen and (--phone) {
      width: calc(50% - 60px);
    }
    @media screen and (--tablet) {
      width: calc(33.33% - 60px);
    }
    & > span {
      font-size: 1.6em;
      margin-bottom: 5px;
      display: block;
    }
  }
}
</style>
