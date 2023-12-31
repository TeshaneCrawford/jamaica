<script lang="ts" setup>
const { footerLinks } = useNavigation();
</script>

<template>
  <div>
    <footer>
      <p>
        Copyright reserved &copy; {{ new Date().getFullYear() }} Jamaica
      </p>
    </footer>
  </div>
</template>

<style scoped></style>
