import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const LS = {
    load() {
        return JSON.parse(localStorage.getItem('vue-todos') || '[]')
    },
    save(data) {
        localStorage.setItem('vue-todos', JSON.stringify(data))
    }
}

const filter = {
    all(todos) {
        return todos
    },
    active(todos) {
        return todos.filter(todo => {
            return !todo.complete
        })
    },
    complete(todos) {
        return todos.filter(todo => {
            return todo.complete
        })
    }
}

export default new Vuex.Store({
    strict: true,
    state: {
        todos: [
            { content: "todo-content1", complete: false },
            { content: "todo-content2", complete: true },
            { content: "todo-content3", complete: false },
        ]
    },
    getters: {
        todoIndex(state) {
            let name=state.route.name
            let result=filter[state.route.name](state.todos).map(todoItem=>state.todos.indexOf(todoItem))
            console.log("name",name,"result",result)
            return filter[state.route.name](state.todos).map(todoItem=>state.todos.indexOf(todoItem))
        }
    },
    mutations: {
        SET_TODOS(state, data) {
            state.todos = data
            console.log("state.todos", state.todos)
            LS.save(state.todos)
        },
        ADD_TODO(state, data) {
            console.log("ADD_TODO", data)
            state.todos.push(data)
            console.log("ADD_TODO todos",state.todos )
            LS.save(state.todos)
        },
        UPDATE_TODO(state, { index, data }) {
            state.todos[index] = data
            LS.save(state.todos)
        },
        REMOVE_TODO(state, index) {
            state.todos.splice(index, 1)
            LS.save(state.todos)
        },
    },
    actions: {
        INIT_TODOS({ commit }) {
            console.log("this.state.todos",this.state.todos)
            commit('SET_TODOS', LS.load())
        }
    },
    modules: {}
});