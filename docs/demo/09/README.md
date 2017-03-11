1. vuex

    npm i vuex -D

2. 使用

    mapActions

    mapGetters

        mutations = {
            increment(state){ // 处理状态(数据)的变化
                state.count++;
            }
        }

        actions = {
            increment:({ // 处理异步的请求，判断，流程控制
                commit
            }) => {
                // console.log(commit);
                commit('increment')
            }
        }

        getters = {
            count(state){
                return state.count;
            }
        }

        // 需要导出 store 对象
        export default new Vuex.Store({
            state,
            mutations,
            actions,
            getters
        })
