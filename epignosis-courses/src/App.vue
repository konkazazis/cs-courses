<script setup>
import Header from './components/Header.vue'
import Grid from './components/Grid.vue'
</script>

<template>
  <header>
    <Header/>
  </header>

  <Grid/>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    
    place-items: center;
    
  }

  .logo {
    margin: 0 2rem 0 0;
  }


}
</style>
