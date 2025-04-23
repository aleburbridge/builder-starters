<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { ref, onMounted } from 'vue';

const route = useRoute();
const apiKey = "YOUR_API_KEY";
const canShowContent = ref(false);
const model = 'page';

console.log("hey are we even reaching this page?")
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

