<script setup lang="ts">
import Gameboard from './Gameboard/Gameboard.vue';
import Keyboard from './Keyboard/Keyboard.vue';
</script>
<template>
  <main class="w-100 m-auto h-[calc(100%-50px)] flex flex-col">
    <Gameboard />
    <Keyboard />
  </main>
</template>
