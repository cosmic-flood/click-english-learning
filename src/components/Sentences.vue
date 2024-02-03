<script>
import SentenceItem from './SentenceItem.vue'
import { useSeriesStore } from '@/stores/series'

export default {
  components: {
    SentenceItem
  },
  // props: {
  //   loading: true
  // },
  data() {
    return {
      loading: true
    };
  },
  setup() {
    const seriesStore = useSeriesStore();
    return {
      seriesStore
    };
  },
  mounted() {
    setTimeout(this.countdown, 500);
  },
  methods: {
    countdown() {
      this.loading = false;
    }
  }
}
</script>
      

<template >
  {{ timerCount }}
  <a-row v-for="item in seriesStore.current.sentences">
    <SentenceItem :sentence="item.sentence" :chinese="item.chinese" :time="item.time" :emphasized="item.emphasized"
      :loading="loading" />
  </a-row>
</template>
