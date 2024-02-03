<script setup>
import Sentences from './components/Sentences.vue'
import Title from './components/Title.vue'
import Share from './components/Share.vue'
</script>

<template>
  <div style="overflow:auto;">
    <Title msg="Clickee, English Series Companion" />
    <a-row style="border-top: 1px solid white;margin-top: 5px;margin-bottom: 10px;" />
    <Sentences />
    <!-- <Share /> -->
  </div>
</template>

<style scoped></style>
