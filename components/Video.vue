<template>
  <div class="container" id="Video">
    <video autoplay muted loop id="Video">
      <source src="/teaser-bg.mp4" type="video/mp4">
    </video>
    <div ref="nav">
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
    </div>
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
  data() {
    return {
      showswipebuttons: false,
    };
  },
  mounted() {
    this.$refs.nav.addEventListener('mouseenter', this.handleMouseOver, {
      passive: true,
    });
  },
  methods: {
    handleMouseOver() {
      this.showswipebuttons = true;
      this.$refs.nav.addEventListener('mouseleave', this.handleMouseOut, {
        passive: true,
      });
    },
    handleMouseOut() {
      this.showswipebuttons = false;
      this.$refs.nav.removeEventListener('mouseleave', this.handleMouseOut, {
        passive: true,
      });
    },
  },
}
</script>

<style lang="postcss" scoped>
.container {
  height: 90vh;
  position: relative;
  z-index: 1;
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