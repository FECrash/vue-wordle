<script setup lang="ts">
const keybord = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'icon'],
];
</script>

<template>
  <div class="flex flex-col min-h-full h-screen">
    <section class="items-center"></section>
    <section class="flex flex-col mt-auto items-center">
      <div v-for="(row, index) in keybord" :key="index" class="flex mx-0 mt-auto mb-2">
        <div
          v-for="(key, index2) in row"
          :key="index2"
          class="font-bold text-sm uppercase mr-2 border-solid border-gray-500 h-14 border-2 rounded-md flex justify-center items-center"
          :class="key.length > 1 ? 'w-[65px]' : 'w-[43px]'"
        >
          <template v-if="key === 'icon'">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path
                fill="#000000"
                d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
              ></path>
            </svg>
          </template>
          <template v-else>
            {{ key }}
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
