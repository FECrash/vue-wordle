<script setup lang="ts">
import Gamepad from './Gamepad.vue';
import { useStore } from 'vuex';
import { StoreStateProps } from '@/store';
import { ref } from 'vue';
import { cloneDeep } from 'lodash';

const store = useStore<StoreStateProps>();
const items = ref<{ letter: string; state: 'out' | 'ball' | 'strike' | 'none' }[][]>(store.state.gameboard);

store.subscribe((_, state) => {
  const cloned = cloneDeep(state.gameboard);
  items.value = cloned;
});
</script>
<template>
  <section class="flex flex-col justify-center items-center flex-grow">
    <div class="w-[350px] h-[420px] grid grid-rows-[repeat(6,1fr)] gap-[5px] p-[10px] box-border">
      <div v-for="(row, index) in items" :key="'p' + index" class="grid grid-cols-[repeat(5,1fr)] gap-[5px]">
        <Gamepad :row="index" :input="row" />
      </div>
    </div>
  </section>
</template>
