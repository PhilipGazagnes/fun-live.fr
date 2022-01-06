<template>
  <div class="wrapper">
    <h1>Vidéos karaoké live</h1>
    <p class="subtitle">Une soirée Karaoké Live, ça peut ressembler à ça !</p>
    <div class="videos">
      <button
        v-for="(video, index) in videos"
        :key="index"
        @click="openVideo(video.url)"
      >
        <div>
          <div><Play /></div>
          <img
            class="lazy"
            :data-src="`https://aeovnsnhjq.cloudimg.io/v7/_funlive_/videos/${video.img}`"
            src="blank.gif"
          />
        </div>
        <span>{{ video.name }}</span>
      </button>
    </div>
    <div class="modal" :data-open="modal">
      <button @click="modal = false">x</button>
      <div v-if="modal">
        <div id="player" />
      </div>
      <span @click="modal = false" />
    </div>
  </div>
</template>

<script>
import videosJson from '../data/json/videos.json';
import Play from '../assets/svg/play.svg?inline';

export default {
  components: {
    Play,
  },
  data() {
    return {
      videos: videosJson,
      modalVideo: '',
      modal: false,
    };
  },
  methods: {
    openVideo(url) {
      this.modal = true;
      this.modalVideo = url;
      this.$nextTick(() => {
        const width = window.innerWidth > 883 ? 883 : window.innerWidth;
        const height = (width * 9) / 16;
        const player = new window.YT.Player('player', {
          height,
          width,
          videoId: url,
          events: {
            onReady: this.onPlayerReady,
          },
        });
      });
    },
    onPlayerReady(event) {
      event.target.playVideo();
    },
  },
};
</script>

<style lang="postcss" scoped>
.subtitle {
  margin: 0;
  padding: 0 0 20px 0;
}
.videos {
  margin: 0 -5px;
  &::after {
    content: '';
    clear: both;
    display: block;
  }
  & > button {
    float: left;
    cursor: pointer;
    background: none;
    display: block;
    padding: 0;
    border: 0px;
    margin: 0 2px;
    width: calc(50% - 4px);
    text-align: left;
    @media screen and (--tablet) {
      width: calc(33.33% - 4px);
    }
    @media screen and (--desktop) {
      width: calc(25% - 4px);
    }
    & > div {
      position: relative;
      & > img {
        width: 100%;
      }
      & > div {
        position: absolute;
        width: 50px;
        height: 50px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        & > svg {
          width: 100%;
          height: 100%;
          fill: white;
          opacity: 0.7;
        }
      }
    }

    & > span {
      color: white;
      font-size: 0.9em;
      font-family: inherit;
      display: none;
    }
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  &[data-open] {
    transform: translateY(0);
  }
  & > button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 35px;
    height: 35px;
    background: none;
    border: none;
    z-index: 2;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background: white;
      position: absolute;
      top: 50%;
      left: 0;
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    z-index: 1;
  }
  & > span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primaryColor);
    opacity: 0.9;
    z-index: 0;
  }
}
</style>
