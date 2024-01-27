<script >
import {
    WechatOutlined
} from '@ant-design/icons-vue';

export default {
    components: {
        WechatOutlined
    },
    props: {
    },
    methods: {
    }
}
</script>

<template>
    <a-row style="margin-top: 15px;margin-bottom: 25px;">
        <a-button :type="ghost" :size="large">
            <WechatOutlined />
            Share to Wechat
        </a-button>
    </a-row>
</template>

<style scoped></style>
