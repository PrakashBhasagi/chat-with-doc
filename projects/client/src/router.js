import { createRouter, createWebHashHistory } from 'vue-router';
import Upload from './views/Upload.vue';
import Chat from './views/Chat.vue';
import DocList from './views/DocList.vue';
import CollectionChat from './views/CollectionChat.vue';

const routes = [
  {
    path: '/',
    redirect: {
      path: '/upload',
    },
  },
  {
    name: 'upload',
    path: '/upload',
    component: Upload,
  },
  {
    name: 'chat',
    path: '/chat/:id',
    component: Chat,
  },
  {
    name: 'collectiontChat',
    path: '/collection/chat/:id',
    component: CollectionChat,
  },
  {
    path: '/documents',
    component: DocList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
