<!-- pages/[...app].vue -->

<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { ref } from 'vue';

const route = useRoute();

// TO DO: Add your Public API Key here
const apiKey = "103c08a744764560ae9a5484e4b30ddf";
const canShowContent = ref(false);
const model = 'page';

const { data: content } = await useAsyncData('builderData', () =>
  fetchOneEntry({
    model,
    apiKey,
    userAttributes: {
      urlPath: route.path,
    },
  })
);

canShowContent.value = content.value ? true : isPreviewing(route.path);
</script>

<template>
  <div v-if="canShowContent">
    <Content :api-key="apiKey" :model="model" :content="content" />
  </div>
  <div v-else>Content not Found</div>
</template>