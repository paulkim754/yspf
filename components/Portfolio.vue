<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const currentPortfolio = ref(null)

const portfolios = [
  {
    id: 'logispot',
    title: 'LOGISPOT',
    category: 'Brand Design',
    image: '/images/c22d2dd1a7d549192f162e0f388867e501aec559.png',
    path: '/portfolio/logispot'
  },
  {
    id: 'hbm',
    title: 'HBM',
    category: 'Brand Design',
    image: '/images/338ab06edfe9d04ef0570402350544d603b15b7a.png',
    path: '/portfolio/hbm'
  },
  {
    id: 'online-campaign',
    title: 'Online Campaign',
    category: 'Campaign',
    image: '/images/c849cc1cdbbef5c95fa4d1dc4f84956770ebd398.png',
    path: '/portfolio/online-campaign'
  },
  {
    id: 'contents-design',
    title: 'Contents Design',
    category: 'Design',
    image: '/images/60176d9a0971fffcf9ce358151a08ebf7880c08f.png',
    path: '/portfolio/contents-design'
  },
  {
    id: 'online-ads',
    title: 'Online Ads',
    category: 'Ads',
    image: '/images/f1e922026c1b55a6af195d656a69295e0b49e009.png',
    path: '/portfolio/online-ads'
  },
  {
    id: 'illustration',
    title: 'Illustration',
    category: 'Design',
    image: '/images/139114ed064c8cea95bfcdf7ddb94545d806307a.png',
    path: '/portfolio/illustration'
  },
  {
    id: 'poster',
    title: 'Poster',
    category: 'Design',
    image: '/images/c956275cc772e70896e00d502568a80bce0e10b7.png',
    path: '/portfolio/poster'
  }
]

const openModal = (portfolio) => {
  currentPortfolio.value = portfolio
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  currentPortfolio.value = null
}
</script>

<template>
  <section id="section-portfolio" class="s_style_28" aria-labelledby="portfolio-title-main">
    <div class="s_style_29">
      <div class="s_style_8">
        <p class="s_style_9">Portfolio</p>
      </div>
      <div class="s_style_30">
        <h2 id="portfolio-title-main" class="s_style_11">Make beautiful things</h2>
        <p class="s_style_12">리서치, 컨셉 도출, 디자인 시각화 등 체계적인 프로세스를 통해 작업해요.</p>
      </div>
    </div>

    <div class="s_style_31">
      <article 
        v-for="portfolio in portfolios" 
        :key="portfolio.id" 
        class="s_style_32"
        @click="openModal(portfolio)"
      >
        <div class="s_style_33">
          <img 
            :src="portfolio.image" 
            :alt="`Portfolio ${portfolio.title}`" 
            class="s_style_34" 
            style="width: 382px; height: 382px;"
            loading="lazy"
          />
        </div>
        <div class="s_style_35">
          <div class="s_style_36">
            <h3 class="s_style_37">
              <span class="s_textStyle_base_38">{{ portfolio.category }} <br>Design </span>
              <span v-if="portfolio.title !== portfolio.category" class="s_textStyle_39">{{ portfolio.title }}</span>
            </h3>
          </div>
          <div class="s_style_22">
            <NuxtImg 
              src="~/assets/images/main/I635_2869_490_879_490_870.svg" 
              alt="View project" 
              style="width: 32px; height: 32px;"
            />
          </div>
        </div>
      </article>
      <div class="s_style_53" style="min-width: 16px;"></div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">&times;</button>
          <NuxtPage :page-key="currentPortfolio?.path" />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.modal-close:hover {
  color: #000;
}
</style>