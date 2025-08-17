<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="main-container">
    <div class="close-area">
      <a @click="router.back()">
        <span style="font-size: 15px;">Close</span>
        <Icon name="material-symbols:close" size="24" />
      </a>
    </div>
    <section class="page-title-section"><h1>LOGISPOT</h1></section>

    <section class="content-section" style="flex-direction: column;">
      <div style="width: 100%; display: flex; flex-direction: row;">
        <h2 class="portfolio-text-card">
          Brand<br>Guidlines
        </h2>
        <p class="portfolio-text-card">
          Logispot은 국내 1위 디지털 통합 물류 서비스 기업이자, 미들마일을 이끌어가는 개척자예요.
          브랜드의 개성과 분위기를 잘 드러낼 수 있도록 로고, 색상, 타이포그래피 같은 시각 요소들을 만들었고, 
          어떤 매체에서도 일관되게 보일 수 있도록 브랜드 가이드라인도 함께 정리했어요.
        </p>
      </div>
      <section class="download-section">
        <a href="https://drive.google.com/file/d/1oAuzoCgAY7OrEu8ivPK_9C0VO4G0Fgms/view?usp=sharing" target="_blank">Download</a>
      </section>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio01/36a5a83458ae78f94caae8ac3cb1c542dece2f9b.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio01/bb096b5d73cb0bc1c65799826612cfc749d214b4.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio01/98eade2273ca5d4fcc8d143ccc6dfa4f4a56c651.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio01/6f9ebbfc9e0d1adf4c226440344dce6dd25a5561.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio01/f09770ca557524def734cb082b191ab050d5ffe3.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio01/c22d2dd1a7d549192f162e0f388867e501aec559.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio01/0a9d7f8699a2417de5a0a87dfdb309fa6a5a384d.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section" style="flex-direction: column;">
      <div style="width: 100%; display: flex; flex-direction: row;">
        <h2 class="portfolio-text-card">
          Report<br>Design
        </h2>
        <p class="portfolio-text-card">
          온라인 캠페인 중 하나였던 'Logistics Digital Connect 2022'는 '뉴노멀 시대, 디지털 물류는 어디까지 왔을까요?'라는 주제로, 물류 산업에 어떤 변화가 있었는지 정리한 리포트예요. 이 리포트를 다운로드하는 캠페인을 통해 엘칸토, 대우가구 같은 새로운 리드를 발굴하는 데 도움이 되었어요.
        </p>
      </div>
      <section class="download-section">
        <a href="https://drive.google.com/file/d/1MkbprvKQBu3xNq7vmcAoYzdBGHWWlKp_/view?usp=sharing" target="_blank">Download</a>
      </section>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio01/7cc04415b8ed31d3af10a0663fdfc454211d041c.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio01/d1c7c594dbf6a890e3623ff610c6fbcd1e63ffba.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio01/e90acf11a931b6773ffec06e9d1a350015138937.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio01/0275b3aeaaabe486dccbeb4ea1b00d0be02045cb.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio01/c01f202a867a1644c19c893964e8de38b42fb6d4.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio01/4c729b32028da49baf682b784845859ec0fb9087.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio01/2a64191c3c14e6e4b910c22d0ff68086ce4e9a10.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Brand Promo<br>Video
      </h2>
      <p class="portfolio-text-card">
        기획부터 업체 선정, 제작까지 전 과정에 아트 디렉터 겸 총괄로 참여했어요.로지스팟이 전하고 싶은 메시지는 확실했지만, 비즈니스 모델을 잘 표현해줄 수 있는 제작사를 고르는 데 특히 신경을 많이 썼죠. 새벽까지 촬영하며 고생도 했지만, 그만큼 재미있고 기억에 남는 경험이었어요.
      </p>
    </section>

    <section class="banner-section">
      <div class="video-container" style="height: 676px;">
        <a href="https://vimeo.com/1087309612" target="_blank">
          <img class="background-image" src="/images/portfolio01/14c91d91a558231e1e0af642b471ed4ec088da33.png" alt="Brand Identity Main Image 1">
        </a>
      </div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Brand Service<br>Video
      </h2>
      <p class="portfolio-text-card">
        로지스팟이 어떤 서비스를 하는지 쉽게 이해할 수 있도록, 일러스트 스타일로 풀어낸 모션 그래픽이에요. 복잡하게 느껴질 수 있는 물류 서비스를 누구나 한눈에 알아볼 수 있도록 설명하는 게 목표였고요.
      </p>
    </section>

    <section class="banner-section">
      <div class="video-container" style="height: 676px;">
        <a href="https://vimeo.com/1087176215" target="_blank">
          <img class="background-image" src="/images/portfolio01/d6004f1aa5b2eaa047a0606aa6a5d48844c9ed76.png" alt="Brand Identity Main Image 1">
        </a>
      </div>
      
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Brand Management
      </h2>
      <p class="portfolio-text-card">
        사내 복지를 위해 HR팀과 함께 이것저것 재미있는 프로젝트들을 진행했어요.포스터 디자인부터 굿즈 제작까지, 직원들이 보고 즐기고 사용할 수 있는 다양한 아이템들을 만들었어요.
      </p>
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio01/a88cb1576aa592fb8cadfd423aaf5d7cab31333f.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" style="height: 827px !important;" src="/images/portfolio01/ab31a6801f1444e59f93f65ce65e426f018f5cd8.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="image-row-3" style="height: 370px;">
      <div class="image-item-3" style="object-fit: cover;"><img class="image-container" src="/images/portfolio01/711a0535866a54bc117416a238761efb6a09b430.png" alt="샘플1"></div>
      <div class="image-item-3" style="object-fit: cover;"><img class="image-container" src="/images/portfolio01/dff2c1faa6cc16965becbce64cb4ab4ddc6dcf69.png" alt="샘플2"></div>
      <div class="image-item-3" style="object-fit: cover;"><img class="image-container" src="/images/portfolio01/ce583bf4681af5871d9f364ad3a520a042a11c15.png" alt="샘플3"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Booth<br>Design
      </h2>
      <p class="portfolio-text-card">
        박람회 부스 제작 아트 디렉터로 참여했어요. 처음 기획 단계부터 제작 업체와 긴밀히 협업하면서 전체적인 콘셉트와 디자인을 함께 만들어갔어요. 사람들의 시선을 끌 수 있으면서도 브랜드의 메시지가 잘 드러나도록 공간을 구성하는데 중점을 뒀어요.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio01/08cbb661c56edd59b643e794b9ed59cf376a33d6.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio01/6f78c43bdf142a72d9275a5cb331b9f5986a350b.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio01/63cab8dede0b847ed9de6a8411fa5808180606d4.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        Space<br>Design
      </h2>
      <p class="portfolio-text-card">
        오피스 환경도 중요한 복지 중 하나라고 생각해요. 직원들이 더 효율적으로 일할 수 있도록 다양한 회의실을 만들고, 편하게 쉴 수 있는 공간도 신경 써서 구성했어요. 단순히 기능적인 공간을 넘어서, 우리 브랜드의 아이덴티티가 자연스럽게 묻어날 수 있도록 디자인 요소도 곳곳에 담았고요.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio01/361ff966724a617c6d02d68397373a483647c97c.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row">
      <div class="image-item" style="height: 388px;"><img class="image-container" src="/images/portfolio01/1f2b2ede20ba04eb7c9e4fd451eb3d1455cec16d.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item" style="height: 388px;"><img class="image-container" src="/images/portfolio01/e9b94235e9882376d1ae0667f5ba63e6967b42df.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item" style="height: 388px;"><img class="image-container" src="/images/portfolio01/1993844616fbdeffa2d1666f1ed4c542460b1501.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item" style="height: 388px;"><img class="image-container" src="/images/portfolio01/397d54df836e5314ea94395a830c194528315162.png" alt="Brand Identity Main Image 1"></div>
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

.download-section {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 1216px;
  margin-top: 16px;
  margin-left: 16px;
}

.download-section a {
  text-decoration: underline;
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
  border-radius: 16px;
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