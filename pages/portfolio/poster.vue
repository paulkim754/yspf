<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="main-container">
    <div class="close-area">
      <a @click="router.back()">
        <span style="font-size: 18px;">Close</span>
        <Icon name="material-symbols:close" size="32" />
      </a>
    </div>
    <section class="page-title-section"><h1>Poster</h1></section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        청문청답
      </h2>
      <p class="portfolio-text-card">
        산림청이 주관한 ‘청문청답’ 토크콘서트 포스터 디자인이에요. 산림청에서 시안을 정말 마음에 들어 해주셔서, 타이틀 디자인을 실제 조형물로까지 제작했답니다. 포스터 작업이 현실로 확장된 멋진 경험이었어요.
      </p>
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio07/b7ec90450b910ebce3a97a33a84e4225eb90119b.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio07/3f42ff69b0020350dba69efe92b3f35eeefbc7f6.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio07/d8c3b81fc77d90bd1f9faf862a0e74eaae0a3374.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio07/6e32008880e8acdb3ba5cdf4bb9bc0c5c1b07527.png" alt="Brand Identity Main Image 1"></div>
    </section>

  </div>
</template>
<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff; /* From style_1 of root node */
}

img.image-container  {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
}

.main-container {
  width: 100%;
  margin: 0 auto;
  position: relative; 
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 80px;
  padding-bottom: 80px;
  box-sizing: border-box;
}

.close-area {
  position: sticky;
  width: 100%;
  top: 0px;
  right: 5px;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  background-color: #ffffff;
}

.close-area a {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.page-title-section {
  background-color: #052526;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding-top: 96px;
  padding-bottom: 96px;
  border-radius: 32px;
  width: 100%;
  max-width: 1216px;
  box-sizing: border-box;
}

.page-title-section h1 {
  color: #a4e9eb;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 64px;
  line-height: 96px;
  letter-spacing: -2px;
  text-align: center;
}

.content-section {
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1216px; /* Content width within the 1280px container */
  margin: 128px 0;
}

.portfolio-text-card {
  width: 50%;
}

h2.portfolio-text-card  {
  color: #073e40;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -2px;
    text-align: left;
    white-space: pre-line;
}

p.portfolio-text-card {
  color: #073e40;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.5px;
    text-align: left;
}

.banner-section {
  max-width: 1216px;
  width: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 32px;
}

.image-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
  max-width: 1216px;
}
.image-item {
  flex: 0 1 calc(50% - 16px);
  box-sizing: border-box;
}
.image-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 32px;
  border: 1px solid #d4d4d4;
}
@media (max-width: 768px) {
  .image-item {
    flex: 0 1 100%;
  }
}

.image-row-3 {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
  max-width: 1216px;
}
.image-item-3 {
  flex: 0 1 calc(33.333% - 16px);
  box-sizing: border-box;
}
.image-item-3 img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 32px;
  border: 1px solid #d4d4d4;
}
@media (max-width: 1024px) {
  .image-item-3 {
    flex: 0 1 calc(50% - 16px);
  }
}
@media (max-width: 768px) {
  .image-item-3 {
    flex: 0 1 100%;
  }
}
</style>