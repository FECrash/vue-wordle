<script setup lang="ts">
import Gameboard from './Gameboard/Gameboard.vue';
import Keyboard from './Keyboard/Keyboard.vue';
import words from '../words';

console.log(words({ exactly: 1, maxLength: 5 }));
</script>
<template>
  <main class="w-100 m-auto h-[calc(100%-50px)] flex flex-col">
    <Gameboard />
    <Keyboard />
  </main>
</template>
