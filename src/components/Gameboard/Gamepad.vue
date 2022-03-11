<script setup lang="ts">
import { StoreStateProps } from '@/store';
import { toRefs, defineProps, watch } from 'vue';
import { useStore } from 'vuex';
const store = useStore<StoreStateProps>();
/**
 * 런타임 시점에 타입이 정해지므로
 * 외부에 정의 된 타입 파일을 import해서 사용할 수 없음(컴파일 때 사라짐😭)
 */
// import { GameboardRowEntity } from 'wordle';
const props = defineProps<{
  row: number;
  input: { letter: string; state: 'out' | 'ball' | 'strike' | 'none' }[];
  items: any;
}>();
//const { input } = toRefs(props);
const rowKeywords = toRefs(props).input.value;

const stateBgColor = {
  strike: 'bg-[#6aaa64]',
  ball: 'bg-[#c9b458]',
  out: 'bg-[#787c7e]',
  none: 'bg-[#ffffff]',
};

store.subscribe((_, state) => console.log(state));

const setBgColor = (state: 'out' | 'ball' | 'strike' | 'none') => {
  return stateBgColor[state];
};

watch(
  () => props.input[2].letter,
  () => console.log('watch'),
);
</script>
<template>
  <div
    v-for="({ letter, state }, index2) in rowKeywords"
    :key="'p' + index2"
    class="w-[62px] h-[62px] bg-[#787c7e] border-2 border-solid border-[#d3d6da] uppercase inline-flex items-center justify-center text-white text-[2rem] font-bold leading-8 box-border transition-transform"
    :class="setBgColor(state)"
  >
    {{ letter }}
  </div>
</template>
