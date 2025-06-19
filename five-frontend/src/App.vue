<template>
  <div v-if="isAuthenticated" id="app-container">
    <IntroSection />
    
    <main>
      <TimelineSection />
      <GallerySection />
      <LoveReasonSection />
      <LetterSection />
      <CouponSection />
    </main>

    <footer>
      <p>앞으로 1000일, 10000일도 함께하자, 은서야. 사랑해 ❤️</p>
    </footer>
  </div>

  <div v-else class="entry-gate">
    <div class="entry-box">
      <h1>❤️</h1>
      <h2>우리의 코드를 입력해줘</h2>
      <input 
        v-model="inputCode" 
        @keyup.enter="checkCode"
        type="password" 
        placeholder="******"
        maxlength="6"
      >
      <button @click="checkCode">입장하기</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import IntroSection from './components/IntroSection.vue';
import TimelineSection from './components/TimelineSection.vue';
import GallerySection from './components/GallerySection.vue';
import LoveReasonSection from './components/LoveReasonSection.vue';
import LetterSection from './components/LetterSection.vue';
import CouponSection from './components/CouponSection.vue';

// --- 진입 코드 로직 ---
const isAuthenticated = ref(false);
const inputCode = ref('');
const errorMessage = ref('');

const checkCode = () => {
  if (inputCode.value === '240208') {
    isAuthenticated.value = true;
  } else {
    errorMessage.value = '코드가 일치하지 않아요. 다시 확인해줘! 😉';
    inputCode.value = ''; // 입력창 비우기
    // 잠시 후 에러 메시지 사라지게 하기
    setTimeout(() => {
      errorMessage.value = '';
    }, 2000);
  }
};
// --------------------
</script>

<style scoped>
.entry-gate {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--bg-light);
}

.entry-box {
  background: white;
  padding: 40px 50px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  text-align: center;
}

.entry-box h1 {
  font-size: 3rem;
  color: var(--point-coral);
  margin: 0;
}

.entry-box h2 {
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: 25px;
}

.entry-box input {
  font-size: 1.5rem;
  padding: 10px;
  width: 150px;
  text-align: center;
  border: 2px solid #eee;
  border-radius: 10px;
  letter-spacing: 5px;
}

.entry-box input:focus {
  outline: none;
  border-color: var(--main-pink);
}

.entry-box button {
  display: block;
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  background-color: var(--point-coral);
  color: white;
  font-size: 1.2rem;
  font-family: 'Gowun Dodum', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;
}

.entry-box button:hover {
  background-color: #d66a6a;
}

.error-message {
  color: var(--point-coral);
  margin-top: 15px;
  height: 20px;
}

footer {
  text-align: center;
  padding: 40px;
  background-color: var(--main-pink);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>