<template>
  <div class="font-semibold my-4 text-lg md:text-3xl">
    {{ about }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  about: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>