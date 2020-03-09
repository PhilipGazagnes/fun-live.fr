<template>
  <div>
    <!-- <div class="top" /> -->
    <header :class="stickyHeader ? 'sticky' : 'static'">
      <h1>Fun Live <span>Karaoké Live Band</span></h1>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stickyHeader: false
    };
  },
  mounted() {
    // window
    //   .InView(".top")
    //   .on("exit", () => {
    //     this.stickyHeader = true;
    //   })
    //   .on("enter", () => {
    //     this.stickyHeader = false;
    //   });
    // if (!window.InView.is(document.querySelector(".top"))) {
    //   this.stickyHeader = true;
    // }
  }
};
</script>

<style lang="scss">
$accentColor: #c7af35;

header {
  & > h1 {
    font-family: "Permanent Marker";
    font-weight: normal;
    padding: 0;
    margin: 0;
    & > span {
      color: $accentColor;
    }
  }
  & > nav {
    & > button {
      border: none;
      background: none;
      font-family: "Open Sans";
      color: white;
      font-size: 1em;
      cursor: pointer;
      &:hover {
        color: $accentColor;
      }
    }
  }
  &.static {
    text-align: center;
    // position: absolute;
    // width: 100%;
    // height: 300px;
    // top: 0;
    // left: 0;
    & > h1 {
      font-size: 3em;
      padding: 70px 0;
      @media screen and (min-width: 480px) {
        padding: 100px 0;
        font-size: 4em;
      }
      & > span {
        display: block;
        font-size: 0.5em;
      }
    }
  }
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    text-align: left;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10;
    & > h1 {
      font-size: 2em;
      padding: 5px 0 0 15px;
      & > span {
        font-size: 1em;
        display: inline;
      }
    }
    & > nav {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}
.top {
  height: 500px;
}
</style>
