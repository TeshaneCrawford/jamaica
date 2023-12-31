<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <ul>
    <li>
      <NuxtLink :to="to" :class="{ active: isActive }">
        {{ label }}
      </NuxtLink>
      <p v-if="description">{{ description }}</p>
    </li>
  </ul>
</template>

<style scoped></style>
