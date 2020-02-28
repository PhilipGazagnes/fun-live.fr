<template>
  <div>
    <ul class="songs">
      <li v-for="(s, index) in songs" :key="index">
        <strong>{{ s.name }}</strong>
        <small>{{ s.artist }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import songsJson from "./../data/index.json";

export default {
  data() {
    return {
      songs: songsJson
    };
  }
};
</script>

<style>
.songs {
  margin: 0;
  padding: 0;
  list-style-type: 0;
}
.songs li {
  margin: 0;
  padding: 0;
  display: block;
  float: left;
  width: 100%;
  text-align: center;
  height: 120px;
}
@media screen and (min-width: 600px) {
  .songs li {
    width: 50%;
  }
}
@media screen and (min-width: 992px) {
  .songs li {
    width: 33.33%;
  }
}
@media screen and (min-width: 1200px) {
  .songs li {
    width: 25%;
  }
}

.songs li strong {
  display: inline-block;
  font-family: "Permanent Marker";
  color: #c7af35;
  font-size: 1.8em;
  line-height: 1em;
  font-weight: normal;
  width: 350px;
  max-width: 80%;
}
.songs li small {
  display: block;
  font-size: 1em;
  opacity: 0.5;
}
</style>
