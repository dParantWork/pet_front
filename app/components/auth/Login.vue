<script setup lang="ts">
import { ref } from 'vue'
import type { LoginForm } from '~/composables/user/userAuth.js'
import { useAuth } from '~/composables/user/userAuth.js'

const { t } = useI18n()
const { login } = useAuth()

const loginForm = ref<LoginForm>({
  email: '',
  password: ''
})

const handleSubmit = () => {
  // Logique de connexion factice (frontend uniquement)
  console.log('Login attempt:', loginForm.value.email, loginForm.value.password)
  login(loginForm.value)
}
</script>

<template>
  <!-- Main Form -->
  <form
    class="space-y-4"
    @submit.prevent="handleSubmit"
  >
    <div class="space-y-3 min-h-[170px] flDDDex flex-col justify-start">
      <div class="relative">
        <label
          class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-4"
          for="email"
        >
          {{ t('email') }}
        </label>
        <UInput
          id="email"
          v-model="loginForm.email"
          required
          icon="i-heroicons-envelope"
          placeholder="hello@sanctuary.com"
          type="email"
          size="lg"
          :ui="{
            base: 'bg-surface-container-high border-0 ring-0 outline-none focus:ring-2 focus:ring-primary/20 text-black rounded-full px-5 py-3'
          }"
          class="w-full shadow-none"
        />
      </div>

      <div class="relative">
        <div class="flex justify-between items-center mb-1 ml-4 mr-4">
          <label
            class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant"
            for="password"
          >
            {{ t('password') }}
          </label>
          <a
            class="text-[10px] font-semibold text-primary-container hover:text-primary transition-colors"
            href="#"
          >{{ t('forgot') }}</a>
        </div>
        <UInput
          id="password"
          v-model="loginForm.password"
          required
          icon="i-heroicons-lock-closed"
          placeholder="••••••••"
          type="password"
          size="lg"
          :ui="{
            base: 'bg-surface-container-high border-0 ring-0 outline-none focus:ring-2 focus:ring-primary/20 text-black rounded-full px-5 py-3'
          }"
          class="w-full shadow-none"
        />
      </div>
    </div>

    <UButton
      type="submit"
      block
      size="lg"
      class="rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-bold text-base py-3 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95 border-none"
    >
      {{ t('sign_in') }}
    </UButton>
  </form>
</template>

<style scoped lang="scss">

</style>
