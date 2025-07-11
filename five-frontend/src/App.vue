<template>
  <FallingPetals />

  <div v-if="currentScreen === 'entry'" class="entry-gate">
    <div class="entry-box">
      <p class="days-passed">
        우리가 사랑한지 <span class="day-number">{{ daysPassed }}</span>일째
      </p>

      <div class="countdown">
        <span>{{ timeRemaining.days }}</span>일
        <span>{{ timeRemaining.hours }}</span>시간
        <span>{{ timeRemaining.minutes }}</span>분
        <span>{{ timeRemaining.seconds }}</span>초 후
        <br>
        우리 500일
      </div>

      <h2>코드를 입력해 주세요</h2>
      <input v-model="inputCode" @keyup.enter="checkCode" type="password" placeholder="******" maxlength="6" autofocus>
      <button @click="checkCode">입장하기</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>

  <div v-else-if="currentScreen === 'messages'" class="welcome-gate" @click="nextMessage">
    <Transition name="fade" mode="out-in">
      <p class="welcome-text" :key="currentMessageIndex" v-html="messages[currentMessageIndex]"></p>
    </Transition>
    <div class="continue-prompt">(클릭해서 계속하기)</div>
  </div>

  <div v-else-if="currentScreen === 'main'" id="app-container">
    <IntroSection />
    <main>
      <TimelineSection />
      <GallerySection />
      <LoveReasonSection />
      <PromiseVault />
      <!-- <QuizSection /> -->
      <LetterSection />
      <!-- <CouponSection /> -->
    </main>
    <footer>
      <p>앞으로 1000일, 10000일도 함께하자, 은서야. 사랑해 ❤️</p>
      <span>2025년 6월 21일, 사랑을 담아</span>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import FallingPetals from './components/FallingPetals.vue';
import IntroSection from './components/IntroSection.vue';
import TimelineSection from './components/TimelineSection.vue';
import GallerySection from './components/GallerySection.vue';
import LoveReasonSection from './components/LoveReasonSection.vue';
import QuizSection from './components/QuizSection.vue';
import LetterSection from './components/LetterSection.vue';
import PromiseVault from './components/PromiseVault.vue';
import CouponSection from './components/CouponSection.vue';

// --- 상태 관리 ---
const currentScreen = ref('entry');
const inputCode = ref('');
const errorMessage = ref('');

// --- 순차 메시지 로직 ---
const messages = ref([
  "안녕 여보?",
  "오늘 우리 만난지 500일 되는 날이야.",
  "지금 내가 멋진 선물은 못해줘도 <br>어떻게 하면 내 마음을 전할 수 있을까 고민하다가",
  "그나마 잘 할 수 있는걸로 준비해봤어",
  "여보를 위한 하나밖에 없는 공간이니까",
  "예쁘게 봐줬으면 해 <br>항상 고맙고, 많이 사랑해.",
  "그럼 시작할게!"

]);
const currentMessageIndex = ref(0);

// --- 함수 로직 ---
const checkCode = () => {
  if (inputCode.value === '240208') {
    currentScreen.value = 'messages';
  } else {
    errorMessage.value = '내가 볶음밥 해준다고 한 날 🍳';
    inputCode.value = '';
    setTimeout(() => { errorMessage.value = ''; }, 2000);
  }
};

const nextMessage = () => {
  if (currentMessageIndex.value < messages.value.length - 1) {
    currentMessageIndex.value++;
  } else {
    currentScreen.value = 'main';
  }
};

// --- 카운트다운 & 만난 날짜 계산 로직 ---
const D_DAY = new Date('2025-06-21T00:00:00');
const START_DAY = new Date('2024-02-08T00:00:00');
const timeRemaining = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
const daysPassed = ref(0);
let intervalId;

const updateCounters = () => {
  const now = new Date();

  // D-Day 카운트다운 계산
  const difference = D_DAY - now;
  if (difference > 0) {
    timeRemaining.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  } else {
    timeRemaining.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    clearInterval(intervalId);
  }

  // 만난 날짜 계산 로직
  const passedDifference = now - START_DAY;
  daysPassed.value = Math.floor(passedDifference / (1000 * 60 * 60 * 24)) + 1;
};

onMounted(() => {
  updateCounters();
  intervalId = setInterval(updateCounters, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* 👇 '만난 지 N일째' 스타일 추가 */
.days-passed {
  font-size: 1.3rem;
  color: var(--text-dark);
  margin-bottom: 10px;
}
.days-passed .day-number {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--point-coral);
}

/* 카운트다운 스타일 */
.countdown { margin-bottom: 25px; font-size: 1.1rem; color: var(--text-light); background: var(--bg-light); padding: 10px 15px; border-radius: 10px; }
.countdown span { font-size: 1.6rem; color: var(--point-coral); font-weight: bold; }

/* 환영 메시지 스타일 */
.welcome-gate { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; background: var(--bg-light); padding: 20px; cursor: pointer; box-sizing: border-box; }

/* ❗️ [수정] 텍스트 영역이 화면 너비에 맞게 유동적으로 변하도록 수정 */
.welcome-text {
  font-size: 1.8rem;
  color: var(--text-dark);
  text-align: center;
  line-height: 1.6;
  width: 90%; /* 화면 너비의 90%를 사용 */
  max-width: 800px; /* PC 등 큰 화면에서는 최대 800px을 넘지 않도록 하여 가독성 유지 */
}

.continue-prompt { position: absolute; bottom: 40px; color: #aaa; font-size: 1rem; animation: blink 1.5s infinite ease-in-out; }
@keyframes blink { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

/* 메시지 전환 애니메이션 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* 푸터 스타일 */
footer { text-align: center; padding: 40px; background-color: var(--main-pink); color: white; }
footer p { font-size: 1.2rem; font-weight: bold; margin: 0 0 10px 0; }
footer span { font-size: 0.9rem; opacity: 0.9; }

/* 진입 코드 화면 스타일 */
.entry-gate { display: flex; justify-content: center; align-items: center; width: 100vw; height: 100vh; background: var(--bg-light); }
.entry-box { background: white; padding: 40px 50px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); text-align: center; }
.entry-box h1 { font-size: 3rem; color: var(--point-coral); margin: 0; }
.entry-box h2 { font-size: 1.5rem; color: var(--text-dark); margin-bottom: 25px; }
.entry-box input { font-size: 1.5rem; padding: 10px; width: 150px; text-align: center; border: 2px solid #eee; border-radius: 10px; letter-spacing: 5px; }
.entry-box input:focus { outline: none; border-color: var(--main-pink); }
.entry-box button { display: block; width: 100%; padding: 15px; margin-top: 20px; border: none; border-radius: 10px; background-color: var(--point-coral); color: white; font-size: 1.2rem; font-family: 'Gowun Dodum', sans-serif; cursor: pointer; transition: background-color 0.2s; }
.entry-box button:hover { background-color: #d66a6a; }
.error-message { color: var(--point-coral); margin-top: 15px; height: 20px; }

* {
  -webkit-tap-highlight-color: transparent;
}

</style>