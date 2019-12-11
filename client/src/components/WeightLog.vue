<template>
  <tr>
    <!-- Column Day/Week -->
    <td class="text-center" :class="boldTrue ? 'text-bold' : 'none'">
      {{ day }}
    </td>

    <!-- Column This Week -->
    <td class="text-center" :class="boldTrue ? 'text-bold' : 'none'">
      {{ weight.thisWeek.dayWeight }}
      </td>

    <!-- Column Last Week -->
    <td class="text-center" :class="boldTrue ? 'text-bold' : 'none'">
      {{ weight.lastWeek.dayWeight }}
    </td>

    <!-- Column 2 Weeks Ago -->
    <td class="text-center" :class="boldTrue ? 'text-bold' : 'none'">
      {{ weight.twoWeeks.dayWeight }}
    </td>

    <!-- Column 3 Weeks Ago -->
    <td class="text-center" :class="boldTrue ? 'text-bold' : 'none'">
      {{ weight.threeWeeks.dayWeight }}
    </td>

  </tr>
</template>

<script>
export default {
  props: [
    'day', 'boldTrue'
  ],
  data () {
    return {
      user: '',
      weight: {
        thisWeek: {
          dayWeight: ''
        },
        lastWeek: {
          dayWeight: ''
        },
        twoWeeks: {
          dayWeight: ''
        },
        threeWeeks: {
          dayWeight: ''
        }
      }
    }
  }
}
</script>

<style scoped>

</style>