<template>
  <div class="wrapper">
    <h1>Prochains concerts karaoké live</h1>
    <div class="events">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="event"
        :data-cancelled="event.cancelled"
      >
        <div class="date">
          <div>
            <span>{{ event.date.dayName }}</span>
            <span>{{ event.date.dayNum }}</span>
            <span>{{ event.date.month }}</span>
            <span>{{ event.date.year }}</span>
          </div>
        </div>
        <div class="desc">
          <div>{{ event.place }}</div>
          <div>{{ event.address }}</div>
          <div>{{ event.time }}</div>
          <span v-if="event.cancelled">Annulé</span>
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
  margin-bottom: 40px;
  height: 110px;
  position: relative;
  padding: 0 0 0 120px;
  &[data-cancelled] {
    .date {
      opacity: 0.8;
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background: red;
        opacity: 0.3;
        top: 0;
        left: 0;
      }
    }
  }
}
.date {
  background: rgb(190, 31, 151);
  background: linear-gradient(
    15deg,
    rgba(108, 20, 208, 1) 0%,
    rgba(190, 31, 151, 1) 70%
  );
  text-align: center;
  width: 100px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 1px;
  color: white;
  text-transform: uppercase;
  & > div {
    background: var(--primaryColor);
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & > span {
      display: block;
      font-weight: bold;
      &:nth-child(2) {
        font-size: 2em;
      }
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
  & > span {
    color: red;
    font-weight: bold;
    font-size: 1.2em;
  }
}
</style>
