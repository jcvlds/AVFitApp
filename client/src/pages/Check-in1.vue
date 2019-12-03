<template>
  <!-- <q-page class="flex flex-center">
    <h1 class="text-accent">Check-In</h1> -->
  <q-page class="fit column justify-start items-center">
    <div class="col text-center" style="overflow: auto;min-width: 200px; max-width: 90vh;">
      <h5 class="text-accent">Check-In</h5>

      <q-form @submit="login" class="q-gutter-md">
        <q-item-label header>1) How did you...?</q-item-label>
        <q-input class="bg-grey-1" outlined color="black" filled 
        v-model="qt1" type="textarea" dense />
        <q-btn type="submit" :loading="loading1" icon="exit_to_app" outline rounded color="accent" label="Submit Checkin Form" class="q-px-lg shadow-2"/>
      </q-form>

      <q-item-label header>Account Settings</q-item-label>
      
      <q-btn :loading="loading1" icon="camera_alt" outline rounded color="accent"
        label="Upload Pictures" @click="set"
        class="q-px-lg shadow-2 disabled"/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Check-in",
  data() {
    return {
      qt1: "",
      questions: [
        {
          no: 1,
          name: 'X',
          question: 'How did you ...'
        },
        {
          no: 2,
          name: 'X',
          question: 'How did you ...'
        },
        {
          no: 3,
          name: 'X',
          question: 'How did you ...'
        },
        {
          no: 4,
          name: 'X',
          question: 'How did you ...'
        },
        {
          no: 5,
          name: 'X',
          question: 'How did you ...'
        },
        {
          no: 6,
          name: 'X',
          question: 'How did you ...'
        },
        {
          no: 7,
          name: 'X',
          question: 'How did you ...'
        },
        {
          no: 8,
          name: 'X',
          question: 'How did you ...'
        }
      ]
  }
  },
  methods: {
    set() {
      console.log('tick');
    }
  }
}
</script>

<style scoped>

</style>