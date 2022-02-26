<script setup lang="ts">
const problem = [
  ['W', 'O', 'R', 'L', 'D'],
  ['A', 'P', 'P', 'L', 'E'],
  ['F', 'I', 'G', 'H', 'T'],
  ['U', 'P', 'S', 'E', 'T'],
  ['P', 'R', 'E', 'S', 'S'],
  ['P', 'I', 'L', 'L', 'S'],
];

const keybord = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'icon'],
];
</script>

<template>
  <div class="flex flex-col min-h-full h-screen">
    <header class="flex flex-row justify-between items-center h-[50px] px-4 border-b-[1px]">
      <div class="flex justify-around item-center">
        <button class="px-1">
          <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.172974" width="20" height="3" rx="1.5" fill="#000000"></rect>
            <rect x="0.172974" y="7" width="20" height="3" rx="1.5" fill="#000000"></rect>
            <rect x="0.172974" y="14" width="20" height="3" rx="1.5" fill="#000000"></rect>
          </svg>
        </button>
        <button class="px-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path
              fill="#000000"
              d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="font-bold text-3xl right-0 left-0">Wordle</div>
      <div class="flex justify-around item-center">
        <button class="px-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path
              fill="#000000"
              d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
            ></path>
          </svg>
        </button>
        <button class="px-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path
              fill="#000000"
              d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
            ></path>
          </svg>
        </button>
      </div>
    </header>
    <main class="w-100 m-auto h-[calc(100%-50px)] flex flex-col">
      <section class="flex flex-col justify-center items-center flex-grow">
        <div class="w-[350px] h-[420px] grid grid-rows-[repeat(6,1fr)] gap-[5px] p-[10px] box-border">
          <div v-for="(row, index) in problem" :key="'p' + index" class="grid grid-cols-[repeat(5,1fr)] gap-[5px]">
            <div
              v-for="(key, index2) in row"
              :key="'p' + index2"
              class="w-[62px] h-[62px] bg-[#787c7e] uppercase inline-flex items-center justify-center text-white text-[2rem] font-bold leading-8 box-border"
            >
              {{ key }}
            </div>
          </div>
        </div>
      </section>
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
    </main>
  </div>
</template>

<style></style>
