<template>
  <div class="wrapper home">
    <div class="banner">
      <h1>
        <span>Chantez des tubes sur scène</span> <span>avec 3 musiciens !</span>
      </h1>
      <video autoplay muted loop>
        <source src="/tempvid.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="main">
      <nuxt-link to="/repertoire"
        ><span
          ><span>Répertoire</span> Toutes les chansons que vous pouvez chanter
          avec nous !
        </span></nuxt-link
      >
      <nuxt-link to="/agenda"
        ><span
          ><span>Agenda</span> Tous nos concerts karaoké à venir, venez nombreux
          !
        </span></nuxt-link
      >
      <nuxt-link to="/concept"
        ><span
          ><span>Le concept</span> Karaoké Live ? Comment ça ? Par ici pour tout
          savoir !
        </span></nuxt-link
      >
      <nuxt-link to="/le-groupe"
        ><span
          ><span>Le groupe</span> Trois musiciens au top pour des soirées de
          folie !
        </span></nuxt-link
      >
      <nuxt-link to="/videos"
        ><span
          ><span>Vidéos</span> Quelques vidéos valent mieux qu'un long discours
          !
        </span></nuxt-link
      >
      <nuxt-link to="/prestation"
        ><span
          ><span>Prestation</span> Marquez les esprits avec votre soirée concert
          karaoké !</span
        ></nuxt-link
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
      @media screen and (--desktop) {
        display: block;
      }
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
    text-align: center;
    padding: 20px;
    text-decoration: none;
    border-radius: 4px;
    width: calc(100% - 60px);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    position: relative;
    @media screen and (--tablet) {
      width: calc(50% - 60px);
      height: 90px;
    }
    @media screen and (--largeDesktop) {
      width: calc(33.33% - 60px);
    }
    /*&::after {
      content: '';
      background: var(--primaryColor);
      display: block;
      position: absolute;
      top: 2px;
      left: 1px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      z-index: 0;
    }*/
    & > span {
      position: relative;
      z-index: 1;
      & > span {
        position: relative;
        z-index: 2;
        font-size: 1.6em;
        font-family: 'geomanist';
        text-transform: uppercase;
        margin-bottom: 5px;
        display: block;
        background: rgb(250, 11, 191);
        background: linear-gradient(
          180deg,
          rgba(250, 11, 191, 1) 0%,
          rgba(208, 0, 255, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        &::after {
          content: '';
          display: inline-block;
          height: 0;
          width: 0;
          border-top: 7px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 14px solid #e405e1;
          margin-left: 12px;
          position: relative;
          top: -1px;
        }
      }
    }
  }
}
</style>
