import { reqGetList, reqGetUsedCapacity } from '@/api'

export default {
    state: () => ({
        list: [],
        usedCapacity: 0
    }),
    mutations: {
        clearFileList(state){
            state.list = []
        },

        setList(state, list) {
            state.list = list
        },

        setUsedCapacity(state, usedCapacity) {
            state.usedCapacity = usedCapacity
        }
    },
    actions: {
        async getList({ commit }) {
            const { data } = await reqGetList()
            commit('setList', data)
        },

        async getUsedCapacity({ commit }) {
            const { data: { usedCapacity } } = await reqGetUsedCapacity()
            commit('setUsedCapacity', usedCapacity)
        }
    },
    getters: {
        capacityRatio(state, getters) {
            const ratio = (state.usedCapacity / getters.capacity).toFixed(2)
            return (ratio >= 1 || ratio < 0 ? 1 : ratio) || 0
        }
    }
}