import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/HomePage.vue'
import User from './pages/user/IndexPage.vue'
import TemplatePage from './pages/user/TemplatePage.vue';
import ShowUser from './pages/user/ShowUser.vue';

import Post from './pages/post/IndexPage.vue'
import TemplatePagePost from './pages/post/TemplatePagePost.vue';
import ShowPost from './pages/post/ShowPost.vue';
import CreatePost from './pages/post/CreatePost.vue';
import EditPost from './pages/post/EditPost.vue';

const routes = [{
    path: '/', name: "home", component: Home
},
{
    path: '/user', name: "user", component: TemplatePage, children: [
        { path: '', name: "user", component: User },
        { path: ':id', name: "userId", component: ShowUser },
    ]
},
{
    path: '/post', name: "post", component: TemplatePagePost, children: [
        { path: '', name: "post", component: Post },
        { path: ':id', name: "postId", component: ShowPost },
        { path: 'create', name: "create", component: CreatePost },
        { path: 'edit/:id', name: "edit", component: EditPost },
    ]
}];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router