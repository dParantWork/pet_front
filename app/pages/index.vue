<script setup lang="ts">
import { ref } from 'vue'

const layout = 'auth'
const { t } = useI18n()

const mode = ref('login')
</script>

<template>
  <NuxtLayout :name="layout">
    <div class="w-full max-w-md z-10 transition-all">
      <!-- Form Header -->
      <div class="mb-6 text-center lg:text-left transition-all">
        <h1 class="text-3xl font-extrabold tracking-tight text-on-surface mb-2">
          {{ mode === 'login' ? t('welcome') : t('create_account') }}
        </h1>
        <p class="text-sm text-on-surface-variant">
          {{ mode === 'login' ? t('step_back') : t('join') }}
        </p>
      </div>

      <!-- Tab Switcher -->
      <div class="flex p-1 bg-surface-container-high rounded-full mb-6">
        <button
          type="button"
          :class="['flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all', mode === 'login' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface']"
          @click="mode = 'login'"
        >
          {{ t('sign_in') }}
        </button>
        <button
          type="button"
          :class="['flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all', mode === 'register' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface']"
          @click="mode = 'register'"
        >
          {{ t('create_account') }}
        </button>
      </div>

      <AuthLogin v-if="mode === 'login'" />
      <AuthRegister v-else />

      <!-- Divider -->
      <div class="relative my-8">
        <div
          aria-hidden="true"
          class="absolute inset-0 flex items-center"
        >
          <div class="w-full border-t border-outline-variant/30" />
        </div>
        <div class="relative flex justify-center text-xs">
          <span class="px-4 bg-surface text-on-surface-variant font-medium">{{ t('or_continue_with') }}</span>
        </div>
      </div>

      <!-- Social Logins -->
      <div class="grid grid-cols-2 gap-3">
        <UButton
          type="button"
          color="neutral"
          variant="solid"
          size="md"
          class="flex items-center justify-center gap-2 py-2 px-3 rounded-full border border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors group shadow-none active:scale-[0.98]"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            class="w-4 h-4 mr-2"
            alt="Google"
          >
          <span class="text-xs font-bold text-on-surface">Google</span>
        </UButton>
        <UButton
          type="button"
          color="neutral"
          variant="solid"
          size="md"
          class="flex items-center justify-center gap-2 py-2 px-3 rounded-full border border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors group shadow-none active:scale-[0.98]"
        >
          <img
            src="https://www.svgrepo.com/show/448239/apple.svg"
            class="w-4 h-4 mr-2"
            alt="Apple"
          >
          <span class="text-xs font-bold text-on-surface">Apple</span>
        </UButton>
      </div>

      <!-- Footer Text -->
      <div class="mt-8 text-center">
        <p class="text-[11px] text-on-surface-variant font-medium leading-relaxed">
          {{ t('by_continuing') }} <br>
          <a
            class="underline hover:text-primary decoration-primary-container/30 transition-all"
            href="#"
          >{{ t('terms') }}</a> {{ t('and') }}
          <a
            class="underline hover:text-primary decoration-primary-container/30 transition-all"
            href="#"
          >{{ t('privacy') }}</a>.
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
