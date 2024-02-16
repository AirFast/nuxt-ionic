<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});

const htmlAttrs = computed(() => head.value.htmlAttrs!);
</script>

<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <DefaultPage>
      <slot />
    </DefaultPage>

    <!-- <Footer /> -->
  </Html>
</template>
