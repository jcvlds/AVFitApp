<template>
  <tr>
    <td class="text-center">
      {{ exercise-1 }}
    </td>
    <td class="text-center">
      {{ exercise-1-sets }}
      </td>
    <td class="text-center" style="background-color: rgba(232, 140, 130,0.2);">
      {{ exercise-1-weight-lifted }}
      <q-popup-edit v-model="weightLifted" title="Weight lifted"
        buttons persistent label-set="Save" label-cancel="Close" :content-style="{ color: '#e88c82' }" color="accent">
        <q-input placeholder="Weight lifted" v-model="wednesdayWeight" dense autofocus counter />
      </q-popup-edit>
    </td>
    <td class="text-center" style="background-color: rgba(232, 140, 130,0.2);">
      {{ exercise-1-reps }}
      <q-popup-edit v-model="repsCompleted" title="Reps completed"
        buttons persistent label-set="Save" label-cancel="Close" :content-style="{ color: '#e88c82' }" color="accent">
        <q-input placeholder="Reps completed" v-model="thursdayWeight" dense autofocus counter />
      </q-popup-edit>
    </td>
  </tr>
</template>

<script>
export default {
data () {
  return {

  }
}
}
</script>

<style>

</style>