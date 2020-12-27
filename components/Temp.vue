<template>
  <div class="temp">
    <div class="logo"><Logo /></div>
    <h1>Votre groupe de <span>Karaoké Live</span></h1>
    <div class="video">
      <div @click="$refs.vidlink.click()">
        <video autoplay muted loop>
          <source src="/tempvid.mp4" type="video/mp4">
        </video>
        <Play />
      </div>
      <a ref="vidlink" href="https://www.youtube.com/channel/UC_9U6ck3jG3C0Ft-KZ_wI6A" target="_blank" class="button">Découvrir en vidéo</a>
    </div>
    <p>Un karaoké avec 3 musiciens, l'énergie d'un vrai concert, la sensation de la scène : c'est <strong>comme un karaoké normal, mais en mieux !</strong></p>
    <p>Le Karaoké Live s’impose progressivement comme une <strong>animation incontournable pour les soirées festives</strong>, mariages, anniversaires, séminaires et autres événements joyeux.</p>
    <p>Fun Live vous propose une expérience <strong>clé en main</strong> ou vous n’aurez à vous soucier que de passer un bon moment avec vos invités.</p>
    <p>En fonction de vos besoins, le concert d’une durée de 2 à 3h peut être précédé d’une ambiance musicale pour l’apéritif et le dîner, et suivi d’un DJ set pour danser jusqu’au bout de la nuit !</p>
    <p>Comme pour un karaoké ordinaire, les invités ont accès à la liste des chansons disponibles. Les volontaires s’inscrivent et nous les appelons à tour de rôle pour interpréter le tube de leur choix.</p>
    <p>Les paroles sont visibles sur scène à côté du micro de chant. Pas de stress, nous aidons les candidats les moins à l’aise pour que chaque chanson soit une réussite !</p>
    <h2>Un Vaste répertoire international et multi générationnel</h2>
    <img src="/artists.jpg" @click="$refs.songlink.click()" />
    <a href="/paroles" ref="songlink" class="button">Voir le répertoire complet</a>
    <h2>Témoignages</h2>
    <div class="temoignage">
      <p><Star />Avec le groupe Fun Live, soirée assurée dans la qualité des choix des chansons et dans l'ambiance toujours aussi joyeuse. Groupe à ne pas rater et à conseiller pour un bon Karaoké.</p>
      <p>Le Zanzi-Bar, Sète</p>
    </div>
    <div class="temoignage">
      <p><Star />Novateur, excellente prestation et un grand talent d'animation ! Un concept très sympa qui change du karaoké traditionnel. Vraiment ravie de ma colaboration avec Fun Live et enchantée de la participation et des retours positifs des clients qui ont grandement apprécié l'événement.</p>
      <p>Association Esprit Partage, Sète</p>
    </div>
    <div class="temoignage">
      <p><Star />(Commentaire en cours) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit eleifend scelerisque. Pellentesque dui tortor, lobortis id fermentum eu, tincidunt quis urna. Integer ullamcorper diam nunc, quis tempus metus sodales id. Etiam eget urna risus. Lorem ipsum</p>
      <p>Camping de l'Europe, Vic-la-Gardiole</p>
    </div>
    <h2>Contact</h2>
    <p>Contactez-nous pour plus d’informations sur nos prestations et planifier une date, nous vous répondrons dans les plus brefs délais :</p>
    <a class="mailto" href="mailto:contactfunlive@gmail.com"><strong>contactfunlive@gmail.com</strong></a>
  </div>
</template>

<script>
import Logo from '../assets/svg/logo.svg?inline';
import Star from '../assets/svg/star.svg?inline';
import Play from '../assets/svg/play.svg?inline';
import Songs from '../components/Songs';

export default {
  components: {
    Songs,
    Play,
    Logo,
    Star,
  },
}
</script>

<style lang="postcss" scoped>
.temp {
  max-width: 600px;
  padding: 40px 20px 100px;
  @media screen and (min-width: 640px) {
    margin: 0 auto;  
    padding: 40px 0 100px;
  }
  & > .logo {
    padding: 0 0 40px;
    @media screen and (min-width: 480px) {
      padding: 0 40px 40px;
    }
  }
  & > h1,
  & > h2 {
    font-family: 'Geomanist';
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
  & > h1 {
    text-align: center;
    font-size: 2em;
    line-height: 1.2em;
    margin-bottom: 40px;
    & > span {
      display: block;
      font-size: 1.2em;
    }
    @media screen and (min-width: 640px) {
      font-size: 2.4em;
    }
  }
  & > h2 {
    font-size: 2em;
    margin-top: 40px;
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
        fill: rgba(255, 255, 255, .3);
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
      background: linear-gradient(83.58deg, #570C41 -6.19%, #BD0086 115.07%);  
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
          fill: #FFE600;
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
    -webkit-background: linear-gradient(83.58deg, #570C41 -6.19%, #BD0086 115.07%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.2em;
  }
  .button {
    background: linear-gradient(83.58deg, #570C41 -6.19%, #BD0086 115.07%);
    width: 100%;
    padding: 15px 0;
    color: white;
    border-radius: 4px;
    display: block;
    text-decoration: none;
    text-align:center;
  }
}

</style>