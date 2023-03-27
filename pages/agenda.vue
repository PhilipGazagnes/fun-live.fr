<template>
  <div class="wrapper">
    <h1>Prochains concerts karaoké live</h1>
    <div class="events">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="event"
        :data-cancelled="event.etat === 'ANNULE'"
      >
        <EventDate :date="event.date" />
        <div class="desc">
          <div class="eventtitle">{{ event.lieu }}</div>
          <div class="eventcity">{{ event.ville }}</div>
          <div v-if="event.notice_publique" class="projectnotice">
            {{ event.notice_publique }}
          </div>
          <div v-if="event.etat === 'ANNULE'" class="cancellednotice">
            Annulé
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventsJson from '../data/json/events.json';
import EventDate from '../components/EventDate.vue';

export default {
  components: {
    EventDate,
  },
  data() {
    return {
      events: eventsJson.filter(
        (e) =>
          new Date(e.date) > new Date().setDate(new Date().getDate()) &&
          e.projet.indexOf('FUNLIVE') >= 0 &&
          e.est_public === 'true' &&
          e.etat === 'CONFIRME',
      ),
    };
  },
  methods: {
    dateHTML(date) {
      const dateObj = new Date(date);
      return `
        <span>${this.$options.dayName[dateObj.getDay()]}</span>
        <span>${dateObj.getDate()}</span>
        <span>${this.$options.monthName[dateObj.getMonth()]}</span>
        <span>${dateObj.getFullYear()}</span>
      `;
    },
  },
  head: {
    title: 'Agenda | Fun Live',
  },
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
.eventtitle {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 5px;
}
.eventcity {
  margin-bottom: 5px;
}
.projectnotice {
  color: var(--secondaryColor);
  margin-bottom: 5px;
}
.cancellednotice {
  color: red;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 5px;
}
</style>
