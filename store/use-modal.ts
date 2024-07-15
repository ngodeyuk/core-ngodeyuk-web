import { reactive } from 'vue'

export const modalState = reactive({
    isModalVisible: false
})

export const showModal = () => {
    modalState.isModalVisible = true
}

export const hideModal = () => {
    modalState.isModalVisible = false
}