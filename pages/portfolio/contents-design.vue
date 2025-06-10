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
    <section class="page-title-section"><h1>Contents Design</h1></section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        공間시答
      </h2>
      <p class="portfolio-text-card">
        세종시의 CI의 로고타입과 블루컬러를 모티브로 활용, 일관된 브랜드 아이덴티티 유지
        홍보프로그램의 핵심 컨셉인 ‘문답’을 서로 대화하는 듯한 ‘말풍선’으로 표현
        시민과의 소통을 중시하는 세종시의 아이덴티티 강조하였어요.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio04/a2394b548868e47be4e3e84bd5bb725bf51912fe.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio04/60176d9a0971fffcf9ce358151a08ebf7880c08f.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio04/115396930730d7f8d415c5d287dbb5ab3b15a092.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio04/54714c6c2eaa32a806b18e54a3452dd87f4b9230.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio04/50682ee863474ff9f0c1a85cec443422d86ad4de.png" alt="Brand Identity Main Image 1"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        엿츠
      </h2>
      <p class="portfolio-text-card">
        엿츠 브랜드 일러스트가 흥미로워어요. 그걸 활용해 좀 더 재미있게 표현해보았습니다.
      </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio04/3ab21197caf54a84af193a473b26509979a21c89.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row-3">
      <div class="image-item-3"><img class="image-container" src="/images/portfolio04/2c851d9d47fb919ba1380a615a4b637a9beae21d.png" alt="샘플1"></div>
      <div class="image-item-3"><img class="image-container" src="/images/portfolio04/273e461ae91cf90bd8a60250bb858a044e4e3a24.png" alt="샘플2"></div>
      <div class="image-item-3"><img class="image-container" src="/images/portfolio04/0c699b0eec6f3b5f64f794c683131f7ed9930df2.png" alt="샘플3"></div>
    </section>

    <section class="content-section">
      <h2 class="portfolio-text-card">
        영구크린
      </h2>
      <p class="portfolio-text-card">
        영구크린의 오래된 브랜드 이미지를 바꾸고 싶어, 좀 더 젊고 신선한 느낌이 들도록 일러스트레이션을 깔끔하게 제작해 보았어요.
            </p>
    </section>

    <section class="banner-section">
      <img class="image-container" src="/images/portfolio04/876d8f6ec75f34670611d1c5d2d03a310c619bc9.png" alt="Brand Identity Main Image 1">
    </section>

    <section class="image-row-3">
      <div class="image-item-3"><img class="image-container" src="/images/portfolio04/08ac68ca1f88eeaae1217403ec8c370aae23d2f5.png" alt="샘플1"></div>
      <div class="image-item-3"><img class="image-container" src="/images/portfolio04/2b82323dba0924e5ef73dcb768b12e6b2a3a0d51.png" alt="샘플2"></div>
      <div class="image-item-3"><img class="image-container" src="/images/portfolio04/b260fccdf7574929db92c7883bb1efd1e49b7828.png" alt="샘플3"></div>
    </section>


    <section class="content-section">
      <h2 class="portfolio-text-card">
        채널 파프리카<br>주간 이벤트
      </h2>
      <p class="portfolio-text-card">
        채널의 귀여운 파프리카 캐릭터를 활용해서 재미있고 친근하게 표현하였어요. 덕분에 많은 팔로워들이 유입되어 좋은 성과가 있었습니다.
      </p>
    </section>

    <section class="image-row">
      <div class="image-item"><img class="image-container" src="/images/portfolio04/8253470a2c141c2d4ec1eb31c387d0b4e04a4f9e.png" alt="Brand Identity Main Image 1"></div>  
      <div class="image-item"><img class="image-container" src="/images/portfolio04/c642f44698b1648e01c37283ca0132472ffc1ef6.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio04/726afd47a8fe21f46cf6c9b5e39c33730f70b665.png" alt="Brand Identity Main Image 1"></div>
      <div class="image-item"><img class="image-container" src="/images/portfolio04/3e9d3eaef2f43c63ac035bc35e29d1247a14ba05.png" alt="Brand Identity Main Image 1"></div>
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