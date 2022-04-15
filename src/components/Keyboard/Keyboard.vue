<script setup lang="ts">
import Keypad from './Keypad.vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
import { cloneDeep } from 'lodash';

const store = useStore();
const items = ref<{ letter: string; state: 'out' | 'ball' | 'strike' | 'none' }[][]>(store.state.keyboard);

store.subscribe((_, state) => {
  const cloned = cloneDeep(state.keyboard);
  items.value = cloned;
});
</script>
<template>
  <section class="flex flex-col mt-auto items-center">
    <div v-for="(row, index) in items" :key="index" class="flex mx-0 mt-auto mb-2">
      <Keypad :keyboard-row="row" />
    </div>
  </section>
</template>
