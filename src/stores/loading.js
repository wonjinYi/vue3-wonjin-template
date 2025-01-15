import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useLoadingStore = defineStore("loading", () => {
  const isLoading = ref(null);
  const rIsLoading = computed(() => isLoading.value);

  function start() {
    isLoading.value = true;
  }
  function end() {
    isLoading.value = false;
  }

  return {
    rIsLoading,
    start,
    end,
  };
});

/*

[How to import and use this store in a component]

import { useLoadingStore } from "@/stores/loading.js";
const loadingStore = useLoadingStore();
const { rIsLoading } = storeToRef(loadingStore);

// Start loading
loadingStore.start();

// End loading
loadingStore.end();

// watch loading
watch(rIsLoading, (val) => {
  console.log("loading", val);
});

*/
