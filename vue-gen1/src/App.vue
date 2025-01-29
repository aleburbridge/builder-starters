<script setup lang="ts">
import type { BuilderContent } from '@builder.io/sdk-vue';
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { onMounted, ref } from 'vue';

const content = ref<BuilderContent | null>(null);
// Add your Public API Key below
const apiKey = 'd4173130c72d466386720bb5a107ae34';
const canShowContent = ref(false);
const model = 'vue-page';

onMounted(async () => {
  content.value = await fetchOneEntry({
    model,
    apiKey,
    userAttributes: {
      urlPath: window.location.pathname,
    },
  });
  canShowContent.value = content.value ? true : isPreviewing();
});
</script>

<template>
  <Content
    v-if="canShowContent"
    :model="model"
    :content="content"
    :api-key="apiKey"
  />
  <div v-else>Content not Found</div>
</template>