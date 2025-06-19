<template>
  <section class="vault-section">
    <h2 class="section-title" v-scroll-fade-in>미래를 약속하는 우리만의 금고</h2>
    <p class="section-subtitle" v-scroll-fade-in>상자를 클릭해서 나의 약속을 확인해줘</p>
    <div class="vault-container">
      <div 
        v-for="(promise, index) in promises" 
        :key="index"
        class="vault-box"
        :class="{ unlocked: promise.unlocked }"
        @click="toggleLock(index)"
        v-scroll-fade-in
        :style="{ transitionDelay: `${index * 150}ms` }"
      >
        <div class="vault-header">
          <span>{{ promise.unlocked ? '🔓 약속 확인 완료!' : '🔒 약속을 확인하려면 클릭' }}</span>
        </div>
        <div class="promise-content">
          <p v-if="promise.unlocked">{{ promise.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// OOO 부분에 본인의 다짐을 직접 적어주세요!
const promises = ref([
  { text: '사소한 일에도 항상 은서 편이 되어줄게.', unlocked: false },
  { text: '힘들 때 기댈 수 있는 가장 든든한 나무가 되어줄게.', unlocked: false },
  { text: '매일 한 번 이상 예쁘다고, 사랑한다고 표현할게.', unlocked: false },
  { text: '은서의 꿈을 누구보다 가장 큰 목소리로 응원할게.', unlocked: false },
  { text: '함께 맛있는 거 많이 먹고, 좋은 곳 많이 여행하며 행복한 추억으로 가득 채울게.', unlocked: false },
  { text: '지금처럼, 그리고 지금보다 더, 변치 않고 사랑할게.', unlocked: false },
]);

const toggleLock = (index) => {
  promises.value[index].unlocked = !promises.value[index].unlocked;
};
</script>

<style scoped>
.vault-section {
  background: var(--bg-light);
}
.section-subtitle {
  text-align: center;
  margin-top: -30px;
  margin-bottom: 40px;
  color: var(--text-light);
}
.vault-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}
.vault-box {
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
.vault-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  border-color: var(--main-pink);
}
.vault-header {
  font-weight: bold;
  color: var(--text-light);
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
}
.promise-content {
  text-align: center;
  font-size: 1.2rem;
  color: var(--point-coral);
  font-weight: bold;
  min-height: 50px; /* 내용이 없을 때도 높이 유지 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.vault-box.unlocked {
  border-color: var(--point-coral);
  background-color: #fff8f8;
}
.vault-box.unlocked .vault-header {
  color: var(--point-coral);
}
</style>