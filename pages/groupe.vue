<template>
  <div class="wrapper">
    <h1>Le groupe</h1>
    <img src="" />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque
    diam varius, gravida leo vel, faucibus justo. Maecenas suscipit nisl a metus
    venenatis elementum. Nullam vitae posuere orci, nec molestie ipsum. Duis sit
    amet sem vestibulum, molestie urna eu, facilisis massa. Nulla ullamcorper,
    nunc non luctus cursus, nisi felis tincidunt risus, sit amet commodo diam
    est sed nunc. Nulla ligula mauris, fringilla et vestibulum eu, sollicitudin
    ut risus. Mauris eget mauris sem. Integer et eleifend nibh. Phasellus
    consequat lacus non porttitor elementum. Aliquam nec tellus diam. Duis eget
    pharetra lacus, imperdiet posuere enim. Nulla ex arcu, pharetra eget gravida
    id, rutrum at odio. Vivamus nec imperdiet ex. Vivamus consectetur nisi vel
    est vehicula eleifend.
    <div class="member">
      <div class="images">
        <div><img src="/band/nico-1.jpg" /></div>
        <div><img src="/band/nico-2.jpg" /></div>
        <div><img src="/band/nico-3.jpg" /></div>
      </div>
      <div class="desc">
        <h2>Nico</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          scelerisque diam varius, gravida leo vel, faucibus justo. Maecenas
          suscipit nisl a metus venenatis elementum. Nullam vitae posuere orci,
          nec molestie ipsum. Duis sit amet sem vestibulum, molestie urna eu,
          facilisis massa. Nulla ullamcorper, nunc non luctus cursus, nisi felis
          tincidunt risus, sit amet commodo diam est sed nunc. Nulla ligula
          mauris, fringilla et vestibulum eu, sollicitudin ut risus. Mauris eget
          mauris sem. Integer et eleifend nibh. Phasellus consequat lacus non
          porttitor elementum. Aliquam nec tellus diam. Duis eget pharetra
          lacus, imperdiet posuere enim. Nulla ex arcu, pharetra eget gravida
          id, rutrum at odio. Vivamus nec imperdiet ex. Vivamus consectetur nisi
          vel est vehicula eleifend.
        </p>
      </div>
    </div>
    <div class="member">
      <div class="images">
        <div><img src="/band/phil-1.jpg" /></div>
        <div><img src="/band/phil-2.jpg" /></div>
        <div><img src="/band/phil-3.jpg" /></div>
      </div>
      <div class="desc">
        <h2>Phil</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          scelerisque diam varius, gravida leo vel, faucibus justo. Maecenas
          suscipit nisl a metus venenatis elementum. Nullam vitae posuere orci,
          nec molestie ipsum. Duis sit amet sem vestibulum, molestie urna eu,
          facilisis massa. Nulla ullamcorper, nunc non luctus cursus, nisi felis
          tincidunt risus, sit amet commodo diam est sed nunc. Nulla ligula
          mauris, fringilla et vestibulum eu, sollicitudin ut risus. Mauris eget
          mauris sem. Integer et eleifend nibh. Phasellus consequat lacus non
          porttitor elementum. Aliquam nec tellus diam. Duis eget pharetra
          lacus, imperdiet posuere enim. Nulla ex arcu, pharetra eget gravida
          id, rutrum at odio. Vivamus nec imperdiet ex. Vivamus consectetur nisi
          vel est vehicula eleifend.
        </p>
      </div>
    </div>
    <div class="member">
      <div class="images">
        <div><img src="/band/jean-1.jpg" /></div>
        <div><img src="/band/jean-2.jpg" /></div>
        <div><img src="/band/jean-3.jpg" /></div>
      </div>
      <div class="desc">
        <h2>Jean</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          scelerisque diam varius, gravida leo vel, faucibus justo. Maecenas
          suscipit nisl a metus venenatis elementum. Nullam vitae posuere orci,
          nec molestie ipsum. Duis sit amet sem vestibulum, molestie urna eu,
          facilisis massa. Nulla ullamcorper, nunc non luctus cursus, nisi felis
          tincidunt risus, sit amet commodo diam est sed nunc. Nulla ligula
          mauris, fringilla et vestibulum eu, sollicitudin ut risus. Mauris eget
          mauris sem. Integer et eleifend nibh. Phasellus consequat lacus non
          porttitor elementum. Aliquam nec tellus diam. Duis eget pharetra
          lacus, imperdiet posuere enim. Nulla ex arcu, pharetra eget gravida
          id, rutrum at odio. Vivamus nec imperdiet ex. Vivamus consectetur nisi
          vel est vehicula eleifend.
        </p>
      </div>
    </div>
  </div>
</template>

<style type="postcss" scoped>
.member {
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  flex-direction: row;
  &:nth-of-type(2) {
    @media screen and (--desktop) {
      flex-direction: row-reverse;
    }
  }
}
.images {
  flex: 0 0 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  column-gap: 6px;
  @media screen and (--desktop) {
    flex: 0 0 calc(50% - 20px);
  }
  & > div {
    &:first-child {
      flex: 0 0 100%;
    }
    &:not(:first-child) {
      flex: 0 0 calc(50% - 3px);
    }
    & > img {
      width: 100%;
    }
  }
}
.desc {
  flex: 0 0 100%;
  @media screen and (--desktop) {
    flex: 0 0 calc(50% - 20px);
  }
}
</style>
