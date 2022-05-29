<template>
  <svg
    width="72"
    height="83"
    viewBox="0 0 72 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.4683 1.09177L1.97467 22.4778M36.4683 1.09177L70.962 22.4778M36.4683 1.09177V15.5791M1.97467 22.4778V60.4209M1.97467 22.4778L36.4683 15.5791M1.97467 22.4778L15.0823 54.212M1.97467 60.4209L36.4683 81.1171M1.97467 60.4209L15.0823 54.212M36.4683 81.1171L70.962 60.4209M36.4683 81.1171L15.0823 54.212M36.4683 81.1171L57.1645 54.212M70.962 60.4209V22.4778M70.962 60.4209L57.1645 54.212M70.962 22.4778L57.1645 54.212M70.962 22.4778L36.4683 15.5791M36.4683 15.5791L15.0823 54.212M36.4683 15.5791L57.1645 54.212M15.0823 54.212H57.1645"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="stroke-current stroke-2"
    />
    <text
      xml:space="preserve"
      class="text-2xl fill-current font-secondary font-bold whitespace-pre"
    >
      <tspan x="21.7236" y="48.8472">{{ result }}</tspan>
    </text>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  result: string;
}>();
</script>
