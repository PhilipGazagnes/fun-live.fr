<template>
  <div class="container" id="Video">
    <!-- <div ref="nav">
      <transition name="showswipe">
        <button v-show="showswipebuttons">back</button>
      </transition>
      <transition name="showswipe">
        <button v-show="showswipebuttons">next</button>
      </transition>
      <div>
        <button v-for="(v, index) in $options.videos" :key="index" :class="index === 0 ? 'active' : ''">
          <span>{{ v.name }}</span>
        </button>
      </div>
    </div> -->
  </div>  
</template>

<script>
export default {
  videos: [
    {
      name: 'Teaser',
    },
    {
      name: 'Video 1',
    },
    {
      name: 'Video 2',
    },
    {
      name: 'Video 3',
    },
    {
      name: 'Video 4',
    },
    {
      name: 'Video 5',
    },
    {
      name: 'Video 6',
    },
    {
      name: 'Video 7',
    },
    {
      name: 'Video 8',
    },
    {
      name: 'Video 9',
    },
    {
      name: 'Video 10',
    },
    {
      name: 'Video 11',
    },
  ],
  // data() {
  //   return {
  //     showswipebuttons: false,
  //   };
  // },
  // mounted() {
  //   this.$refs.nav.addEventListener('mouseenter', this.handleMouseOver, {
  //     passive: true,
  //   });
  // },
  // methods: {
  //   handleMouseOver() {
  //     this.showswipebuttons = true;
  //     this.$refs.nav.addEventListener('mouseleave', this.handleMouseOut, {
  //       passive: true,
  //     });
  //   },
  //   handleMouseOut() {
  //     this.showswipebuttons = false;
  //     this.$refs.nav.removeEventListener('mouseleave', this.handleMouseOut, {
  //       passive: true,
  //     });
  //   },
  // },
  mounted() {
    // 2. This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    let player;
    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player('Video', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        playerVars: {
          'autoplay': 1,
          'loop': 1,
          'mute': 1 // N.B. here the mute settings.
        },
        events: {
          'onReady': onPlayerReady,
          // 'onStateChange': onPlayerStateChange
        }
      });
    }

    // 4. The API will call this function when the video player is ready.
    window.onPlayerReady = (event) => {
      event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    // let done = false;
    // window.onPlayerStateChange = (event) => {
    //   if (event.data == YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 6000);
    //     done = true;
    //   }
    // }
    // window.stopVideo = () => {
    //   player.stopVideo();
    // }
  },
}
</script>

<style lang="postcss" scoped>
.container {
  height: 90vh;
  position: relative;
  z-index: 1;
  background: black;
  & > video {
    height: calc(100% - 100px);
    width: 100%;
    background: purple;
    object-fit: cover;
  }
  & > div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    & > button {
      position: absolute;
      bottom: 0;
      width: 50px;
      height: 100px;
      z-index: 10;
      &:first-of-type {
        left: 0;
      }
      &:last-of-type {
        right: 0;
      }
    }
    & > div {
      height: inherit;
      white-space: nowrap;
      & > button {
        margin: 25px 0 0 5px;
        padding: 0;
        display: inline-block;
        height: 90px;
        width: 150px;
        border: none;
        background: none;
        cursor: pointer;
        &:last-child {
          margin-right: 5px;
        }
        & > span {
          display: block;
          height: 100%;
          background: black;
          position: relative;
          z-index: 2;
        }
        &:hover {
          & > span {
            background: #222;
          } 
        }
        &.active {
          position: relative;
          &::before {
            content: '';
            display: block;
            width: 30px;
            height: 30px;
            background: white;
            z-index: 1;
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
          }
          & > span {
            background: #333;
          }
        }
      }
    }
  }
}
.showswipe-enter-active, .showswipe-leave-active {
  transition: opacity .2s;
}
.showswipe-enter, .showswipe-leave-to {
  opacity: 0;
}
</style>