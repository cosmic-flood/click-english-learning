<script>
import SentenceItem from './SentenceItem.vue'
import { useSeriesStore } from '@/stores/series'

export default {
  components: {
    SentenceItem
  },
  setup() {
    const seriesStore = useSeriesStore();
    return {
      seriesStore
    };
  }
}
</script>
      

<template >
  <a-row v-for="item in seriesStore.current.sentences">
    <SentenceItem :sentence="item.sentence" :chinese="item.chinese" :time="item.time" :emphasized="item.emphasized" />
  </a-row>
</template>
