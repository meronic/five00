<template>
  <section class="love-section">
    <h2 class="section-title" v-scroll-fade-in>내가 사랑하는 너의 모든 것</h2>
    
    <div class="columns-wrapper" v-scroll-fade-in>
      <div class="column">
        <h3 class="column-title">너의 모습</h3>
        <div 
          v-for="(item, index) in loveLooksItems" 
          :key="item.id" 
          class="reason-card looks-card" 
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <p>{{ item.content }}</p>
        </div>
      </div>
      
      <div class="column">
        <h3 class="column-title">사랑하는 이유</h3>
        <div 
          v-for="(item, index) in loveReasonsItems" 
          :key="item.id" 
          class="reason-card reason-card--style2"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// '내가 사랑하는 너의 모습'에 해당하는 데이터
const loveLooksItems = ref([
  { id: 1, content: '환하게 웃을 때 휘어지는 너의 눈웃음' },
  { id: 2, content: '맛있는 음식을 보고 신나 하는 귀여운 모습' },
  { id: 3, content: '꿈을 향해 노력하는 너의 열정적인 모습' },
  { id: 4, content: '나를 바라볼 때 사랑이 가득 담긴 눈빛' },
]);

// '내가 사랑하는 이유'에 해당하는 데이터
const loveReasonsItems = ref([
  { id: 1, content: '내 얘기를 항상 진지하게 들어주는 따뜻한 마음' },
  { id: 2, content: '나의 작은 습관까지 기억해주는 세심함' },
  { id: 3, content: '함께 있을 때 느껴지는 편안하고 포근한 분위기' },
  { id: 4, content: '나를 세상에서 가장 멋진 사람으로 만들어주는 너의 말' },
  { id: 5, content: '가끔은 엉뚱하지만 그래서 더 사랑스러운 너' },
]);
</script>

<style scoped>
.section-title {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

/* 두 컬럼을 감싸는 flex 컨테이너 */
.columns-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px; /* 컬럼 사이의 간격 */
  align-items: flex-start; /* 컬럼 상단 정렬 */
  padding: 1rem;
}

/* 개별 컬럼 */
.column {
  flex: 1; /* 컬럼이 가능한 공간을 균등하게 차지 */
  max-width: 400px; /* 컬럼의 최대 너비 제한 */
  display: flex;
  flex-direction: column;
  gap: 20px; /* 카드 사이의 간격 */
}

.column-title {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 0.5rem;
}

/* 모든 카드의 공통 스타일 */
.reason-card {
  padding: 25px;
  border-radius: 10px;
  box-shadow: 3px 3px 8px rgba(0,0,0,0.05);
  width: 100%; /* 컬럼 너비에 꽉 차도록 설정 */
  text-align: center;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
}

/* 호버 효과 */
.reason-card:hover {
  transform: scale(1.05) rotate(0deg) !important;
  z-index: 10;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
}

/* --- 스타일 그룹 1: 너의 모습 (따뜻한 색상 계열) --- */
.looks-card {
  background-color: #fffde7;
  border-color: #fff9c4;
  transform: rotate(-1.5deg);
}
.looks-card:nth-child(even) {
  background-color: #fce4ec;
  border-color: #f8bbd0;
  transform: rotate(1.5deg);
}

/* --- 스타일 그룹 2: 사랑하는 이유 (시원한 색상 계열) --- */
.reason-card--style2 {
  background-color: #e3f2fd;
  border-color: #bbdefb;
  transform: rotate(1.5deg);
}
.reason-card--style2:nth-child(even) {
  background-color: #e8f5e9;
  border-color: #c8e6c9;
  transform: rotate(-1.5deg);
}

/* 모바일 화면 대응 (화면 너비 768px 이하) */
@media (max-width: 768px) {
  .columns-wrapper {
    flex-direction: column; /* 컬럼을 세로로 쌓음 */
    align-items: center; /* 가운데 정렬 */
    gap: 40px; /* 세로로 쌓일 때의 간격 */
  }
  .column {
    width: 90%; /* 모바일에서 컬럼 너비 조정 */
    max-width: 400px;
  }
}
</style>