<script setup lang="ts">
import Keypad from './Keypad.vue';
import { keyboard } from '@/constants';
</script>
<template>
  <section class="flex flex-col mt-auto items-center">
    <!-- TODO: 여기를 row 컴포넌트로 분리하는 것이 좋은가? -->
    <div v-for="(row, index) in keyboard" :key="index" class="flex mx-0 mt-auto mb-2">
      <Keypad :keyboard-row="row" />
    </div>
  </section>
</template>
