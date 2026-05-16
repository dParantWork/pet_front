<script setup>
const { t, locale, setLocale } = useI18n()

const navItems = computed(() => [
  { label: t('dash_nav_dashboard'), icon: 'i-lucide-layout-dashboard', to: '/dashboard', active: true },
  { label: t('dash_nav_pets'), icon: 'i-lucide-paw-print', to: '#' },
  { label: t('dash_nav_schedule'), icon: 'i-lucide-calendar', to: '#' },
  { label: t('dash_nav_health'), icon: 'i-lucide-stethoscope', to: '#' }
])

const pets = computed(() => [
  {
    name: 'Luna',
    breed: 'Golden Retriever',
    age: `4 ${t('dash_years')}`,
    status: t('dash_status_active'),
    statusColor: 'primary',
    bpm: 84,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADicPoKi7WDWpggzgBZf_iSoMVa9OKEBfgw2H3Icqk8R3-mVflARbX8xsK8AiQopids_GgO6ErssqeuO3MhxGBHq1Pbn_vEy-ZJQwS0qRAXeb8NeQ06ngXbxub0-P7yND849VVRC3mTW9TRR2EeRHpdu0PfAzZJXhhyurxUimj01s3xJtsb9PPY683Uo5eWADMiMKZACg3Oj24diUUKq1NxaBd0j_8MahWnqZxnhJa0ODnvJb8f8N-YYH6-jPPJDzOoXi43tAYXuM'
  },
  {
    name: 'Oliver',
    breed: 'Domestic Shorthair',
    age: `2 ${t('dash_years')}`,
    status: t('dash_status_resting'),
    statusColor: 'neutral',
    bpm: 120,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF9YyOKgA0g7L-VEVOeiSxniA2Kgv39wwe8EvbdOVPfaHZ_6Wq65bi1Uzu97JFR7MZcwVWkeFoW75QsF6JQsvlq8e0MkN3Xu7piM6we9BjPk28P9Fxo575s6_3ZhGxpB_uriI8f2eab0IeE5BJgkgYj8nt5xXZ05ilR6KzWSwpCMX5ewK9j_IJSyNlsClU_goojOX7gxW4HFH5o8FCWuAFwyd4P5wpWNEpPOF7SUNmA0tTEqjgsYN_NO1cMrmECLH6k5Ux7ZJA3LU'
  }
])

const dailyItems = computed(() => [
  { icon: 'i-lucide-footprints', iconBg: 'bg-primary-container', iconColor: 'text-white', title: t('dash_walk'), subtitle: t('dash_walk_time') },
  { icon: 'i-lucide-utensils', iconBg: 'bg-tertiary-container', iconColor: 'text-white', title: t('dash_fed'), subtitle: t('dash_fed_time') },
  { icon: 'i-lucide-pill', iconBg: 'bg-secondary-fixed-dim', iconColor: 'text-on-surface', title: t('dash_vitamins'), subtitle: t('dash_vitamins_time') }
])

const stats = computed(() => [
  { label: t('dash_avg_heart_rate'), value: '92', unit: 'BPM', trend: 'down', trendText: t('dash_vs_last_week', { pct: '2%' }) },
  { label: t('dash_daily_activity'), value: '4.2', unit: 'KM', trend: 'up', trendText: t('dash_vs_last_week_up', { pct: '12%' }) },
  { label: t('dash_weight_trends'), value: t('dash_stable'), unit: '', trend: 'neutral', trendText: t('dash_optimal_range') }
])
const settingsItems = computed(() => [
  [{
    label: t('dash_menu_account'),
    icon: 'i-lucide-user',
    onSelect: () => {}
  }],
  [{
    label: t('dash_menu_settings'),
    icon: 'i-lucide-settings',
    onSelect: () => {}
  }, {
    label: t('dash_menu_premium'),
    icon: 'i-lucide-star',
    onSelect: () => {}
  }],
  [{
    label: t('dash_logout'),
    icon: 'i-lucide-log-out',
    onSelect: () => navigateTo('/')
  }]
])
</script>

