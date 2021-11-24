<template>
  <div class="temp">
    <div class="logo"><Logo /></div>
    <h1>AGENDA</h1>
    <div class="content">
      <p>
        Agenda en construction ! Ca va venir très vite, en attendant, RDV sur
        notre page Facebook pour vous tenir au courant des prochains concerts
        ;)<br />
        <a href="https://www.facebook.com/funlive34/">Facebook Fun Live</a>
      </p>
      <h2 id="repertoire">
        Un Vaste répertoire international et multi générationnel
      </h2>
      <img src="/artists.jpg" />
      <SongsTemp />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showsongs: false,
    };
  },
};
</script>

<style lang="postcss" scoped>
.temp {
  max-width: 600px;
  padding: 40px 0 0;
  @media screen and (min-width: 640px) {
    margin: 0 auto;
    padding: 40px 0 100px;
  }
  & > .logo {
    padding: 20px 0 30px;
    text-align: center;
    & > svg {
      fill: white;
      width: 280px;
      height: 101px;
      @media screen and (min-width: 420px) {
        width: 380px;
        height: 137px;
      }
    }
  }
  & > h1 {
    font-family: 'Geomanist';
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 2em;
    line-height: 1.2em;
    margin-bottom: 60px;
    color: white;
    & > span {
      display: block;
      font-size: 1.2em;
    }
    @media screen and (min-width: 640px) {
      font-size: 2.4em;
    }
  }
  & > .content {
    background: white;
    padding: 20px 20px 50px 20px;
    @media screen and (min-width: 640px) {
      border-radius: 5px;
    }
    & > h2 {
      font-size: 2em;
      margin-top: 40px;
      font-family: 'Geomanist';
      text-transform: uppercase;
      margin: 0;
      padding: 30px 0 0 0;
      &:nth-of-type(2),
      &:nth-of-type(3) {
        padding: 50px 0 0 0;
      }
    }
    & > .video {
      margin-bottom: 40px;
      & > div {
        padding: 0 0 50% 0;
        position: relative;
        margin: 0 0 10px 0;
        & > video {
          position: absolute;
          width: 100%;
          height: 100%;
          background: black;
          margin-bottom: 10px;
          border-radius: 4px;
          cursor: pointer;
        }
        & > svg {
          width: 100px;
          height: 100px;
          fill: rgba(255, 255, 255, 0.3);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          pointer-events: none;
        }
      }
    }
    & > img {
      max-width: 100%;
      margin: 30px 0 10px;
    }
    & > .temoignage {
      padding: 0 0 0 20px;
      position: relative;
      margin: 30px 0 0 0;
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 2px;
        height: calc(100% - 10px);
        top: 7px;
        left: 0;
        background: linear-gradient(83.58deg, #570c41 -6.19%, #bd0086 115.07%);
      }
      & > p {
        padding: 0;
        margin: 0;
        &:first-child {
          font-style: italic;
          font-size: 1.2em;
          margin-bottom: 15px;
          & > svg {
            width: 20px;
            height: 20px;
            fill: #ffe600;
            transform: translateY(2px);
            margin-right: 2px;
          }
        }
        &:last-child {
          display: inline-block;
          border-top: 1px solid #eee;
          padding: 5px 0 0 0;
        }
      }
    }
    & > .mailto {
      background: -webkit-linear-gradient(
        83.58deg,
        #570c41 -6.19%,
        #bd0086 115.07%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.2em;
    }
    .button {
      background: linear-gradient(83.58deg, #570c41 -6.19%, #bd0086 115.07%);
      width: 100%;
      padding: 15px 0;
      color: white;
      border-radius: 4px;
      display: block;
      text-decoration: none;
      text-align: center;
      border: none;
      font-family: inherit;
      font-size: inherit;
      cursor: pointer;
    }
  }
}
</style>
