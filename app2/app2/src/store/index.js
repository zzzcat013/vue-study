import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const LS = {
    load() {
        return JSON.parse(localStorage.getItem('vue-todos') || '[]')
    },
    save(data) {
        localStorage.setItem('vue-todo', data)
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
            return filter[state.route.name](state.todos).map(todo => {
                state.todos.indexOf(todo)
            })
        }
    },
    mutations: {
        SET_TODOS(state, data) {
            state.todos = data
            LS.save(state.todos)
        },
        ADD_TODO(state, data) {
            state.todos.push(data)
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
            commit('SET_TODOS', LS.load())
        },

    },
    modules: {}
});