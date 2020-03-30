<template>
  <section class="concertBg section">
    <h2 class="title">
      <span>3 musiciens et 1 animateur</span>
      <span>pour un concert mémorable</span>
    </h2>
    <div class="pics">
      <div class="pics__bassist">
        <img src="/band/bassist.png" />
      </div>
      <div class="pics__speaker">
        <img src="/band/speaker.png" />
        <SpeakerBg />
      </div>
      <div class="pics__drummer">
        <img src="/band/drummer.png" />
      </div>
      <div class="pics__guitarist">
        <img src="/band/guitarist.png" />
      </div>
    </div>
    <p class="containerNarrow">
      Fun Live est votre groupe pour passer un excellent moment. Fini les
      karaokés sur bande son. Notre concept : faire chanter les participants
      dans les conditions d’un vrai concert !
    </p>
    <p class="containerNarrow">
      Trois musiciens expérimentés accompagnent les candidats, qui choisissent
      leur chanson dans le large répertoire que nous proposons, pour devenir
      Mick Jagger, Elvis Presley, Johnny Halliday, Patricia Kaas, Alain Souchon,
      et bien d’autres !
    </p>
  </section>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import SpeakerBg from '../assets/svg/speaker-star-bg.svg?inline';

export default {
  components: {
    SpeakerBg,
  },
};
</script>

<style lang="scss" scoped>
.title {
  span {
    display: block;
  }
}
.section {
  overflow: hidden;
  padding: 0 0 80px 0;
  @media screen and ($mfDesktop) {
    padding: 0 0 110px 0;
  }
  p {
    &:last-child {
      margin-top: 20px;
    }
  }
}
.pics {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 0 40px;
  @media screen and ($mfPhone) {
    padding: 0 0 60px;
  }
  @media screen and ($mfDesktop) {
    padding: 0 0 80px;
    max-width: 1800px;
  }
  @media screen and ($mfLargeDesktop) {
    padding: 0 0 100px;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  & > div {
    position: relative;
    float: left;
    width: 50%;
    padding: 0 0 33% 0;
    &:nth-child(1),
    &:nth-child(2) {
      margin-bottom: 10%;
    }
    @media screen and ($mfDesktop) {
      width: 25%;
      padding: 0 0 16.5% 0;
      &:nth-child(1),
      &:nth-child(2) {
        margin-bottom: 0;
      }
    }
    &:not(.pics__speaker)::before {
      content: '';
      position: absolute;
      z-index: 0;
      width: 66%;
      padding: 0 0 66% 0;
      top: 0%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.2);
    }
    & > img {
      position: absolute;
      z-index: 1;
      left: 50%;
    }
  }
  &__bassist {
    & > img {
      width: 88%;
      top: -5%;
      transform: translateX(-41%);
    }
  }
  &__speaker {
    & > img {
      top: -0.5%;
      width: 66%;
      transform: translateX(-58%);
    }
    & > svg {
      fill: rgba(255, 255, 255, 0.2);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  &__drummer {
    & > img {
      top: 1.7%;
      width: 80.5%;
      transform: translateX(-42.8%);
    }
  }
  &__guitarist {
    & > img {
      top: -5.8%;
      width: 91%;
      transform: translateX(-35%);
    }
  }
}
</style>
