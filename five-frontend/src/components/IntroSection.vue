<template>
  <header class="intro-section">
    <div v-if="isDday" class="dday-message" v-scroll-fade-in>
      🎉 드디어 오늘이 우리의 500일이야! 🎉
    </div>

    <h1 v-scroll-fade-in>사랑하는 은서에게</h1>
    <h2 v-scroll-fade-in :style="{transitionDelay: '200ms'}">
      우리가 함께한 500일을 축하하며
    </h2>
    <p v-scroll-fade-in :style="{transitionDelay: '400ms'}">
      2024.02.08 ~ 2025.06.21
    </p>

        
    <div class="scroll-down" :style="{transitionDelay: '800ms'}">↓</div>

    <p v-scroll-fade-in :style="{transitionDelay: '400ms'}">
      아래로 스크롤해서 내려가요
    </p>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const D_DAY = new Date('2025-06-20T00:00:00');
const timeRemaining = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
const isDday = ref(false);
let intervalId;

const updateCountdown = () => {
  const now = new Date();
  const difference = D_DAY - now;
  
  // 오늘 날짜 확인
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const ddayDate = new Date(D_DAY.getFullYear(), D_DAY.getMonth(), D_DAY.getDate());
  if (today.getTime() === ddayDate.getTime()) {
    isDday.value = true;
  }

  if (difference > 0) {
    timeRemaining.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  } else {
    // 500일이 지나면 카운트다운 멈춤
    clearInterval(intervalId);
  }
};

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>

.intro-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1502318217862-aa4e294ba65b?q=80&w=2070&auto=format&fit=crop');
  background-size: 100%; /* 시작 크기 */
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  animation: zoom-in 25s forwards; /* 25초 동안 줌인 애니메이션 */
}

@keyframes zoom-in {
  from { background-size: 100%; }
  to { background-size: 110%; }
}

/* 이전 스타일은 그대로 두고 아래 스타일만 추가하거나 수정합니다. */
.countdown {
  margin-top: 30px;
  font-size: 1.2rem;
  background: rgba(0,0,0,0.25);
  padding: 10px 20px;
  border-radius: 10px;
}
.countdown span {
  font-size: 1.5rem;
  color: var(--main-pink);
  font-weight: bold;
}
.dday-message {
  position: absolute;
  top: 20px;
  background-color: var(--point-coral);
  color: white;
  padding: 10px 25px;
  border-radius: 20px;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* 기존 IntroSection 스타일... */
.intro-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1502318217862-aa4e294ba65b?q=80&w=2070&auto=format&fit=crop') no-repeat center center/cover;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
}
.intro-section h1 { font-size: 3rem; margin: 0; }
.intro-section h2 { font-size: 1.5rem; }
.scroll-down {
  margin-top: 50px;
  font-size: 2rem;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
}

.intro-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1502318217862-aa4e294ba65b?q=80&w=2070&auto=format&fit=crop');
  background-size: 100%; /* 시작 크기 */
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  animation: zoom-in 25s forwards; /* 25초 동안 줌인 애니메이션 */
}

@keyframes zoom-in {
  from { background-size: 100%; }
  to { background-size: 110%; }
}



</style>