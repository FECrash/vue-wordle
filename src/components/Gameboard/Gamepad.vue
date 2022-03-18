<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  row: number;
  input: { letter: string; state: 'out' | 'ball' | 'strike' | 'none' }[];
}>();

const stateBgColor = {
  strike: 'bg-[#6aaa64] text-white',
  ball: 'bg-[#c9b458] text-white',
  out: 'bg-[#787c7e] text-white',
  none: 'bg-[#ffffff]',
};
</script>
<template>
  <div
    v-for="({ letter, state }, index2) in input"
    :key="'p' + index2"
    class="w-[62px] h-[62px] bg-[#787c7e] border-2 border-solid border-[#d3d6da] uppercase inline-flex items-center justify-center text-[2rem] font-bold leading-8 box-border transition-transform"
    :class="stateBgColor[state]"
  >
    {{ letter }}
  </div>
</template>
