<template>
  <q-page class="fit row" style="padding-right: 05vw; padding-left: 05vw; padding-bottom: 05vw">
  <!-- <q-page class="flex flex-center"> -->

    <div class="fit col-12">
      <h5 class="text-accent q-mb-lg">Welcome {{ user.username }},</h5>
    </div>
    
    <img class="absolute-center" alt="Quasar logo" src="~assets/quasar-logo-full.svg" />

  </q-page>
</template>

<script>
import Api from "./../services/Api";
export default {
  name: "PageIndex",
  data() {
    return {
      user: {
        username: 'Ana'
      }
    }
  },
  methods: {
}
};
</script>
