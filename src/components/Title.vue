<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>

<template>
    <a-row>
        <h1 class="green">{{ msg }}</h1>
    </a-row>
    <a-row>
        <h2 class="green"> Fleabag  | Season 2 | Episode 1 </h2>
    </a-row>
    <a-row>
        <strong class="green">URL: https://www.bilibili.com/video/BV1...</strong>
    </a-row>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 1.8rem;
    width: 100%;
    text-align: left;
    margin-left: 0px;
    padding-left: 0px;
}

@media (min-width: 1024px) {}
</style>
