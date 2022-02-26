<script setup lang="ts">
import { toRefs, defineProps } from 'vue';
/**
 * 런타임 시점에 타입이 정해지므로
 * 외부에 정의 된 타입 파일을 import해서 사용할 수 없음(컴파일 때 사라짐😭)
 */
// import { GameboardRowEntity } from 'wordle';

const props = defineProps<{
  row: number;
  inputKeyword: string;
}>();
const { inputKeyword } = toRefs(props);
</script>
<template>
  <div
    v-for="(key, index2) in inputKeyword.split('')"
    :key="'p' + index2"
    class="w-[62px] h-[62px] bg-[#787c7e] uppercase inline-flex items-center justify-center text-white text-[2rem] font-bold leading-8 box-border"
  >
    {{ key }}
  </div>
</template>
