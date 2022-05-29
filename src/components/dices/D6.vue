<template>
  <svg
    width="71"
    height="58"
    viewBox="0 0 71 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10.06V55.6994C1 56.2516 1.44772 56.6994 2 56.6994H49.6969M1 10.06H49.6969M1 10.06L21.1042 1.58797C21.2271 1.53618 21.3591 1.50949 21.4925 1.50949H69.9873M49.6969 56.6994V10.06M49.6969 56.6994L69.3757 48.4066C69.7463 48.2504 69.9873 47.8873 69.9873 47.4851V1.50949M49.6969 10.06L69.9873 1.50949"
      stroke-linejoin="round"
      class="stroke-current stroke-2"
    />
    <text
      xml:space="preserve"
      class="text-2xl fill-current font-secondary font-bold whitespace-pre"
    >
      <tspan x="16.0478" y="39.6067">{{ result }}</tspan>
    </text>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  result: string;
}>();
</script>
