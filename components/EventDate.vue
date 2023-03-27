<template>
  <div class="date">
    <div>
      <span>{{ dayData.name }}</span>
      <span>{{ dayData.num }}</span>
      <span>{{ dayData.month }}</span>
      <span>{{ dayData.year }}</span>
    </div>
  </div>
</template>

<script>
export default {
  dayName: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  monthName: [
    'Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  props: {
    date: { type: String, default: null },
  },
  computed: {
    dayData() {
      const dateObj = new Date(this.date);
      return {
        name: this.$options.dayName[dateObj.getDay()],
        num: dateObj.getDate(),
        month: this.$options.monthName[dateObj.getMonth()],
        year: dateObj.getFullYear(),
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
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
</style>
