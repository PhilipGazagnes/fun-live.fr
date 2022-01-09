<template>
  <div class="wrapper">
    <h1>Fun Live : le concept</h1>
    <div class="sideImage">
      <span>
        <img src="/misc/concept1.jpg" />
        <img src="/misc/concept4.jpg" />
        <img src="/misc/concept5.jpg" />
      </span>
      <div>
        <p>
          <strong>Fun Live</strong> est votre groupe pour passer un excellent
          moment. Fini les karaokés sur bande son. Notre concept : faire chanter
          les participants dans les conditions d’un vrai concert !
        </p>
        <p>
          Trois musiciens professionnels et expérimentés vous accompagneront sur
          scène. Ils vous feront découvrir l’énergie et la sensation d’un vrai
          concert !
        </p>
        <p>
          <strong>C’est comme un karaoké mais en mieux !</strong><br />
          <nuxt-link class="textlink" to="/videos"
            >La preuve en vidéo</nuxt-link
          >
        </p>
        <h2>Prêts à tenter l'expérience ?</h2>
        <p>
          Grâce à vous, chaque concert est unique ! Une seule certitude avant de
          commencer : on va passer un bon moment d'aventure musicale ensemble !
          Les morceaux qu'on va jouer ? C'est vous qui le décidez !
        </p>
        <p>Votre mission, si vous l'acceptez :</p>
        <ol>
          <li>
            Prendre connaissance de
            <nuxt-link class="textlink" to="repertoire"
              >la liste des chansons que nous jouons</nuxt-link
            >
          </li>
          <li>
            Choisir la ou les chansons que vous souhaitez chanter seul(e) ou à
            plusieurs !
          </li>
          <li>
            Nous vous appelons pour venir intégrer
            <nuxt-link class="textlink" to="/le-groupe">le groupe</nuxt-link> :
            c'est vous la star, et nous, vos musiciens ! Vous avez les paroles à
            disposition, et nous sommes là pour vous aider !
          </li>
        </ol>
        <p>
          RDV à une de nos
          <nuxt-link class="textlink" to="/agenda">prochaines dates</nuxt-link>,
          ou
          <nuxt-link class="textlink" to="/embauchez-nous"
            >embauchez-nous</nuxt-link
          >
          pour votre soirée privée !
        </p>
      </div>
    </div>
    <div class="inlineImages"></div>
  </div>
</template>

<style lang="postcss" nested>
.process {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
}
.inlineImages {
  display: flex;
  img {
    flex: 1 1 auto;
  }
}
</style>
