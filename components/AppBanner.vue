<script lang="ts" setup>
const props = defineProps<{
  id: number
  to: string
}>();

const id = `hide-app-banner-${props.id}`;

const hideAppBanner = () => {
  localStorage.setItem(id, 'true');

  document.querySelector(`html`)?.classList.add(`hide-app-banner`);
};

if (process.server) {
  useHead({
    script: [
      {
        key: 'prehydrate-template-banner',
        innerHTML: `
            if (localStorage.getItem('${id}') === 'true') {
              document.querySelector('html').classList.add('hide-app-banner')
            }`.replace(/\s+/g, ' '),
        type: 'text/javascript'
      }
    ]
  })
}
</script>

<template>
  <NuxtLink :to="to" target="_blank" class="">
    <div class="">
      <slot />
    </div>

    <button></button>
  </NuxtLink>
</template>

<style scoped>
  .hide-app-banner {
    .app-banner {
      display: none;
    }
  }
</style>
