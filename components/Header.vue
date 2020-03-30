<template>
  <div>
    <header class="header">
      <h1>Fun Live <span>Karaoké Live Band</span></h1>
    </header>
  </div>
</template>

<script>
export default {};
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
  }
}
</style>
