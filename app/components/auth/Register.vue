<script lang="ts" setup>
import { ref } from 'vue'
import {type RegisterForm, useAuth} from '~/composables/user/userAuth.js'

const { t } = useI18n()
const { register } = useAuth()

const registerForm = ref<RegisterForm>({
  firstname: '',
  lastname: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  // Logique d'inscription factice (frontend uniquement)
  console.log('Register attempt:', registerForm.value.firstname,
    registerForm.value.lastname,
    registerForm.value.email,
    registerForm.value.password)
  register(registerForm.value)
}
</script>

<template>
  <!-- Main Form -->
  <form
    class="space-y-4"
    @submit.prevent="handleSubmit"
  >
    <div class="space-y-3 min-h-[170px] flex flex-col justify-start">
      <div class="flex gap-4">
        <div class="relative flex-1">
          <label
            class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-4"
            for="lastName"
          >{{ t('last_name') }} <span class="text-red-500 ml-0.5">*</span></label>
          <UInput
            id="lastName"
            v-model="registerForm.lastname"
            required
            placeholder="Dupont"
            size="lg"
            :ui="{
              base: 'bg-surface-container-high border-0 ring-0 outline-none focus:ring-2 focus:ring-primary/20 text-black rounded-full px-5 py-3'
            }"
            class="w-full shadow-none"
          />
        </div>
        <div class="relative flex-1">
          <label
            class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-4"
            for="firstName"
          >{{ t('first_name') }} <span class="text-red-500 ml-0.5">*</span></label>
          <UInput
            id="firstName"
            v-model="registerForm.firstname"
            required
            placeholder="Jean"
            size="lg"
            :ui="{
              base: 'bg-surface-container-high border-0 ring-0 outline-none focus:ring-2 focus:ring-primary/20 text-black rounded-full px-5 py-3'
            }"
            class="w-full shadow-none"
          />
        </div>
      </div>

      <div class="relative">
        <label
          class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-4"
          for="email"
        >
          {{ t('email') }}
          <span
            class="text-red-500 ml-0.5"
          >*</span>
        </label>
        <UInput
          id="registerEmail"
          v-model="registerForm.email"
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
            <span
              class="text-red-500 ml-0.5"
            >*</span>
          </label>
        </div>
        <UInput
          id="registerPassword"
          v-model="registerForm.password"
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
      {{ t('create_account') }}
    </UButton>
  </form>
</template>

<style lang="scss" scoped>

</style>
