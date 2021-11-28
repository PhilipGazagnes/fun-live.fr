<template>
  <div class="agenda">
    <div class="events">
      <div v-for="(event, index) in events" :key="index">
        <div>{{ event.date }}</div>
        <div>{{ event.time }}</div>
        <div>{{ event.place }}</div>
        <div>{{ event.address }}</div>
        <a :href="event.facebookEvent">Evénement Facebook</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          date: '10/12/2021',
          time: '20h - minuit',
          place: 'Le Zanzi-Bar',
          address: '36 avenue Victor Hugo, 34200 Sète',
          price: 'Gratuit',
          facebookEvent: '#',
        },
        {
          date: '16/12/2021',
          time: '18h30 - 23h',
          place: "L'Odéon Music Bar",
          address: 'Route de Mèze 864 rte Departementale 613, 34560 Poussan',
          price: 'Gratuit',
          facebookEvent: '#',
        },
        {
          date: '06/01/2022',
          time: '18h30 - 23h',
          place: "L'Odéon Music Bar",
          address: 'Route de Mèze 864 rte Departementale 613, 34560 Poussan',
          price: 'Gratuit',
          facebookEvent: '#',
        },
        {
          date: '14/01/2022',
          time: '20h - minuit',
          place: 'Le Zanzi-Bar',
          address: '36 avenue Victor Hugo, 34200 Sète',
          price: 'Gratuit',
          facebookEvent: '#',
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.events {
  & > div {
  }
}
</style>
