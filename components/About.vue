<script lang="ts" setup>
import { ref } from 'vue'

const items = [
  {
    title: 'Mindfulness',
    description: '깊이 있는 기준을 세우고, 더 나은 결과물을 위해 <br/>늘 고민하고 탐구해요.',
    image: '/images/about/img_about_1.png',
  },
  {
    title: 'Mindfulness',
    description: '캔버스의 틀을 깨는 스트리트 아트의<br/>자유로운 사고방식에서 큰 영감을 받았어요.',
    image: '/images/about/img_about_2.png',
  },
  {
    title: 'Mindfulness',
    description: '모르는 미지의 영역은 두려움이 아니라, <br/>오히려 개척할 만한 신나는 놀이터 같아요.',
    image: '/images/about/img_about_3.png',
  },
  {
    title: 'Mindfulness',
    description: '히말라야 안나푸르나 4,130m 등정!<br/>강한 마음가짐이 있다면 무엇이든 할 수 있다고 생각해요.',
    image: '/images/about/img_about_4.png',
  },
  {
    title: 'Mindfulness',
    description: '영어로 자유롭게 소통할 수 있어서<br/>외국 클라이언트와도 원활하게 커뮤니케이션을 합니다.',
    image: '/images/about/img_about_6.png',
  },
  {
    title: 'Mindfulness',
    description: '뉴욕 School of Visual Arts에서 `Culture and Design` 과정을 수료했어요. <br/> 유명 교수님들의 수업은 정말 값진 경험이었답니다.',
    image: '/images/about/img_about_7.png',
  },
  {
    title: 'Mindfulness',
    description: '"해병은 태어나는 것이 아니라 만들어지는 것이다."<br/>아직 미흡한 점이 많지만 언제나 발전하는 내가 되고 싶어요.',
    image: '/images/about/img_about_8.png',
  },
]

const currentIndex = ref(0)
const prevIndex = ref(0)
const isFading = ref(false)
const showKeepScrolling = ref(false)

function show(idx: number) {
  if (currentIndex.value === idx) return
  prevIndex.value = currentIndex.value
  currentIndex.value = idx
  isFading.value = true
  setTimeout(() => { isFading.value = false }, 500)
}

const prev = () => {
  if (showKeepScrolling.value) {
    showKeepScrolling.value = false
    return
  }
  if (currentIndex.value === 0) return
  show(currentIndex.value - 1)
}
const next = () => {
  if (currentIndex.value === items.length - 1) {
    showKeepScrolling.value = true
    return
  }
  show(currentIndex.value + 1)
}
</script>

<template>
  <section id="section-about" class="about-container" aria-labelledby="about-title-main">
    <div class="flex flex-col items-center justify-center" style="width: 1216px; max-width: 100%;">
      <div class="s_style_6">
        <div class="s_style_8">
          <p class="s_style_9">About</p>
        </div>
        <div class="s_style_10">
          <h2 id="about-title-main" class="s_style_11">I'm a happy creator</h2>
          <p class="s_style_12">
            <span class="s_textStyle_base_13">행복 크리에이터 </span>
            <span class="s_textStyle_14">김양수</span>
            <span class="s_textStyle_base_13">입니다. 약간의 유머를 가미한, 아름다운 것을 만드는 걸 좋아해요. 🙂</span>
          </p>
        </div>
      </div>

      <div class="fade-carousel">
        <div
          v-if="isFading"
          :key="prevIndex"
          class="fade-carousel-item fade-out"
        >
          <div class="card-background">
            <img :src="items[prevIndex].image" alt="Mindful background" />
            <div class="card-background-dim"></div>
          </div>
          <div class="card-layer">
            <h3 class="s_style_25">{{ items[prevIndex].title }}</h3>
            <p class="s_style_26" v-html="items[prevIndex].description"></p>
          </div>
        </div>
        <div
          :key="currentIndex"
          class="fade-carousel-item"
          :class="{ 'fade-in': isFading, active: true }"
        >
          <div class="card-background">
            <img :src="items[currentIndex].image" alt="Mindful background" />
            <div class="card-background-dim"></div>
          </div>
          <div class="card-layer">
            <h3 class="s_style_25">{{ items[currentIndex].title }}</h3>
            <p class="s_style_26" v-html="items[currentIndex].description"></p>
          </div>
        </div>
        <!-- 좌측 화살표: 처음 배너가 아닐 때만 노출 -->
        <button v-if="currentIndex !== 0 && !showKeepScrolling" class="arrow-btn arrow-left" @click="prev" aria-label="이전">
          <Icon name="material-symbols:arrow-back-rounded" size="32" class=""/>
        </button>
        <!-- 우측 화살표: 항상 노출, 마지막 배너에서는 오버레이만 뜨게 -->
        <button v-if="!showKeepScrolling" class="arrow-btn arrow-right" @click="next" aria-label="다음">
          <Icon name="material-symbols:arrow-back-rounded" size="32" class=""/>
        </button>
        <!-- keep scrolling 오버레이 -->
        <div v-if="showKeepScrolling" class="keep-scrolling-overlay">
          <div class="keep-scrolling-content">
            Keep scrolling!<br>👇
          </div>
          <button class="overlay-arrow-btn" @click="showKeepScrolling = false" aria-label="이전">
            <Icon name="material-symbols:arrow-back-rounded" size="32" class=""/>
          </button>
        </div>
      </div>
      <!-- 인디케이터 -->
      <div class="carousel-indicators">
        <button
          v-for="(item, idx) in items"
          :key="'indicator-' + idx"
          class="indicator-dot"
          :class="{ active: idx === currentIndex }"
          aria-label="배너 {{ idx + 1 }}로 이동"
        ></button>
      </div>
    </div>
    </section>
</template>
<style scoped>
.about-container {
  background-color: #f2feff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 128px;
    padding-bottom: 32px;
    overflow: hidden;
  }

.fade-carousel {
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 32px;
  margin-top: 80px;
  overflow: hidden;
}

.fade-carousel-item {
  opacity: 1;
  transition: opacity 0.5s;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  top: 0;
  left: 0;
}
.fade-carousel-item.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}
.fade-carousel-item.fade-out {
  opacity: 1;
  animation: fadeOut 0.5s forwards;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes fadeOut {
  from { opacity: 1; }
  to   { opacity: 0; }
}

.card-background {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  overflow: hidden;
  z-index: 1;
}

.card-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-background-dim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #073e40; opacity: 0.7;
  z-index: 2;
}

.card-layer {
  position: absolute;
  left: 40px;
  top: 40px;
  z-index: 4;
  width: calc(100% - 80px);
  z-index: 3;
}

.arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #a4e9eb;
  border-radius: 50%;
  opacity: 0.7;
  padding: 0;
  cursor: pointer;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.arrow-left {
  left: 16px;
}
.arrow-right {
  right: 16px;
  transform: translateY(-50%) rotate(180deg);
}
.arrow-btn svg {
  display: block;
}
.arrow-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.indicator-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #073e40;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s, border 0.3s;
  outline: none;
}
.indicator-dot.active {
  background: #073e40;
  border: 2px solid #073e40;
}

.keep-scrolling-overlay {
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background: rgba(7, 62, 64, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
  border-radius: 32px;
}
.keep-scrolling-content {
  color: #a4e9eb;
  font-family: 'Knewave', cursive;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: -0.5px;
  text-align: center;
}
.overlay-arrow-btn {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  background: #a4e9eb;
  border-radius: 50%;
  opacity: 0.7;
  padding: 0;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 21;
}
.overlay-arrow-btn svg {
  display: block;
}
</style>