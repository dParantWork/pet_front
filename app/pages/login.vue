<script setup>
import { ref } from 'vue'

const { t, locale, setLocale } = useI18n()

const mode = ref('login') // 'login' or 'register'

const email = ref('')
const password = ref('')

const lastName = ref('')
const firstName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')

const handleSubmit = () => {
  if (mode.value === 'login') {
    // Logique de connexion factice (frontend uniquement)
    console.log('Login attempt:', email.value, password.value)
    alert(`Connexion simulée pour ${email.value}`)
  } else {
    // Logique d'inscription factice (frontend uniquement)
    console.log('Register attempt:', firstName.value, lastName.value, registerEmail.value, registerPassword.value)
    alert(`Création de compte simulée pour ${firstName.value} ${lastName.value}`)
  }
}

const toggleLanguage = () => {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}
</script>

<template>
  <main class="flex min-h-screen relative">
    <!-- Language Switcher fixed to top-right corner -->
    <div class="fixed top-4 right-6 z-50 flex rounded-full overflow-hidden shadow-md border border-primary/30">
      <button
        @click="setLocale('fr')"
        :class="[
          'px-4 py-2 text-sm font-bold transition-all',
          locale === 'fr' ? 'bg-gradient-to-br from-primary to-primary-container text-white' : 'bg-white text-primary hover:bg-surface-container-low'
        ]"
      >FR</button>
      <button
        @click="setLocale('en')"
        :class="[
          'px-4 py-2 text-sm font-bold transition-all',
          locale === 'en' ? 'bg-gradient-to-br from-primary to-primary-container text-white' : 'bg-white text-primary hover:bg-surface-container-low'
        ]"
      >EN</button>
    </div>

    <!-- Left Section: Visual & Editorial Narrative -->
    <section class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface-container">
      <div class="absolute inset-0 z-0">
        <img alt="Elegant cat sitting in a sunlit conservatory" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA86U8ZHD0nZfL8tjFLJgHs_vnsWDBuCFhMAENxC8BY3z2Fuw-sra4htGBZKfzbVqvU82FAa_Udh9hRo9RVSQeQtxE-LgqPRkgHBc1tQPRha0iHk_s2KkvJEOjPnyQGxW231yVXKIVrcewoOhc5UQ4GWNC51UokY_rNXT1XbSlG2hcliV2yQlXnnjwII0PqrNq4WsS1r2QZ4F6QKIWs0nYtjQrgZMzu9rFeL-XQY-OZFBwuXaNoGuc42agdklX9A-51ErVgohlVE5o"/>
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-surface-container/60 via-transparent to-transparent"></div>
      </div>
      <div class="relative z-10 flex flex-col justify-between p-16 w-full">
        <div class="flex justify-between items-center">
          <span class="text-primary font-bold tracking-tighter text-3xl">{{ t('app_name') }}</span>
        </div>
        
        <div class="max-w-md bg-surface-container-lowest/80 backdrop-blur-md p-8 rounded-lg shadow-sm">
          <span class="material-symbols-outlined text-primary-container text-4xl mb-4" style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;">format_quote</span>
          <p class="text-2xl font-medium italic leading-snug tracking-tight text-on-surface mb-6">
            "{{ t('quote') }}"
          </p>
          <div class="flex items-center gap-4">
            <div class="h-10 w-10 rounded-full overflow-hidden bg-secondary-container">
              <img alt="Editorial Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq8s_UTPVdPpd_3eE4gSLYj5eCEKnF3kZ0YUDkF4py4w_m6a9KOWomj-zkEegRnmIXrTcKKuASV0FTF5NzUrrvQ-upt4RKS6AuX6wBYfl0SDMCGpOmK6HaIEKzGyylGrYJEBBXCwdeBGNwIcCwWdqBdqMiDzj1ETBuGzi7GTMnt9bPpjTOmhuOBjpwNMyNouf4V_rB8vPpqzUWCAtaUSZ-L_kcD5Gf0Z1efKmF6Wu9n4FOhQSy5zCBN8e1TIuESA1j8hzQ3Le0iBM"/>
            </div>
            <div>
              <p class="text-sm font-bold text-on-surface">{{ t('author') }}</p>
              <p class="text-xs text-on-surface-variant tracking-wider uppercase">{{ t('member') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Right Section: Authentication Form -->
    <section class="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12 bg-surface">
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
            @click="mode = 'login'"
            :class="['flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all', mode === 'login' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface']">
             {{ t('sign_in') }}
          </button>
          <button 
            type="button"
            @click="mode = 'register'"
             :class="['flex-1 py-2 px-4 rounded-full text-sm font-semibold transition-all', mode === 'register' ? 'bg-surface-container-lowest text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface']">
             {{ t('create_account') }}
          </button>
        </div>

        <!-- Main Form -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="space-y-3 min-h-[260px] flex flex-col justify-start">
            
            <template v-if="mode === 'register'">
              <div class="flex gap-4">
                <div class="relative flex-1">
                  <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-4" for="lastName">{{ t('last_name') }} <span class="text-red-500 ml-0.5">*</span></label>
                  <UInput v-model="lastName" required id="lastName" placeholder="Dupont" size="lg" :ui="{ rounded: 'rounded-full', base: 'bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 text-black', padding: { lg: 'px-5 py-3' } }" class="w-full shadow-none" />
                </div>
                <div class="relative flex-1">
                  <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-4" for="firstName">{{ t('first_name') }} <span class="text-red-500 ml-0.5">*</span></label>
                  <UInput v-model="firstName" required id="firstName" placeholder="Jean" size="lg" :ui="{ rounded: 'rounded-full', base: 'bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 text-black', padding: { lg: 'px-5 py-3' } }" class="w-full shadow-none" />
                </div>
              </div>
            </template>

            <div class="relative">
              <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-4" for="email">
                {{ t('email') }} <span v-if="mode === 'register'" class="text-red-500 ml-0.5">*</span>
              </label>
              <UInput v-if="mode === 'login'" v-model="email" required id="email" icon="i-heroicons-envelope" placeholder="hello@sanctuary.com" type="email" size="lg" :ui="{ rounded: 'rounded-full', base: 'bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 text-black', padding: { lg: 'px-5 py-3' } }" class="w-full shadow-none" />
              <UInput v-else v-model="registerEmail" required id="registerEmail" icon="i-heroicons-envelope" placeholder="hello@sanctuary.com" type="email" size="lg" :ui="{ rounded: 'rounded-full', base: 'bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 text-black', padding: { lg: 'px-5 py-3' } }" class="w-full shadow-none" />
            </div>
            
            <div class="relative">
              <div class="flex justify-between items-center mb-1 ml-4 mr-4">
                <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant" for="password">
                  {{ t('password') }} <span v-if="mode === 'register'" class="text-red-500 ml-0.5">*</span>
                </label>
                <a v-if="mode === 'login'" class="text-[10px] font-semibold text-primary-container hover:text-primary transition-colors" href="#">{{ t('forgot') }}</a>
              </div>
              <UInput v-if="mode === 'login'" v-model="password" required id="password" icon="i-heroicons-lock-closed" placeholder="••••••••" type="password" size="lg" :ui="{ rounded: 'rounded-full', base: 'bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 text-black', padding: { lg: 'px-5 py-3' } }" class="w-full shadow-none" />
              <UInput v-else v-model="registerPassword" required id="registerPassword" icon="i-heroicons-lock-closed" placeholder="••••••••" type="password" size="lg" :ui="{ rounded: 'rounded-full', base: 'bg-surface-container-high border-none focus:ring-2 focus:ring-primary/20 text-black', padding: { lg: 'px-5 py-3' } }" class="w-full shadow-none" />
            </div>
          </div>

          <UButton type="submit" block size="lg" class="rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-bold text-base py-3 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 border-none">
            {{ mode === 'login' ? t('sign_in') : t('create_account') }}
          </UButton>
        </form>

        <!-- Divider -->
        <div class="relative my-8">
          <div aria-hidden="true" class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-outline-variant/30"></div>
          </div>
          <div class="relative flex justify-center text-xs">
            <span class="px-4 bg-surface text-on-surface-variant font-medium">{{ t('or_continue_with') }}</span>
          </div>
        </div>

        <!-- Social Logins -->
        <div class="grid grid-cols-2 gap-3">
          <UButton color="white" variant="solid" size="md" class="flex items-center justify-center gap-2 py-2 px-3 rounded-full border border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors group shadow-none active:scale-[0.98]">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-4 h-4 mr-2" alt="Google" />
            <span class="text-xs font-bold text-on-surface">Google</span>
          </UButton>
          <UButton color="white" variant="solid" size="md" class="flex items-center justify-center gap-2 py-2 px-3 rounded-full border border-outline-variant/30 bg-surface hover:bg-surface-container-low transition-colors group shadow-none active:scale-[0.98]">
            <img src="https://www.svgrepo.com/show/448239/apple.svg" class="w-4 h-4 mr-2" alt="Apple" />
            <span class="text-xs font-bold text-on-surface">Apple</span>
          </UButton>
        </div>

        <!-- Footer Text -->
        <div class="mt-8 text-center">
          <p class="text-[11px] text-on-surface-variant font-medium leading-relaxed">
            {{ t('by_continuing') }} <br/>
            <a class="underline hover:text-primary decoration-primary-container/30 transition-all" href="#">{{ t('terms') }}</a> {{ t('and') }} 
            <a class="underline hover:text-primary decoration-primary-container/30 transition-all" href="#">{{ t('privacy') }}</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- Background Subtle Textures -->
    <div class="fixed top-0 right-0 -z-10 p-24 opacity-10 pointer-events-none">
      <span class="material-symbols-outlined text-[30rem] text-primary rotate-12" style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;">pets</span>
    </div>
  </main>
</template>
