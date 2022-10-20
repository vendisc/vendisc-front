export default {
    state: () => ({
        list: [{
            lid: -1,
            name: 'Home'
        }]
    }),
    mutations: {
        changeLocation(state, index) {
            state.list = state.list.slice(0, index + 1)
        },
        setRootLid(state, lid) {
            state.list[0].lid = lid
        },
        setLocation(state, item) {
            state.list.push(item)
        },
        backRoot(state) {
            state.list = [state.list[0]]
        }
    },
    actions: {
        backToPervPage({state, commit}) {
            commit('changeLocation', state.list.length - 2)
        }
    },
    getters: {
        isRoot: state => {
            return state.list.length <= 1
        },
        currentLocation: state => {
            return state.list[state.list.length - 1]
        },
        curLid: state => {
            return state.list[state.list.length - 1].lid
        }
    }
}