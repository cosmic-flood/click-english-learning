<script >
import {
  PlayCircleOutlined,
  VideoCameraOutlined,
  TranslationOutlined,
  FieldTimeOutlined,
  WechatOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    PlayCircleOutlined,
    VideoCameraOutlined,
    TranslationOutlined,
    FieldTimeOutlined,
    WechatOutlined
  },
  data() {
    return {
      open: false,
      reference: false
    };
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
    },
    showModal() {
      this.open = true;
    },
    handleOk() {
      this.open = false;
    },
    showReference() {
      this.reference = !this.reference;
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
        <a-button type="primary" :size="small" @click="showModal" style="margin-left: 5px;">
          <template #icon>
            <WechatOutlined />
          </template>
          Share
        </a-button>
      </div>
      <div class="sentence-prop">
        <a style="padding-left: 0px !important;margin-top:2px;" @click="showReference">
          <strong>References (if u need)
            <span v-if="reference == false">↓</span>
            <span v-if="reference == true">↑</span>
          </strong>
        </a>
      </div>
      <div class="reference-container" v-if="reference == true">
        <h3>
          抓取到的Slang: Off the sauce
        </h3>
        <div style="color:gray;">
          词典解释:to become mentally ill :to become insane.She went nuts and started tobelieve that everyone was trying to
          kill her.
          2.:to act in a way that is wild orout of control because of strong emotion. The crowd went nuts when the team
          wonthechampionship.
        </div>
        <div style="margin-top: 15px;">
          <strong>出现过的台词和地方</strong>
          <ul style="padding-left:15px;margin-top: 8px;color:rgb(108, 102, 102)">
            <li>
              伦敦生活第2季第一集: FX: Off the sauce, Six month and counting!
            </li>
            <li>
              老友记第一季第一集: Joey:l'm going nuts about these muffins
            </li>
            <li>
              绝望主妇第3季第一集: Peter:She's gonna nuts about these gifts
            </li>
          </ul>
        </div>

        <div style="margin-top: 15px;">
          <strong style="margin-top: 15px;">联想示意</strong>
          <div style="margin-top: 8px;color:rgb(108, 102, 102)">
            人的头(或大脑) ; n.a person's head or brain
          </div>
          <div style="margin-top: 8px;color:rgb(108, 102, 102)">
            放飞想象力: 感觉这个不用多说，拿个带壳的核桃，再把壳剥了~带壳的坚果 vs 带脑壳的“头”，剥了壳的坚果仁 vs 脑壳里的“大脑”，多像啊!以形补形，想补脑，吃核桃!
          </div>
        </div>
      </div>
    </a-card>
    <a-skeleton :loading="loading" active avatar>

    </a-skeleton>
  </a-col>
  <a-modal v-model:open="open" title="Share to Wechat" @ok="handleOk" width="300px">
    <span>Scan the QR to share your Clickee Card</span>
    <img style="width:257px;margin-left:-5px;margin-right:-5px; " src="@/assets/clickee-share.png" />

  </a-modal>
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

.reference-container {
  margin-left: -20px;
  margin-right: -20px;
  border: 1px solid #45e345;
  padding: 15px;
  border-radius: 5px;
}
</style>
