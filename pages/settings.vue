<script setup lang="ts">
const { t } = useI18n();

const actionSheetButtons = [
  {
    text: t("settings.delete"),
    role: "destructive",
    data: {
      action: "delete",
    },
  },
  {
    text: t("settings.share"),
    data: {
      action: "share",
    },
  },
  {
    text: t("settings.cancel"),
    role: "cancel",
    data: {
      action: "cancel",
    },
  },
];
</script>

<template>
  <h1>{{ $t("menu.settings") }}</h1>

  <ion-input
    :label="$t('settings.username')"
    label-placement="floating"
    :counter="true"
    :maxlength="20"
  />

  <ion-input
    :label="$t('settings.password')"
    label-placement="floating"
    :counter="true"
    :maxlength="20"
  />

  <ion-input
    :label="$t('settings.email')"
    label-placement="floating"
    :counter="true"
    :maxlength="20"
  />

  <ion-button id="open-action-sheet">
    {{ $t("settings.manageDataBtn") }}
  </ion-button>
  <ion-action-sheet
    trigger="open-action-sheet"
    :header="$t('settings.actions')"
    :buttons="actionSheetButtons"
  />
</template>
