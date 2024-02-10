<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/sections/HeaderComponent.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style></style>
