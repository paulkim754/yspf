<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const relayToggle = ref([true, false])
const toggle = () => {
  relayToggle.value[0] = !relayToggle.value[0]
  relayToggle.value[1] = !relayToggle.value[1]
}

onMounted(() => {
  setInterval(toggle, 3000);
})
</script>

<template>
  <div class="main-container">
    <div class="close-area">
      <a @click="router.back()">
        <span style="font-size: 18px;">Close</span>
        <Icon name="material-symbols:close" size="32" />
      </a>
    </div>
    <section class="page-title-section"><h1>Hypnosis Black Magic</h1></section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Symbol<br>Artwork
      </h2>
      <p class="portfolio-text-card">
        Hypnosis Black Magic은 이벤트 기획사로서 언더그라운드 뮤직 & 컬쳐 행사를 기획해요. 브랜드 심볼은 구미호의 여우를 모티브로 제작했으며 보는 순간 빠져드는 듯한 느낌을 주고 싶어 반복적인 패턴을 활용했고, 전체적으로 신비롭고 몽환적인 분위기가 느껴지도록 구성했어요.
      </p>
    </section>

    <section class="banner-section absolute-center fade-stack">
      <img :class="['image-container', { active: relayToggle[0] }]" src="/images/portfolio02/hbm01.png" alt="Brand Identity Main Image 1">
      <img :class="['image-container', { active: relayToggle[1] }]" src="/images/portfolio02/hbm02.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Events<br>Banners
      </h2>
      <p class="portfolio-text-card">
        컬러랑 패턴, 전체적인 흐름까지, 각 이벤트 컨셉에 맞춰 심플하지만 전달하고자 하는 컨셉이 잘 묻어나도록 제작했어요. 자연스럽게 눈길이 가고, 계속 보게 되는 그런 분위기를 만들고 싶었어요.
      </p>
    </section>

    <section class="image-row-3">
      <div class="image-item-3"><img class="image-container" src="/images/portfolio02/7db519c346f1094d85c943758bbf0deacafa568f.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item-3"><img class="image-container" src="/images/portfolio02/a3e0b80a2ccff1fa2afc11a3de27db4eb17ef020.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item-3"><img class="image-container" src="/images/portfolio02/3fabb83b4634d318d8fadcc87cc0b83ba1d14c09.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="banner-section" style="margin-top: 16px;">
      <img class="image-container" src="/images/portfolio02/bbaa1225e7c50528532dd1db2e5f67e3b5cebe36.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row-3">
      <div class="image-item-3"><img class="image-container" src="/images/portfolio02/3c26adead669f2f76ac9e46994f9a003cc0722ee.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item-3"><img class="image-container" src="/images/portfolio02/278423de0bab54c9bbd4bd53ab37d774225188cc.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item-3"><img class="image-container" src="/images/portfolio02/a04f1f37fc8c420e86b3650b20c01e5ab5873121.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio02/8ea028b60854015f06012076568c353df1db63ce.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio02/f544a8f28c048078742ee60b2fdaebeead83a4e3.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Product<br>Design
      </h2>
      <p class="portfolio-text-card">
        아트워크를 활용해서 굿즈랑 배너를 만들었어요. 배너는 이벤트 분위기를 확 살려주는 역할을 톡톡히 했고, 굿즈는 자연스럽게 이벤트 홍보에도 큰 힘이 되었죠.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio02/338ab06edfe9d04ef0570402350544d603b15b7a.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio02/5eeb9a4a8889d583b29ec96611f9d1ba040a5cbc.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio02/8d9b8a0e75a5b6caf376da63eb856b9bbf4f3581.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio02/e0a2837acef4065e0c0183a3c8db5d0c332a1f76.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio02/08c3b39a312556a575d6d748c299556d9e60faa6.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio02/5c789959c7d061133160fc4c3d73c3a0f61bd86f.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio02/0467b39d207e00644d39b60169c3df6a2b145826.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        A.I.<br>Artwork
      </h2>
      <p class="portfolio-text-card">
        요즘 A.I. 기술이 얼마나 많이 발전했는지 궁금해서, 직접 만든 아트워크를 3D 모델링으로 만들어봤어요. 몇개의 프롬프트로 엄청난 결과물이 나왔어요. 이 3D 모델을 자연스럽게 움직이는 영상으로 만드는 것도 생각보다 엄청 쉽게 할 수 있었어요. 요즘은 A.I. 프롬프트 공부에 푹 빠져서 계속 배우고 있는 중입니다.
      </p>
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio02/img_brand identity hbm_3_1.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio02/HBM_Motion.gif" alt="Brand Identity Main Image 1"></div>
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

.banner-section.fade-stack {
  position: relative;
  width: 100%;
  max-width: 1216px;
  height: 600px; /* 원하는 높이로 지정 */
  margin: 0 auto;
  border: 1px solid #d4d4d4;
  border-radius: 32px;
  overflow: hidden;
}
.fade-stack .image-container {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.7s;
  z-index: 1;
  border-radius: 32px;
}
.fade-stack .image-container.active {
  opacity: 1;
  z-index: 2;
}
</style>