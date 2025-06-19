<template>
  <section class="promise-section">
    <h2 class="section-title">앞으로도, 항상 지켜갈 내 마음</h2>
    <p class="section-subtitle">내가 너에게 약속할 수 있는 것들을 적어봤어</p>

    <div class="card-list">
      <div 
        v-for="(promise, index) in promises" 
        :key="index" 
        class="card"
        :class="{ opened: promise.unlocked }"
        @click="toggle(index)"
      >
        <div v-if="promise.unlocked" class="promise-text">
    {{ promise.text }}
  </div>
  <div v-else class="locked-state">
    <span class="lock-icon">🔒</span>
    <span class="click-msg">{{ orderLabels[index] }}</span>
  </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const orderLabels = [
  '첫번째 약속', '두번째 약속', '세번째 약속',
  '네번째 약속', '다섯번째 약속', '여섯번째 약속'
]


const promises = ref([
  { text: '매일 너를 예쁘다고 말해줄게 (평생)', unlocked: false },
  { text: '어떤 순간에도 항상 네 편이 될게 (무조건)', unlocked: false },
  { text: '힘들 땐 항상 곁에 있어줄게 (절대안감)', unlocked: false },
  { text: '네가 웃을 수 있도록 노력할게 (날 물어)', unlocked: false },
  
  { text: '어떤 순간에도 변하지 않을게 (약속)', unlocked: false },
  { text: '앞으로도, 매일 너를 사랑할게 평생', unlocked: false }
])

const toggle = (index) => {
  promises.value[index].unlocked = !promises.value[index].unlocked
}
</script>

<style scoped>
/* Section */
.promise-section {
  background: var(--bg-light, #fdf8f6);
  padding: 3rem 1.5rem;
  text-align: center;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--text-light, #888);
  margin-bottom: 2.5rem;
  line-height: 1.5;
}

/* Card Grid */
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

/* Card */
.card {
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  padding: 2rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.card:hover {
  border-color: var(--main-pink, #ffb6b9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.card.opened {
  border-color: var(--point-coral, #ff6f61);
  background-color: #fff5f5;
}

/* Locked */
.locked-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;
}

.lock-icon {
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
}

.click-msg {
  font-size: 0.95rem;
}

/* Unlocked */
.promise-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--point-coral, #ff6f61);
  line-height: 1.5;
  padding: 0 10px;
}

/* Mobile */
@media (max-width: 640px) {
  .section-title {
    font-size: 1.5rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .card {
    min-height: 120px;
    padding: 1.5rem 1rem;
  }

  .promise-text {
    font-size: 1rem;
  }
}
</style>
