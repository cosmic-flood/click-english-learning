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
    time: ""
  },
  methods: {
  }
}
</script>

<template>
  <a-col :span="24" class="sentence">
    <a-card>
      <div class="sentence-prop">
        <VideoCameraOutlined /> <span>{{ sentence }}</span>
      </div>
      <div class="sentence-prop">
        <TranslationOutlined /> <span>{{ chinese }}</span>
      </div>
      <div class="sentence-prop">
        <FieldTimeOutlined /> <span>{{ time }}</span>
      </div>
      <div class="sentence-prop">
        <a-button type="primary" :size="small">
          <template #icon>
            <PlayCircleOutlined />
          </template>
          Replay in Video
        </a-button>
      </div>
    </a-card>
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

    .ant-btn-primary{
      background-color: #00bd7e;
    }
  }

}
</style>
