

import { defineStore } from 'pinia'
import { ref, computed } from "vue";

export const useSeriesStore = defineStore('steps', () => {
    const series = ref([{
        url: "",
        title: "Sample Serie",
        episode: 1,
        season: 1,
        sentences: [
            {
                "sentence": "Break a leg in your interview tomorrow!",
                "emphasized": "Break a leg",
                "chinese": "祝你明天的面试好运",
                "time": "12:23"
            },
            {
                "sentence": "It's getting late, I'm going to hit the hay.",
                "emphasized": "Hit the hay",
                "chinese": "时间不早了，我要去睡觉了",
                "time": "13:17"
            },
            {
                "sentence": "Don't worry about the exam, it will be a piece of cake.",
                "emphasized": "Piece of cake",
                "chinese": "不要担心考试，那很容易",
                "time": "16:26"
            },
            {
                "sentence": "I won't be coming to work today, I'm feeling a bit under the weather.",
                "emphasized": "Under the weather",
                "chinese": "我今天不会去上班了，我感觉有点不舒服",
                "time": "16:31"
            },
            {
                "sentence": "Come on, spill the beans! What's the surprise?",
                "emphasized": "Spill the beans",
                "chinese": "说吧，透露一下秘密！那个惊喜是什么？",
                "time": "18:23"
            }
        ]
    }])
    const current = ref(series.value[0])
    // console.log(current.value)

    const taskIndex = computed(() => {
        if (currentStep.value < 2)
            return 0;
        else if (currentStep.value < 3)
            return 1;
        else
            return 2;
    })

    return {
        series,
        current
    }
})