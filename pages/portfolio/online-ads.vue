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
    <section class="page-title-section"><h1>Online Ads    </h1></section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        OK! 캠페인
      </h2>
      <p class="portfolio-text-card">
        OK 저축은행의 톤앤매너를 잘 살리면서, 다양한 컨셉의 광고 디자인 작업을 진행했어요. 브랜드 이미지에 맞게 깔끔하고 신뢰감 있게 표현하였어요.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio05/f07c3c31d96db5aa11da8eb5b833a1600bfd2454.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row-3">
      <div class="image-item-3"><img class="image-container" src="/images/portfolio05/84c6eb165b1a10d00157d15520e860259c778949.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item-3"><img class="image-container" src="/images/portfolio05/9d976f4b7e22ab27403911297ceffeebd0a98e90.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item-3"><img class="image-container" src="/images/portfolio05/f1e922026c1b55a6af195d656a69295e0b49e009.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        도박에도 度가 있다
      </h2>
      <p class="portfolio-text-card">
        국민체육진흥공단에서 진행한 불법 스포츠 도박 근절 홍보 캠페인이에요. ‘도박에도 度(정도)가 있다’는 도박사 컨셉으로 재미있게 제작했죠. 특히 직원을 직접 촬영해서 배너에 활용한 점이 포인트였어요. 덕분에 재미있는 배너가 완성되었고 반응도 좋았답니다.
            </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio05/b8afc96ee6672abc65e892aef2bfe4a3d60e83a1.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row-3">
      <div class="image-item-3"><img class="image-container" src="/images/portfolio05/e6c46f5d7c3d3ae10906f89d62bab893344012f4.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item-3"><img class="image-container" src="/images/portfolio05/f4756ab936e66fbb86e1984d28934fd427363613.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item-3"><img class="image-container" src="/images/portfolio05/8122f8868ceaf2a49ecb0490152a78851002be68.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        모두의 쿠키 &<br>드래곤가드
      </h2>
      <p class="portfolio-text-card">
        ‘모두의 쿠키’는 다양한 캐릭터를 선택해서 플레이할 수 있다는 점을 강조해서, 그 재미가 잘 드러나도록 표현해봤고요, ‘드래곤 가드’는 당시 모바일 게임에선 보기 힘들었던 대규모 전투의 박진감을 살리는 데 집중했어요.스크린도어는 몇 미터에 달하는 큰 사이즈라, 실제 출력용 사이즈로 변환할 때 컴퓨터가 다운되는 일도 종종 있었어요. 그 덕에 아웃풋을 여러 번 조정하면서 작업했던 기억이 아직도 생생하네요.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio05/a31c1c54408893408e14540896832195638a64c1.png" alt="Brand Identity Main Image 1">
    </section> 
    
    <section class="banner-section">
      <img class="image-container" src="/images/portfolio05/3015885fd12f2125b8b954b35f5b5c4b91eab625.png" alt="Brand Identity Main Image 1">
    </section>


    <section class="content-section">
      <h2 class="portfolio-text-card">
        문을 열면
      </h2>
      <p class="portfolio-text-card">
        문을 여는 순간, 마치 제주 옥돔이 냉장고에서 막 튀어나온 것처럼 싱싱한 느낌이 전해지도록 표현해봤어요.
      </p>
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio05/1976e21815124f803ed1961924ea295f89f4ac45.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio05/freezer_open.gif" alt="Brand Identity Main Image 1"></div>
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