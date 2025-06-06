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
    <section class="page-title-section"><h1>Online Campaign</h1></section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        전라북도 탄소산업
      </h2>
      <p class="portfolio-text-card">
        '대한민국을 먹여살릴 미래의 산업' 이란 점을 강조하고 인지시켜주는 것 가장 중요했습니다. 그래서 우리는 탄소산업이라는 조금은 거리감 있는 사업의 딱딱함을 해소하기 위해 귀여운 캐릭터를 활용하여 친근함을 구현하고, 대중들도 쉽게 이해하고 참여할 수 있는 퀴즈형식으로 온라인 이벤트를 진행하게 되었어요.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio03/27becf149c2b601dc3b342967ca6f52682030986.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        에이즈 바로알기
      </h2>
      <p class="portfolio-text-card">
        ‘슈어~와이낫!’으로 한창 인기였던 배정남 씨를 캐릭터로 만들어서, 에이즈라는 조금 어려운 주제를 재미있고 쉽게 풀어봤어요.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio03/89ce399188b66f7647d99a03a0b73eebde107ad1.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Mr.Smart
      </h2>
      <p class="portfolio-text-card">
        “당신의 미래가 궁금하세요?” 과거를 분석하고 미래를 설계하는 콘셉트로 진행한 ‘미스터 스마트’ 캠페인이에요. 이 캠페인으로 대한민국 광고대상 금상을 받았는데, 정말 큰 영광이었죠! 처음 맡은 큰 프로젝트라 심리적으로 부담도 컸지만, 좋은 결과가 나와서 정말 다행이었어요. 이 경험 덕분에 한 단계 성장할 수 있었던 뜻깊은 순간이었답니다.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio03/cce6cd9016f6059a0cd5750aa306003c3dbd3208.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio03/25b937866d954973385472c06b9f8e924fbfb693.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio03/c8ec711c252b1ddfc5fc176223e6bde115ba75e8.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio03/4a30a2c4e3bea68a26088a283197be45c75470d0.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio03/c625fe0c6e98f917388507a806dc10592e2f5af9.png" alt="Brand Identity Main Image 1"></div>
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