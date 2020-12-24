import { createStore } from 'vuex'
import axios from 'axios'

interface UserProps {
    isLogin: boolean;
    name?: string;
    _id?: string;
    column?: string;
}
export interface ImageProps {
    _id?: string;
    url?: string;
    createdAt?: string;
}
export interface ColumnProps {
    _id: string;
    title: string;
    avatar?: ImageProps;
    description: string;
}
export interface PostProps {
    id?: string;
    title: string;
    excerpt?: string;
    content?: string;
    image?: ImageProps;
    createdAt?: string;
    column: string;
    author?: string | UserProps;
}
export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: [],
        posts: [],
        user: { isLogin: true, name: '菜花', column: '1' }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: '菜花', column: '1' }
        },
        createPost(state, newPost) {
            state.posts.push(newPost)
        },
        fetchColumns(state, rawData) {
            state.columns = rawData.data.list
        },
        fetchColumn(state, rawData) {
            state.columns = [rawData.data]
        },
        fetchPosts(state, rawData) {
            state.posts = rawData.data.list
        }
    },
    actions:{
        fetchColumns(context){
            axios.get('/columns').then(resp => {
                context.commit('fetchColumns', resp.data)
                // console.log(resp.data)
            })
        },
        fetchColumn({ commit }, cid){
            axios.get(`/columns/${cid}`).then(resp => {
                commit('fetchColumn', resp.data)
            })
        },
        fetchPosts({ commit }, cid){
            axios.get(`/columns/${cid}/posts`).then(resp => {
                commit('fetchPosts', resp.data)
            })
        }
    },
    getters: {
        getColumnById: (state) => (id: string) => {
            return state.columns.find(c => c._id === id)
        },
        getPostByCid: (state) => (cid: string) => {
            return state.posts.filter(post => post.column === cid)
        }
    }
})

export default store