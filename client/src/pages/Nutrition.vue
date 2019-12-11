<template>
  <q-page class="fit" style="padding-right: 05vw; padding-left: 05vw; padding-bottom: 05vh; padding-top: 10vh">
    <div class="fit q-gutter-y-md">

      <div>
        <h5 class="text-accent q-my-none">Nutrition</h5>
      </div>

      <div>
        <q-bar class="bg-accent text-white q-mb-xs q-pl-lg xs shadow-2 rounded-borders">
          <div class="text-weight-bold text-uppercase">
            {{ user }}
          </div>
          <q-space />
          <q-tabs no-caps v-model="tab" shrink>
            <q-tab name="monday" label="Mon" />
            <q-tab name="tuesday" label="Tues" />
            <q-tab name="wednesday" label="Wed" />
            <q-tab name="thursday" label="Thurs" />
            <q-tab name="friday" label="Fri" />
            <q-tab name="friday" label="Sat" />
            <q-tab name="friday" label="Sun" />
          </q-tabs>
          <q-space />
        </q-bar>

        <q-bar class="bg-accent text-white q-mb-xs q-pl-lg gt-xs shadow-2 rounded-borders">
          <div class="text-weight-bold text-uppercase">
            {{ user }}
          </div>
          <q-space />
          <q-tabs no-caps v-model="tab" shrink>
            <q-tab name="monday" label="Monday" />
            <q-tab name="tuesday" label="Tuesday" />
            <q-tab name="wednesday" label="Wednesday" />
            <q-tab name="thursday" label="Thursday" />
            <q-tab name="friday" label="Friday" />
            <q-tab name="saturday" label="Saturday" />
            <q-tab name="sunday" label="Sunday" />
          </q-tabs>
          <q-space />
        </q-bar>
      </div>

      <div class="q-mt-none">
        <q-card>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="monday">
              <macros></macros>
            </q-tab-panel>
            <q-tab-panel name="tuesday">
              <macros></macros>
            </q-tab-panel>
            <q-tab-panel name="wednesday">
              <macros></macros>
            </q-tab-panel>
            <q-tab-panel name="thursday">
              <macros></macros>
            </q-tab-panel>
            <q-tab-panel name="friday">
              <macros></macros>
            </q-tab-panel>
            <q-tab-panel name="saturday">
              <macros></macros>
            </q-tab-panel>
            <q-tab-panel name="sunday">
              <macros></macros>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Nutrition",
  data () {
    return {
      tab: '',
      users: 'User'
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  components: {
    'macros': require('../components/MacrosCard').default
  }
}
</script>

<style scoped>

</style>