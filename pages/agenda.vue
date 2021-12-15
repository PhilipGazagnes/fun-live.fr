<template>
  <div class="wrapper">
    <h1>Prochains concerts karaoké live</h1>
    <div class="events">
      <div v-for="(event, index) in events" :key="index" class="event">
        <div class="date">
          <span>{{ event.date.dayName }}</span>
          <span>{{ event.date.dayNum }}</span>
          <span>{{ event.date.month }}</span>
          <span>{{ event.date.year }}</span>
        </div>
        <div class="desc">
          <div>{{ event.place }}</div>
          <div>{{ event.address }}</div>
          <div>{{ event.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventsJson from '../data/json/events.json';

export default {
  data() {
    return {
      events: eventsJson.filter((e) => new Date(e.date.enFormat) > new Date()),
    };
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
.event {
  display: flex;
  margin-bottom: 40px;
  gap: 20px;
}
.date {
  background: rgb(190, 31, 151);
  background: linear-gradient(
    0deg,
    rgba(190, 31, 151, 1) 0%,
    rgba(108, 20, 208, 1) 100%
  );
  text-align: center;
  flex: 0 0 100px;
  padding: 10px;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  & > span {
    display: block;
    font-weight: bold;
    &:nth-child(2) {
      font-size: 2em;
    }
  }
}

.desc {
  & > div {
    &:nth-child(1) {
      font-size: 1.3em;
      font-weight: bold;
      margin-bottom: 5px;
    }
    &:nth-child(2) {
      margin-bottom: 5px;
    }
    &:nth-child(3) {
      color: var(--secondaryColor);
    }
  }
}
</style>