<template>
  <div class="bg-surface text-on-surface min-h-screen">

    <!-- SideNavBar (Desktop) -->
    <aside class="h-screen w-72 fixed left-0 top-0 hidden md:flex flex-col bg-surface-container-low p-6 space-y-8 z-40">
      <div class="flex items-center gap-3 px-2">
        <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <UIcon name="i-lucide-paw-print" class="text-white text-xl" />
        </div>
        <div>
          <h1 class="text-xl font-black text-on-surface">{{ t('app_name') }}</h1>
          <p class="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">{{ t('dash_pet_mgmt') }}</p>
        </div>
      </div>

      <nav class="flex-1 space-y-1">
        <NuxtLink
          v-for="item in navItems" :key="item.label"
          :to="item.to"
          :class="[
            'flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all',
            item.active
              ? 'bg-primary/10 text-primary'
              : 'text-on-surface hover:bg-surface-container hover:text-primary'
          ]"
        >
          <UIcon :name="item.icon" class="text-base flex-shrink-0" />
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="pt-6">
        <UButton
          icon="i-lucide-plus"
          :label="t('dash_add_pet')"
          block
          class="rounded-full py-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold shadow-lg border-none"
        />
      </div>

      <div class="space-y-1 pt-6 border-t border-outline-variant/10">
        <UButton icon="i-lucide-help-circle" :label="t('dash_support')" variant="ghost" color="neutral" block class="justify-start px-3 py-2 rounded-full text-xs uppercase tracking-widest !text-on-surface" />
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="md:ml-72 min-h-screen">
      <!-- TopAppBar -->
      <header class="w-full sticky top-0 z-30 flex justify-between items-center px-8 py-4 bg-surface border-b border-outline-variant/10">
        <div class="flex items-center gap-8">
          <span class="text-2xl font-bold text-primary tracking-tighter md:hidden">{{ t('app_name') }}</span>
          <div class="hidden md:flex items-center gap-6">
            <span class="text-primary font-semibold tracking-tight">{{ t('dash_overview') }}</span>
          </div>
        </div>
        <div class="flex items-center gap-3 pr-0">
          <!-- Language Switcher -->
          <div class="flex rounded-full overflow-hidden border border-primary/30 text-xs">
            <button
              @click="setLocale('fr')"
              :class="['px-3 py-1 font-bold transition-all', locale === 'fr' ? 'bg-gradient-to-br from-primary to-primary-container text-white' : 'bg-white text-primary hover:bg-surface-container-low']"
            >FR</button>
            <button
              @click="setLocale('en')"
              :class="['px-3 py-1 font-bold transition-all', locale === 'en' ? 'bg-gradient-to-br from-primary to-primary-container text-white' : 'bg-white text-primary hover:bg-surface-container-low']"
            >EN</button>
          </div>
          <UInput
            :placeholder="t('dash_search')"
            icon="i-lucide-search"
            size="sm"
            :ui="{ rounded: 'rounded-full', base: 'bg-surface-container-high border-0 ring-0' }"
            class="hidden sm:flex w-40 md:w-56 shadow-none"
          />
          <UButton icon="i-lucide-bell" variant="ghost" color="neutral" size="sm" class="rounded-full !text-on-surface" />
          <UDropdownMenu :items="settingsItems" :open-on-hover="true" :content="{ align: 'end' }">
            <UAvatar
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4MsB7f4ARRHrkO2sdFg-lrsDz-F9KaM3LtSqkRuCzhd0ndF28s4WC73UxwG_ApiGF1_CjAlqq50Mk0V6bpm6Hpqx-TOgZshNbicEcStlpBVHKqkMDWxbCaZETybpQwT30vFBmxYIS8SXIK824cSliLxiAldeD4Ig7irIjiMFsSTjJOeh3_6TT_A8ZrEXknr-cLDKATL6-I3B7E9C9yb0T7lx4DRNtakEJ4bXCi-4yaz2NVLRFni68i3234ZItHm_nAncMomLWaE8"
              size="sm"
              :ui="{ ring: 'ring-2 ring-primary-container' }"
              class="cursor-pointer"
            />
          </UDropdownMenu>
        </div>
      </header>

      <!-- Central Workspace -->
      <div class="p-8 md:p-12 space-y-12 max-w-7xl mx-auto">
        <!-- Hero -->
        <section class="space-y-4">
          <div class="flex items-center gap-4">
            <div class="h-[2px] w-12 bg-primary-container"></div>
            <span class="text-xs uppercase tracking-[0.2em] font-bold text-primary">{{ t('dash_morning') }}</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-tight">
            {{ t('dash_welcome_title') }}<br/><span class="text-primary">{{ t('dash_welcome_name') }}</span>
          </h2>
          <p class="text-lg text-on-surface-variant max-w-xl font-medium leading-relaxed opacity-80">
            {{ t('dash_welcome_subtitle') }}
          </p>
        </section>

        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <!-- Daily Overview -->
          <div class="md:col-span-4">
            <UCard :ui="{ body: 'p-8', root: 'bg-surface-container-low rounded-xl shadow-none border-0 ring-0' }">
              <template #header>
                <h3 class="text-xl font-bold tracking-tight px-3 pt-3">{{ t('dash_daily_overview') }}</h3>
              </template>

              <div class="space-y-6">
                <div v-for="item in dailyItems" :key="item.title" class="flex items-start gap-4">
                  <div :class="['w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center', item.iconBg]">
                    <UIcon :name="item.icon" :class="['text-lg', item.iconColor]" />
                  </div>
                  <div>
                    <p class="font-bold text-sm">{{ item.title }}</p>
                    <p class="text-xs text-on-surface-variant">{{ item.subtitle }}</p>
                  </div>
                </div>
              </div>

              <template #footer>
                <UButton :label="t('dash_view_journal')" variant="outline" color="neutral" block class="rounded-full border-outline-variant/30 mt-4" />
              </template>
            </UCard>
          </div>

          <!-- Pet Profiles Grid -->
          <div class="md:col-span-8 space-y-6">
            <div class="flex justify-between items-end">
              <h3 class="text-2xl font-bold tracking-tight">{{ t('dash_managed_pets') }}</h3>
              <UButton :label="t('dash_manage_all')" variant="link" color="primary" class="underline font-bold" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <UCard
                v-for="pet in pets" :key="pet.name"
                :ui="{ root: 'bg-surface-container-lowest rounded-lg shadow-none border-0 ring-0 hover:shadow-xl transition-all duration-500', body: 'p-6' }"
              >
                <div class="relative mb-6">
                  <img :alt="pet.name" :src="pet.img" class="w-full h-48 object-cover rounded-lg"/>
                  <UBadge
                    :label="pet.status"
                    :color="pet.statusColor"
                    variant="solid"
                    class="absolute top-4 right-4 rounded-full uppercase tracking-wider text-[10px]"
                  />
                </div>
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="text-xl font-bold">{{ pet.name }}</h4>
                    <p class="text-sm text-on-surface-variant">{{ pet.breed }} • {{ pet.age }}</p>
                  </div>
                  <UButton icon="i-lucide-arrow-right" variant="soft" color="neutral" size="sm" class="rounded-full" />
                </div>
                <div class="mt-4 pt-4 border-t border-outline-variant/10 flex items-center gap-4">
                  <div class="flex items-center gap-1 text-xs font-bold text-primary">
                    <UIcon name="i-lucide-check-circle" class="text-sm" />
                    {{ t('dash_healthy') }}
                  </div>
                  <div class="flex items-center gap-1 text-xs font-bold text-on-surface-variant">
                    <UIcon name="i-lucide-heart" class="text-sm" />
                    {{ pet.bpm }} BPM
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>

        <!-- Health Vitals -->
        <section class="space-y-8">
          <div class="flex items-center gap-4">
            <h3 class="text-2xl font-bold tracking-tight">{{ t('dash_health_vitals') }}</h3>
            <div class="h-[1px] flex-1 bg-outline-variant/20"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UCard
              v-for="stat in stats" :key="stat.label"
              :ui="{ root: 'bg-surface-container-high/50 rounded-xl shadow-none border-0 ring-0', body: 'p-8 flex flex-col justify-between h-48' }"
            >
              <div>
                <span class="text-xs uppercase font-bold tracking-widest text-on-surface-variant">{{ stat.label }}</span>
                <div class="flex items-baseline gap-2 mt-2">
                  <span class="text-4xl font-black">{{ stat.value }}</span>
                  <span v-if="stat.unit" class="text-sm font-bold text-on-surface-variant">{{ stat.unit }}</span>
                </div>
              </div>
              <div class="flex items-center gap-1 text-xs font-bold" :class="stat.trend === 'neutral' ? 'text-on-surface-variant' : 'text-primary'">
                <UIcon :name="stat.trend === 'up' ? 'i-lucide-trending-up' : stat.trend === 'down' ? 'i-lucide-trending-down' : 'i-lucide-minus'" class="text-sm" />
                {{ stat.trendText }}
              </div>
            </UCard>
          </div>
        </section>

        <!-- Editorial Quote -->
        <section class="border-l-4 border-primary pl-8 py-4 max-w-2xl">
          <p class="text-2xl md:text-3xl font-semibold text-on-surface leading-snug">
            "{{ t('dash_quote') }}"
          </p>
          <p class="mt-4 text-primary font-bold tracking-widest uppercase text-sm">— Konrad Lorenz</p>
        </section>
      </div>

      <!-- BottomNavBar (Mobile) -->
      <nav class="fixed bottom-0 left-0 right-0 bg-surface md:hidden flex justify-around py-4 z-50 shadow-[0_-4px_24px_rgba(27,28,25,0.04)]">
        <UButton
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          :icon="item.icon"
          :label="item.label"
          :color="item.active ? 'primary' : 'neutral'"
          :variant="item.active ? 'soft' : 'ghost'"
          orientation="vertical"
          size="xs"
          class="flex flex-col items-center text-[10px] uppercase tracking-tighter"
        />
      </nav>
    </main>
  </div>
</template>
