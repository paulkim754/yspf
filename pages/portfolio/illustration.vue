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
    <section class="page-title-section"><h1>Illustration</h1></section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Re:birth
      </h2>
      <p class="portfolio-text-card">
        “A.I. 시대의 도래. 과연 인간은 지금의 모습 그대로 남을까요, 아니면 A.I.가 인류를 지배하게 될까?” 그런 질문을 담아, 디지털 시대의 시작과 변화를 시각적으로 표현해봤어요.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio06/2bc05f4240cde5b755107cad57a984f7b2aca262.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Blue Bear
      </h2>
      <p class="portfolio-text-card">
        귀여운 곰을 좋아해요. 그래서 곰을 모티브로 해서 나만의 스튜디오 아트워크를 만들어봤어요. 특히 나만의 아이덴티티를 담고 싶어서, 제가 좋아하는 블루 컬러로 표현했답니다.      </p>
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio06/935e90504d0e0dc32ea0ba3f0249914248e2bca4.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio06/Blue Bear.gif" alt="Brand Identity Main Image 1"></div>
    </section>
    

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Red Devil
      </h2>
      <p class="portfolio-text-card">
        내 안에 살고 있는 작고 귀여운 악마를 표현해봤어요. 겉모습은 좀 이상하게 생겼지만, 사실 속마음은 엄청 착하답니다. 보면 볼수록 정가는 그런 캐릭터예요.
    </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio06/f4b0dfe8a136d068a88c5b23b7cddb4cea54264c.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio06/3038b8bccf0d9cc82d58e716c07178bc52aec70d.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio06/c4762ca4de0360f694d26ce7aa508129cfcddfd7.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Waiting
      </h2>
      <p class="portfolio-text-card">
        팀 버튼 작품을 정말 좋아해요. 그래서 팀 버튼 스타일을 담아서, 커다란 나무들이 가득한 숲속에서 조용히 피어나는 작은 새싹의 모습을 표현해봤어요. 고요하지만 어딘가 묘하게 몽환적인 분위기를 담고 싶었어요.
      </p>
    </section>

    <section class="image-row" style="width: 100%;">
      <div class="image-item"><img class="image-container" src="/images/portfolio06/c16b96965281c68610c7896bbc1cd09acf935ef3.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio06/Waiting_Production 2_2.gif" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Spring Bird
      </h2>
      <p class="portfolio-text-card">
        추운 겨울을 지나 따뜻한 봄이 살며시 찾아오는 느낌을 표현해봤어요. 손으로 그림을 그리고, 포토샵으로 자연스럽게 합성해서 완성했답니다.
      </p>
    </section>

    <section class="banner-section" style="width: 740px;">
      <img class="image-container" src="/images/portfolio06/fa1ed22111f499c78c0c79bea9563db091a97dc6.png" alt="Brand Identity Main Image 1">
    </section>

    <div style="height: 200px;"></div>
  </div>
</template>
<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff; /* From style_1 of root node */
}

.video-container {
  position: relative;
}

.video-container .background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
}

.video-container .play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #073e40;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 48px;
  border-radius: 32px;
  border: 5px solid #a4e9eb;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
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
  padding-top: 40px;
  padding-bottom: 80px;
  box-sizing: border-box;
}

.close-area {
  position: sticky;
  width: 100%;
  top: 5px;
  right: 5px;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  padding-top: 14px;
  padding-bottom: 14px;
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
  margin-top: 140px;
  margin-bottom: 60px;
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