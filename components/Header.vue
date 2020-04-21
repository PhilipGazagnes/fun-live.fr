<template>
  <div>
    <header class="header">
      <h1 ref="title" :class="ga ? '' : 'noga'">
        Fun Live <span>Karaoké Live Band</span>
      </h1>
    </header>
  </div>
</template>

<script>
export default {
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
.header {
  text-align: center;
  background: white;
  & > h1 {
    @include handwritten;
    color: $primaryColor;
    padding: 0;
    margin: 0;
    font-size: 3em;
    line-height: 1em;
    padding: 70px 0;
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
