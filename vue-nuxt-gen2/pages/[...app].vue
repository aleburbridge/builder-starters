<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue';
import { ref, onMounted } from 'vue';

const route = useRoute();
const apiKey = "18f4bfa5c3f84662ab0f37aab777721a";
const canShowContent = ref(false);
const content = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const result = await fetchOneEntry({
      model: 'page',
      apiKey,
      userAttributes: {
        urlPath: route.path,
      },
      options: {
        noTargeting: false,
        includeRefs: true,
      }
    });
    
    content.value = result;
    canShowContent.value = !!result || isPreviewing(route.path);
  } catch (error) {
    console.error('Error fetching Builder content:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="canShowContent">
    <Content :api-key="apiKey" :model="'page'" :content="content" />
  </div>
  <div v-else>Content not Found</div>
</template>


