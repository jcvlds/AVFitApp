<template>
  <q-page class="fit row" style="padding-right: 05vw; padding-left: 05vw; padding-bottom: 05vw">
    <!-- <div class="col text-center" style="overflow: auto;min-width: 200px; max-width: 90vh;"> -->

    <div class="fit col-12">
      <h5 class="text-accent q-mb-lg">Check-In</h5>
    </div>

    <div class="fit row">
      <div class="col-12">
        <h6 class="q-ma-none text-grey-9">Weight Log</h6>
      </div>
      <div class="col-4">
        <q-item-label header class="text-grey-9">Average Weight last week: </q-item-label>
      </div>
      <div class="col-8" style="">
        <q-input class="" rounded standout readonly style="max-width:200px;" />
      </div>
    </div>

    <div class="fit col-12 q-pt-md">
      <q-item-label header class="text-grey-9">This Week: <span style="font-style: italic;">enter your weight log below!</span></q-item-label>
      <q-markup-table :separator="separator" flat bordered class="">
      <thead class="">
        <tr class="text-deep-purple-7">
          <th class="text-center">Mon</th>
          <th class="text-center">Tues</th>
          <th class="text-center">Wed</th>
          <th class="text-center">Thurs</th>
          <th class="text-center">Fri</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center">
            {{ mondayWeight }}
            <q-popup-edit v-model="mondayWeight" title="Monday" 
              buttons persistent label-set="Save" label-cancel="Close" :content-style="{ color: '#5E35B1' }" color="accent">
              <q-input placeholder="Edit the weight" v-model="mondayWeight" dense autofocus counter />
            </q-popup-edit>
          </td>
          <td class="text-center">
            {{ tuesdayWeight }}
            <q-popup-edit v-model="tuesdayWeight" title="Tuesday">
              <q-input placeholder="Edit the weight" v-model="tuesdayWeight" dense autofocus counter />
            </q-popup-edit>
            </td>
          <td class="text-center">
            {{ wednesdayWeight }}
            <q-popup-edit v-model="wednesdayWeight" title="Wednesday">
              <q-input placeholder="Edit the weight" v-model="wednesdayWeight" dense autofocus counter />
            </q-popup-edit>
          </td>
          <td class="text-center">
            {{ thursdayWeight }}
            <q-popup-edit v-model="thursdayWeight" title="Thursday">
              <q-input placeholder="Edit the weight" v-model="thursdayWeight" dense autofocus counter />
            </q-popup-edit>
          </td>
          <td class="text-center">
            {{ fridayWeight }}
            <q-popup-edit v-model="fridayWeight" title="Friday">
              <q-input placeholder="Edit the weight" v-model="fridayWeight" dense autofocus counter />
            </q-popup-edit>
          </td>
        </tr>
      </tbody>
      </q-markup-table>
    </div>

    <div class="fit row q-pt-lg gt-xs">
      <div class="col-12 text-center">
        <q-btn :loading="loading1" class="shadow-2" style="width: 35vw; font-weight: bold"
          icon="save_alt" outline rounded color="accent" label="Save weight log" />
      </div>
    </div>
    <div class="fit row q-pt-lg lt-sm">
      <div class="col-12 text-center">
        <q-btn :loading="loading1" class="shadow-2" style="width: 60vw; font-weight: bold"
          icon="save_alt" outline rounded color="accent" label="Save weight log" />
      </div>
    </div>

    <h6 class="col-12 q-mb-none q-mt-lg text-grey-9">Questionaire</h6>
    <div class="q-pt-none col-xs-12 col-md-4 col-sm-6 q-gutter-x-md" style=""
      v-for="question in questions" :key="question.no">

      <q-form @submit="set" class="q-gutter-x-md">
        <q-item-label header class="q-mt-none text-pink-9">{{ question.no }}) - {{ question.question }}</q-item-label>
        <q-input class="bg-grey-1 q-mt-none" outlined color="black" filled 
        v-model="questions[getIndex(questions, question.no)].answer" 
        type="textarea" style="height: 100px" dense />
      </q-form>
    </div>
    <!-- <q-btn :loading="loading1" icon="exit_to_app" outline rounded color="accent" label="Save" class="q-px-lg shadow-2"/> -->

    <div class="fit row q-pt-lg gt-xs">
      <div class="col-12 text-center">
        <q-btn :loading="loading1" class="shadow-2" style="width: 35vw; font-weight: bold"
          icon="save_alt" outline rounded color="accent" label="Save Answers" />
      </div>
    </div>
    <div class="fit row q-pt-lg lt-sm">
      <div class="col-12 text-center">
        <q-btn :loading="loading1" class="shadow-2" style="width: 60vw; font-weight: bold"
          icon="save_alt" outline rounded color="accent" label="Save Answers" />
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: "Check-in",
  props: [],
  data() {
    return {
      loading1: false,
      separator: "vertical",
      mondayWeight: "-",
      tuesdayWeight: "-",
      wednesdayWeight: "-",
      thursdayWeight: "-",
      fridayWeight: "-",
      thisWeek: "",
      questions: [
        {
          no: 1,
          question: 'How did you feel about the time during this week?...',
          answer: ''
        },
        {
          no: 2,
          question: 'How did you feel about the time during this week?...',
          answer: ''
        },
        {
          no: 3,
          question: 'How did you feel about the time during this week?...',
          answer: ''
        },
        {
          no: 4,
          question: 'How did you feel about the time during this week?...',
          answer: ''
        },
        {
          no: 5,
          question: 'How did you feel about the time during this week?...',
          answer: ''
        },
        {
          no: 6,
          question: 'How did you feel about the time during this week?...',
          answer: ''
        },
        {
          no: 7,
          question: 'How did you feel about the time during this week?...',
          answer: ''
        },
        {
          no: 8,
          question: 'How did you feel about the time during this week?...',
          answer: ''
        }
      ]
  }
  },
  methods: {
    getIndex(list, no) {
      return list.findIndex((e) => e.no == no)
    },
    set() {
      console.log('tick');
    }
  }
}
</script>

<style scoped>

</style>