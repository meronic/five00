// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// 1. 방금 만든 애니메이션 디렉티브를 가져옵니다.
import scrollAnimation from './directives/scrollAnimation'

const app = createApp(App)

// 2. 'scroll-fade-in' 이라는 이름으로 앱 전체에 등록합니다.
//    이제 어떤 컴포넌트에서든 v-scroll-fade-in 이라는 속성을 쓸 수 있습니다.
app.directive('scroll-fade-in', scrollAnimation)

app.mount('#app')