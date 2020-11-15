<template>
  <div :class="`container${sticky ? ' container--sticky' : ''}`">
    <Logo v-if="sticky" />
    <LogoBold v-else />
    <button>Contactez-nous</button>
  </div>  
</template>

<script>
import Logo from '../assets/svg/logo.svg?inline';
import LogoBold from '../assets/svg/logo-bold.svg?inline';

export default {
  components: {
    Logo,
    LogoBold,
  },
  data() {
    return {
      sticky: false,
    };
  },
  mounted() {
    InView('#Video').on('enter', () => {
      this.sticky = false;
    }).on('exit', () => {
      this.sticky = true;
    });
  },
}
</script>

<style lang="postcss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  & > svg {
    width: 300px;
    position: absolute;
    top: 0;
    left: 0;
    fill: white;
  }
  & > button {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
  }
  &--sticky {
    position: fixed;
    background: rgba(255,255,255,.9);
    & > svg {
      fill: black;
      width: 160px;
    }
    & > button {
      display: inline;
    }
  }
}
</style>