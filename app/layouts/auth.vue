<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex min-h-screen relative">
      <!-- Language Switcher fixed to top-right corner -->
      <div class="fixed top-4 right-6 z-50 flex rounded-full overflow-hidden shadow-md border border-primary/30">
        <button
          :class="[
            'px-4 py-2 text-sm font-bold transition-all',
            locale === 'fr' ? 'bg-gradient-to-br from-primary to-primary-container text-white' : 'bg-white text-primary hover:bg-surface-container-low'
          ]"
          @click="setLocale('fr')"
        >
          FR
        </button>
        <button
          :class="[
            'px-4 py-2 text-sm font-bold transition-all',
            locale === 'en' ? 'bg-gradient-to-br from-primary to-primary-container text-white' : 'bg-white text-primary hover:bg-surface-container-low'
          ]"
          @click="setLocale('en')"
        >
          EN
        </button>
      </div>

      <!-- Left Section: Visual & Editorial Narrative -->
      <section class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface-container">
        <div class="absolute inset-0 z-0">
          <img
            alt="Elegant cat sitting in a sunlit conservatory"
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86U8ZHD0nZfL8tjFLJgHs_vnsWDBuCFhMAENxC8BY3z2Fuw-sra4htGBZKfzbVqvU82FAa_Udh9hRo9RVSQeQtxE-LgqPRkgHBc1tQPRha0iHk_s2KkvJEOjPnyQGxW231yVXKIVrcewoOhc5UQ4GWNC51UokY_rNXT1XbSlG2hcliV2yQlXnnjwII0PqrNq4WsS1r2QZ4F6QKIWs0nYtjQrgZMzu9rFeL-XQY-OZFBwuXaNoGuc42agdklX9A-51ErVgohlVE5o"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface" />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-container/60 via-transparent to-transparent" />
        </div>
        <div class="relative z-10 flex flex-col justify-between p-16 w-full">
          <div class="flex justify-between items-center">
            <span class="text-primary font-bold tracking-tighter text-3xl">{{ t('app_name') }}</span>
          </div>

          <div class="max-w-md bg-surface-container-lowest/80 backdrop-blur-md p-8 rounded-lg shadow-sm">
            <span
              class="material-symbols-outlined text-primary-container text-4xl mb-4"
              style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;"
            >format_quote</span>
            <p class="text-2xl font-medium italic leading-snug tracking-tight text-on-surface mb-6">
              "{{ t('quote') }}"
            </p>
            <div class="flex items-center gap-4">
              <div class="h-10 w-10 rounded-full overflow-hidden bg-secondary-container">
                <img
                  alt="Editorial Portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq8s_UTPVdPpd_3eE4gSLYj5eCEKnF3kZ0YUDkF4py4w_m6a9KOWomj-zkEegRnmIXrTcKKuASV0FTF5NzUrrvQ-upt4RKS6AuX6wBYfl0SDMCGpOmK6HaIEKzGyylGrYJEBBXCwdeBGNwIcCwWdqBdqMiDzj1ETBuGzi7GTMnt9bPpjTOmhuOBjpwNMyNouf4V_rB8vPpqzUWCAtaUSZ-L_kcD5Gf0Z1efKmF6Wu9n4FOhQSy5zCBN8e1TIuESA1j8hzQ3Le0iBM"
                >
              </div>
              <div>
                <p class="text-sm font-bold text-on-surface">
                  {{ t('author') }}
                </p>
                <p class="text-xs text-on-surface-variant tracking-wider uppercase">
                  {{ t('member') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Right Section: Authentication Forms -->
      <section class="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12 bg-surface">
        <slot />
      </section>

      <!-- Background Subtle Textures -->
      <div class="fixed top-0 right-0 -z-10 p-24 opacity-10 pointer-events-none">
        <span
          class="material-symbols-outlined text-[30rem] text-primary rotate-12"
          style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;"
        >pets</span>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>

</style>
