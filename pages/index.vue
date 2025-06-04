<script setup>
import WelcomeBanner from '@/components/WelcomeBanner.vue'
import About from '@/components/About.vue'
import Portfolio from '@/components/Portfolio.vue'
import Career from '@/components/Career.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
    <!-- 메인 배너 -->
    <WelcomeBanner />
    <!-- 소개 -->
    <About />
    <!-- 포트폴리오 -->
    <Portfolio />
    <!-- 커리어 -->
    <Career />
    <!-- 컨택 -->
    <Contact />
</template>

<style >
@import url("~/assets/css/global.css");
@import url("~/assets/css/main.css");
</style>
