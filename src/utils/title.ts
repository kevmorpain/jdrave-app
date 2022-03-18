import { computed, Ref } from 'vue';

export const useFormattedTitle = (title: Ref<string>) =>
  computed<string>(() => {
    const titleWords = title.value.trim().split(/\s+/);
    const lastWord = titleWords.pop();

    return `${titleWords.join(' ')} <span>${lastWord}</span>`;
  });
