<template>
  <div class="temp">
    <div class="logo"><Logo /></div>
    <h1>Votre groupe de <span>Karaoké Live</span></h1>
    <div class="content">
      <div class="video">
        <div @click="$refs.vidlink.click()">
          <video autoplay muted loop>
            <source src="/tempvid.mp4" type="video/mp4" />
          </video>
          <Play />
        </div>
        <a
          ref="vidlink"
          href="https://www.youtube.com/channel/UC_9U6ck3jG3C0Ft-KZ_wI6A"
          target="_blank"
          class="button"
          >Découvrir en vidéo</a
        >
      </div>
      <p>
        <strong>Fun Live</strong> est votre groupe pour passer un excellent
        moment. Fini les karaokés sur bande son. Notre concept :
        <strong
          >faire chanter les participants dans les conditions d’un vrai concert
          !</strong
        >
      </p>
      <p>
        Trois musiciens professionnels et expérimentés vous accompagneront sur
        scène. Ils vous feront découvrir l’énergie et la sensation d’un vrai
        concert !
      </p>
      <p><strong>C’est comme un karaoké mais en mieux !</strong></p>
      <p>
        Qu’il s’agisse d’une soirée festive, d'un mariage, d'un anniversaire,
        d'un séminaires ou autre type d'événement, nous vous proposons une
        expérience clé en main où vous n’aurez à vous soucier que de passer un
        très bon moment avec vos invités.
      </p>
      <h2 id="repertoire">
        Un Vaste répertoire international et multi générationnel
      </h2>
      <img src="/artists.jpg" />
      <SongsTemp />
      <h2>Témoignages</h2>
      <div class="temoignage">
        <p>
          <Star />Groupe professionnel qui propose des soirées live avec
          ambiance garantie. Nous avons osé chanter avec une amie et nous nous
          sommes régalées. Les musiciens nous mettent très à l'aise. Je les ai
          déjà recommandé et ils ont toujours assuré dans toutes situations. À
          suivre ;)
        </p>
        <p><strong>Camping de l'Europe</strong>, Vic-la-Gardiole</p>
      </div>
      <div class="temoignage">
        <p>
          <Star />Avec le groupe Fun Live, soirée assurée dans la qualité des
          choix des chansons et dans l'ambiance toujours aussi joyeuse. Groupe à
          ne pas rater et à conseiller pour un bon Karaoké.
        </p>
        <p><strong>Le Zanzi-Bar</strong>, Sète</p>
      </div>
      <div class="temoignage">
        <p>
          <Star />Novateur, excellente prestation et un grand talent d'animation
          ! Un concept très sympa qui change du karaoké traditionnel. Vraiment
          ravie de ma colaboration avec Fun Live et enchantée de la
          participation et des retours positifs des clients qui ont grandement
          apprécié l'événement.
        </p>
        <p><strong>Association Esprit Partage</strong>, Sète</p>
      </div>
      <h2>Contact</h2>
      <p>
        Contactez-nous pour plus d’informations sur nos prestations et planifier
        une date, nous vous répondrons dans les plus brefs délais :
      </p>
      <a class="mailto" href="mailto:contactfunlive@gmail.com"
        ><strong>contactfunlive@gmail.com</strong></a
      >
    </div>
  </div>
</template>

<script>
import Logo from '../assets/svg/logo-bold.svg?inline';
import Star from '../assets/svg/star.svg?inline';
import Play from '../assets/svg/play.svg?inline';
import SongsTemp from '../components/SongsTemp';

export default {
  components: {
    SongsTemp,
    Play,
    Logo,
    Star,
  },
  data() {
    return {
      showsongs: false,
    };
  },
};
</script>

<style lang="postcss" scoped>
.temp {
  max-width: 600px;
  padding: 40px 0 0;
  @media screen and (min-width: 640px) {
    margin: 0 auto;
    padding: 40px 0 100px;
  }
  & > .logo {
    padding: 20px 0 30px;
    text-align: center;
    & > svg {
      fill: white;
      width: 280px;
      height: 101px;
      @media screen and (min-width: 420px) {
        width: 380px;
        height: 137px;
      }
    }
  }
  & > h1 {
    font-family: 'Geomanist';
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 2em;
    line-height: 1.2em;
    margin-bottom: 60px;
    color: white;
    & > span {
      display: block;
      font-size: 1.2em;
    }
    @media screen and (min-width: 640px) {
      font-size: 2.4em;
    }
  }
  & > .content {
    background: white;
    padding: 20px 20px 50px 20px;
    @media screen and (min-width: 640px) {
      border-radius: 5px;
    }
    & > h2 {
      font-size: 2em;
      margin-top: 40px;
      font-family: 'Geomanist';
      text-transform: uppercase;
      margin: 0;
      padding: 30px 0 0 0;
      &:nth-of-type(2),
      &:nth-of-type(3) {
        padding: 50px 0 0 0;
      }
    }
    & > .video {
      margin-bottom: 40px;
      & > div {
        padding: 0 0 50% 0;
        position: relative;
        margin: 0 0 10px 0;
        & > video {
          position: absolute;
          width: 100%;
          height: 100%;
          background: black;
          margin-bottom: 10px;
          border-radius: 4px;
          cursor: pointer;
        }
        & > svg {
          width: 100px;
          height: 100px;
          fill: rgba(255, 255, 255, 0.3);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          pointer-events: none;
        }
      }
    }
    & > img {
      max-width: 100%;
      margin: 30px 0 10px;
    }
    & > .temoignage {
      padding: 0 0 0 20px;
      position: relative;
      margin: 30px 0 0 0;
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 2px;
        height: calc(100% - 10px);
        top: 7px;
        left: 0;
        background: linear-gradient(83.58deg, #570c41 -6.19%, #bd0086 115.07%);
      }
      & > p {
        padding: 0;
        margin: 0;
        &:first-child {
          font-style: italic;
          font-size: 1.2em;
          margin-bottom: 15px;
          & > svg {
            width: 20px;
            height: 20px;
            fill: #ffe600;
            transform: translateY(2px);
            margin-right: 2px;
          }
        }
        &:last-child {
          display: inline-block;
          border-top: 1px solid #eee;
          padding: 5px 0 0 0;
        }
      }
    }
    & > .mailto {
      background: -webkit-linear-gradient(
        83.58deg,
        #570c41 -6.19%,
        #bd0086 115.07%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.2em;
    }
    .button {
      background: linear-gradient(83.58deg, #570c41 -6.19%, #bd0086 115.07%);
      width: 100%;
      padding: 15px 0;
      color: white;
      border-radius: 4px;
      display: block;
      text-decoration: none;
      text-align: center;
      border: none;
      font-family: inherit;
      font-size: inherit;
      cursor: pointer;
    }
  }
}
</style>
