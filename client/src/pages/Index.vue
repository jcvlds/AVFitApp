<template>
  <q-page class="fit row" style="padding-right: 05vw; padding-left: 05vw; padding-bottom: 05vh; padding-top: 10vh">
    <div class="col" style="overflow: auto;min-width: 100%">
    <q-scroll-area class="fit round-borders shadow-2"
          :thumb-style="{
            right: '4px',
            borderRadius: '5px',
            background: 'transparent',
            width: '10px',
            opacity: 1
          }"
          :delay="2000">

    <div class="fit q-gutter-y-md">
      <q-card bordered class="bg-white" style="width: 100%"><q-card-section>
      <div class="">
        <h5 class="text-accent q-my-none">Bienvenida {{ user }}!</h5>
      </div>

      <div class="column q-mt-none">
          <h6 class="text-grey-8 q-mt-lg q-mb-xs">Mi Meta #1:</h6>
          <p class="text-grey-8 text-body1 q-pl-sm" style="font-size: 1.5em">{{ users.goal }}</p>
      </div>
      </q-card-section></q-card>
    
      <q-card bordered class="bg-white q-mb-xl q-mt-lg" style="width: 100%"><q-card-section>
      <div class="column">
          <h6 class="text-grey-8 q-mt-sm q-mb-none">Progreso:</h6>
      </div>

      <div class="fit col-12 q-pt-none q-mt-none">
        <q-item-label header class="text-grey-9 text-body1" style="font-size: 1.2em">Peso Inicial: {{ users.weight }} lbs</q-item-label>

        <q-markup-table :separator="separator" flat bordered class="">
        <thead class="">
          <tr class="text-white bg-accent">
            <th class="text-center">Day / Week</th>
            <th class="text-center">This week</th>
            <th class="text-center">Last week</th>
            <th class="text-center">2 weeks ago</th>
            <th class="text-center">3 weeks ago</th>
          </tr>
        </thead>
        <tbody>
          <weightLog day="Average" boldTrue="true"></weightLog>
          <weightLog day="Monday"></weightLog>
          <weightLog day="Tuesday"></weightLog>
          <weightLog day="Wednesday"></weightLog>
          <weightLog day="Thursday"></weightLog>
          <weightLog day="Friday"></weightLog>
          <weightLog day="Saturday"></weightLog>
          <weightLog day="Sunday"></weightLog>
        </tbody>
        </q-markup-table>
      </div>
      </q-card-section></q-card>
    
    </div>
    </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "PageIndex",
  data() {
    return {
      users: {
        username: 'Lol',
        goal: 'Establecer el fitness como estilo de vida y tener mi dream bikini body!!!',
        weight: '112'
      },
      separator: 'cell'
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
  },
  components: {
    'weightLog': require('../components/WeightLog').default
  }
};
</script>

<style scoped>

</style>