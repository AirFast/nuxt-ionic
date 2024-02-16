<script setup lang="ts">
import { useSettingsStore } from "~/store/useSettingsStore";

const router = useRouter();
const localePath = useLocalePath();

const settingsStore = useSettingsStore();
</script>

<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ $t("menu.title") }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item button @click="router.push(localePath('/'))">
        {{ $t("menu.home") }}
      </ion-item>
      <ion-item button @click="router.push(localePath('/settings'))">
        {{ $t("menu.settings") }}
      </ion-item>
      <ion-item>
        <ion-toggle
          label-placement="end"
          :title="`${$t('switchTo')} ${$t(settingsStore.nextLangCode)}`"
          :checked="settingsStore.langToggle"
          @ionChange="settingsStore.toggleLangChange"
        >
          {{ $t("switchTo") }} {{ $t(settingsStore.nextLangCode) }}
        </ion-toggle>
      </ion-item>
      <ion-item>
        <p>{{ $t("currentLanguage") }} {{ $t(settingsStore.locale) }}</p>
      </ion-item>
    </ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $t("menu.title") }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid :fixed="true">
        <ion-row>
          <ion-col>
            <slot />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
