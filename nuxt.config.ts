import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: '2025 포트폴리오 김양수',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        // ... 기존 meta 태그가 있다면 여기에 추가 ...
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Knewave&family=Poppins:wght@400;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard.min.css'
        }
      ]
    }
  },

  modules: ['@nuxt/image', '@element-plus/nuxt', '@nuxt/icon'],

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})