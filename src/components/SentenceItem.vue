<script >
import {
  PlayCircleOutlined,
  VideoCameraOutlined,
  TranslationOutlined,
  FieldTimeOutlined
} from '@ant-design/icons-vue';

export default {
  components: {
    PlayCircleOutlined,
    VideoCameraOutlined,
    TranslationOutlined,
    FieldTimeOutlined
  },
  props: {
    sentence: "",
    emphasized: "",
    chinese: "",
    time: "",
    loading: false
  },
  methods: {
    play() {
      console.log("Props Time: " + this.time);
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0]; // there will be only one in this array
        console.log("Current tab ID: ", currentTab.id);
        chrome.runtime.sendMessage({ timeFrame: this.time, tabId: currentTab.id }, function (response) {
          console.log("Response from background:", response);
        });
      });
    }
  }
}
</script>

<template>
  <a-col :span="24" class="sentence">
    <a-card v-if="loading === false">
      <div class="sentence-prop">
        <VideoCameraOutlined /> 
        <span>
          {{ sentence.split(emphasized)[0] }} 
          <strong>{{ emphasized }}</strong>
          {{ sentence.split(emphasized)[1] }} 
        </span>
      </div>
      <div class="sentence-prop">
        <TranslationOutlined /> <span>{{ chinese }}</span>
      </div>
      <div class="sentence-prop">
        <FieldTimeOutlined /> <span>{{ time }}</span>
      </div>
      <div class="sentence-prop">
        <a-button type="primary" :size="small" @click="play">
          <template #icon>
            <PlayCircleOutlined />
          </template>
          Replay in Video
        </a-button>
      </div>
    </a-card>
    <a-skeleton :loading="loading" active avatar>

    </a-skeleton>
  </a-col>
</template>

<style scoped>
.sentence {
  margin-top: 10px;

  .sentence-prop {
    margin-top: 6px;

    span {
      margin-left: 5px;
    }

    .ant-btn-primary {
      background-color: #00bd7e;
    }
  }

}
</style>
