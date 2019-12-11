<template>
  <div class="">

    <div class="text-bold text-grey-9" style="font-size: 1.2em">{{ day }} - {{ muscleGroup }}</div>
    
    <div class="fit row wrap justify-around">
      <div class="fit col-12 q-pt-md">
            <q-item-label header class="text-grey-9"><span style="font-style: italic;">Enter today's performance!</span></q-item-label>
            <q-markup-table :separator="separator" flat bordered class="" style="border: 1px solid #AD1457">
            <thead class="">
              <tr class="text-pink-9">
                <!-- <th class="text-center" style="border-left: 1px solid; border-top: 1px solid; border-bottom: 1px solid; color: pink-9"> -->
                <th class="text-center" style="border-bottom: 1px solid">
                  Exercise</th>
                <!-- <th class="text-center" style="border-top: 1px solid; border-bottom: 1px solid; color: pink-9"> -->
                <th class="text-center" style="border-bottom: 1px solid">
                  Sets</th>
                <!-- <th class="text-center" style="border-top: 1px solid; border-bottom: 1px solid; color: pink-9"> -->
                <th class="text-center bg-pink-9 text-white" style="border-bottom: 1px solid">
                  Weight</th>
                <!-- <th class="text-center" style="border-top: 1px solid; border-bottom: 1px solid; border-right: 1px solid; color: pink-9"> -->
                <th class="text-center bg-pink-9 text-white" style="border-bottom: 1px solid">
                  Reps</th>
              </tr>
            </thead>
            <tbody>
              <exercises></exercises>
              <exercises></exercises>
              <exercises></exercises>
              <exercises></exercises>
              <exercises></exercises>
            </tbody>
            </q-markup-table>
          </div>
    </div>

  </div>
</template>

<script>
export default {
  props: [
    'day'
  ],
  data () {
    return {
      muscleGroup: '',
      days: '',
      separator: 'horizontal'
    }
  },
  components: {
    'Exercises': require('../components/Exercises').default
  },
  computed: {
    // day: function() {
    //   return 'Monday'
    // }
  }
}
</script>

<style>

</style>