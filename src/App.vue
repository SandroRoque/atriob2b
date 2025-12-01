<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ServicesOverview from './components/ServicesOverview.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <Hero />
    <ServicesOverview />
  </main>
  <Footer />
</template>

<style scoped>
main {
  flex: 1;
}
</style>
