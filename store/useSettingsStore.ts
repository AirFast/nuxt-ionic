export const useSettingsStore = defineStore("settings", () => {
  const { locale, locales, setLocale } = useI18n();

  const langToggle = ref(false);

  const availableLocales = locales.value.map(({ code }) => code);
  const nextLangCode = computed(
    () =>
      availableLocales[
        availableLocales.indexOf(locale.value) + 1 === availableLocales.length
          ? 0
          : availableLocales.indexOf(locale.value) + 1
      ]
  );

  const toggleLangChange = () => {
    setLocale(nextLangCode.value);
  };

  return {
    nextLangCode,
    locale,
    langToggle,
    toggleLangChange,
  };
});
