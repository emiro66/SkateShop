import { defineStore } from "pinia"
import { ref } from "vue"


export const useProductsStore = defineStore('product', () => {
    const AllCard = ref([
    {
        name: "Кеды",
        image: "src/assets/deka1.png",
        id: 1,
        text: "ghjgjkhklnjkbjk"
    },
    {
        name: "Джинсы",
        image: "src/assets/deka1.png",
        id: 2,
        text: "fdhdfjhfgtj"
    },
    {
        name: "Футболки",
        image: "src/assets/deka1.png",
        id: 3,
        text: "fgdhfgj"
    },
    {
        name: "Кепки",
        image: "src/assets/deka1.png",
        id: 3,
        text: "ghjgjkhklnjkbjk"
    },
        {
        name: "Кеды",
        image: "src/assets/vanscros.png",

        id: 1,
        text: "ghjgjkhklnjkbjk"
    },
    {
        name: "Джинсы",
        image: "src/assets/deka1.png",
        id: 2,
        text: "fdhdfjhfgtj"
    },
    {
        name: "Футболки",
        image: "src/assets/deka1.png",
        id: 3,
        text: "fgdhfgj"
    },
    {
        name: "Кепки",
        image: "src/assets/deka1.png",
        id: 3,
        text: "ghjgjkhklnjkbjk"
    },


 
]
)

const SaleCard = ref([
    {}
])

function addToArray(newValue: object) {
    SaleCard.value.push(newValue)
}

return {AllCard, SaleCard, addToArray}

})