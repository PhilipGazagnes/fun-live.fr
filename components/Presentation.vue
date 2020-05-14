<template>
  <section class="concertBg section">
    <h1 ref="title" :class="ga ? '' : 'noga'">
      Fun Live <span>Karaoké Live Band</span>
    </h1>
    <div class="pics">
      <div class="pics__bassist">
        <img data-src="/band/bassist.png" class="lazy" />
      </div>
      <div class="pics__speaker">
        <img data-src="/band/speaker.png" class="lazy" />
        <SpeakerBg />
      </div>
      <div class="pics__drummer">
        <img data-src="/band/drummer.png" class="lazy" />
      </div>
      <div class="pics__guitarist">
        <img data-src="/band/guitarist.png" class="lazy" />
      </div>
    </div>
    <h2 class="sectionTitleType1">
      <span>Trois musiciens et un animateur</span>
      <span>pour un concert mémorable</span>
    </h2>
    <p class="containerNarrow">
      Fun Live est votre groupe pour passer un excellent moment. Fini les
      karaokés sur bande son. Notre concept : faire chanter les participants
      dans les conditions d’un vrai concert !
    </p>
    <p class="containerNarrow">
      Trois musiciens expérimentés accompagnent les candidats, qui choisissent
      leur chanson dans le large répertoire que nous proposons, pour devenir
      Mick Jagger, Elvis Presley, Sting, Johnny Halliday, Patricia Kaas, Alain
      Souchon, Francis Cabrel et bien d’autres !
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
  data() {
    return {
      t1: undefined,
      t2: undefined,
      ga: true,
    };
  },
  mounted() {
    this.$refs.title.addEventListener('mousedown', this.handleMouseDown);
  },
  methods: {
    desactivateGa() {
      this.ga = false;
      window['ga-disable-UA-164135179-1'] = true;
    },
    handleMouseDown() {
      this.t1 = new Date();
      this.$refs.title.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseUp() {
      this.$refs.title.removeEventListener('mouseup', this.handleMouseUp);
      this.t2 = new Date();
      if (this.t2 - this.t1 > 2000) {
        this.$refs.title.removeEventListener('mousedown', this.handleMouseDown);
        this.desactivateGa();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sectionTitleType1 {
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
    @media screen and ($mfPhone) {
      text-align: justify;
    }
    &:last-child {
      margin-top: 20px;
    }
  }
  & > h1 {
    @include handwritten;
    text-align: center;
    color: white;
    padding: 0;
    margin: 0;
    font-size: 3.2em;
    line-height: 1em;
    padding: 70px 0;
    text-shadow: 5px 5px 0 $primaryColor;
    @media screen and ($mfPhone) {
      padding: 100px 0 100px;
      font-size: 4em;
    }
    & > span {
      display: block;
      font-size: 0.5em;
    }
    &.noga {
      animation: bump 0.2s;
    }
  }
}
.pics {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 0 10px;
  @media screen and ($mfPhone) {
    padding: 0 0 20px;
  }
  @media screen and ($mfDesktop) {
    max-width: 1800px;
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
@keyframes bump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
