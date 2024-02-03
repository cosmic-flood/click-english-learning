

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
                "sentence": "Off the sauce! Six month and counting",
                "emphasized": "Off the sauce",
                "chinese": "戒酒了，已经有六个月了！",
                "time": "06:10",
                "timeStampStart": "360",
                "timeStampEnd": "380"
            },
            {
                "sentence": "Break a leg in your interview tomorrow!",
                "emphasized": "Break a leg",
                "chinese": "祝你明天的面试好运",
                "time": "12:23",
                "timeStampStart": "730",
                "timeStampEnd": "745"
            },
            {
                "sentence": "It's getting late, I'm going to hit the hay.",
                "emphasized": "hit the hay",
                "chinese": "时间不早了，我要去睡觉了",
                "time": "13:17",
                "timeStampStart": "790",
                "timeStampEnd": "805"
            },
            {
                "sentence": "Don't worry about the exam, it will be a piece of cake.",
                "emphasized": "piece of cake",
                "chinese": "不要担心考试，那很容易",
                "time": "16:26",
                "timeStampStart": "980",
                "timeStampEnd": "1005"
            },
            {
                "sentence": "I won't be coming to work today, I'm feeling a bit under the weather.",
                "emphasized": "under the weather",
                "chinese": "我今天不会去上班了，我感觉有点不舒服",
                "time": "17:31",
                "timeStampStart": "1050",
                "timeStampEnd": "1070"
            },
            {
                "sentence": "Come on, spill the beans! What's the surprise?",
                "emphasized": "spill the beans",
                "chinese": "说吧，透露一下秘密！那个惊喜是什么？",
                "time": "18:23",
                "timeStampStart": "1100",
                "timeStampEnd": "1120"
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