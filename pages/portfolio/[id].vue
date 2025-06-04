<script setup>
const route = useRoute()
const portfolioId = route.params.id

// 포트폴리오 데이터를 가져오는 로직을 여기에 구현
const portfolio = ref(null)

// 실제 구현에서는 API나 데이터베이스에서 데이터를 가져올 수 있습니다
onMounted(() => {
  // 예시 데이터
  portfolio.value = {
    title: 'Portfolio Title',
    description: 'Portfolio description goes here...',
    images: [],
    details: {}
  }
})
</script>

<template>
  <div class="portfolio-detail">
    <h1>{{ portfolio?.title }}</h1>
    <div class="portfolio-content">
      <p>{{ portfolio?.description }}</p>
      <!-- 포트폴리오 상세 내용을 여기에 구현 -->
    </div>
  </div>
</template>

<style scoped>
.portfolio-detail {
  padding: 2rem;
}

.portfolio-content {
  margin-top: 2rem;
}
</style> 