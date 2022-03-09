<script setup lang="ts">
import Gamepad from './Gamepad.vue';
const problem = ['WORLD', 'APPLE', 'FIGHT', 'UPSET', 'PRESS', 'PILLS'];
</script>
<template>
  <section class="flex flex-col justify-center items-center flex-grow">
    <div class="w-[350px] h-[420px] grid grid-rows-[repeat(6,1fr)] gap-[5px] p-[10px] box-border">
      <!-- TODO: 여기를 row 컴포넌트로 분리하는 것이 좋은가? -->
      <div v-for="(row, index) in problem" :key="'p' + index" class="grid grid-cols-[repeat(5,1fr)] gap-[5px]">
        <Gamepad :row="index" :input-keyword="row" />
      </div>
    </div>
  </section>
</template>
