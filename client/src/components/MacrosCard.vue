<template>
  <div class="">

    <div class="text-bold text-grey-9" style="font-size: 1.2em">Macros Goal</div>
    <div class="fit row wrap justify-around">
      <div class="col-3 text-center text-overline text-pink-9 column items-center">
        Protein
        <q-input class="styleInput" rounded standout readonly style="max-width:200px;"
          v-model="macros.protein" />
        </div>
      <div class="col-3 text-center text-overline text-pink-9 column items-center">
        Carbs
        <q-input class="styleInput" rounded standout readonly style="max-width:200px;"
          v-model="macros.carbs" />
        </div>
      <div class="col-3 text-center text-overline text-pink-9 column items-center">
        Fats
        <q-input class="styleInput" rounded standout readonly style="max-width:200px;"
          v-model="macros.fats" />
        </div>
    </div>

    <div class="text-bold text-grey-9 q-mt-md" style="font-size: 1.2em">Macros Goal - Rest Day</div>
    <div class="fit row wrap justify-around">
      <div class="col-3 text-center text-overline text-pink-9 column items-center">
        Protein
        <q-input class="styleInput" rounded standout readonly style="max-width:200px;"
          v-model="macrosRest.protein" />
        </div>
      <div class="col-3 text-center text-overline text-pink-9 column items-center">
        Carbs
        <q-input class="styleInput" rounded standout readonly style="max-width:200px;"
          v-model="macrosRest.carbs" />
        </div>
      <div class="col-3 text-center text-overline text-pink-9 column items-center">
        Fats
        <q-input class="styleInput" rounded standout readonly style="max-width:200px;"
          v-model="macrosRest.fats" />
        </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      userNormalProtein: '',
      macros: {
        protein: '',
        carbs: '',
        fats: ''
        },
        macrosRest: {
          protein: '',
          carbs: '',
          fats: ''
        }
      }
    }
}
</script>

<style scoped>

.styleInput >>> .q-placeholder{
  text-align: center;
}

</style>