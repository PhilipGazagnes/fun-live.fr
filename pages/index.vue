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
      <nuxt-link to="/repertoire">Répertoire</nuxt-link>
      <nuxt-link to="/agenda">Agenda</nuxt-link>
    </div>

    <!-- <div class="intro">
      <div class="wrapper">
        Grâce à vous, chaque concert est unique !<br />Une seule certitude avant
        de commencer : on va passer un bon moment d'aventure musicale ensemble
        :D Les morceaux qu'on va jouer ? C'est vous qui le décidez !
      </div>
    </div>
    <div>Alors, prêts à tenter l'expérience ?</div>
    <div class="mission">
      Votre mission, si vous l'acceptez :
      <div class="wrapper">
        <div>
          Prendre connaissance de la liste des chansons que nous jouons
          <nuxt-link to="repertoire">Notre répertoire</nuxt-link>
        </div>
        <div>
          2 Choisir la ou les chansons que vous souhaitez chanter seul(e) ou à
          plusieurs !
        </div>
        <div>
          3 Nous vous appelons pour venir intégrer le groupe : c'est vous la
          star, et nous, vos musiciens !
        </div>
      </div>
    </div>
    <div class="agenda">Concerts à venir :</div>
    <div class="photos">
      <nuxt-link to="/photos-videos/">Voir plus de photos et vidéos</nuxt-link>
    </div> -->
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
  h1 {
    font-family: 'Geomanist';
    text-transform: uppercase;
    color: white;
    font-size: 1.5em;
    line-height: 1.5em;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 1000px;
    max-width: 80%;
    z-index: 1;
    margin: 0;
    padding: 0;
    & > span {
      text-shadow: 2px 2px 0 var(--secondaryColor);
    }
    @media screen and (--desktop) {
      font-size: 3em;
    }
  }
  video {
    width: 100%;
    opacity: 0.5;
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
  & > a {
    display: block;
    background: rgb(190, 31, 151);
    background: linear-gradient(
      15deg,
      rgba(108, 20, 208, 1) 0%,
      rgba(190, 31, 151, 1) 70%
    );
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    margin: 0 0 15px 0;
    text-decoration: none;
    border-radius: 4px;
  }
}
</style>
