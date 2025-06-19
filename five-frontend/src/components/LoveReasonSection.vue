<template>
  <section>
    <h2 class="section-title" v-scroll-fade-in>내가 사랑하는 너의 모습</h2>
    <div class="reasons-container">
      <div v-for="(item, index) in loveReasonItems" :key="item.id" class="reason-card" v-scroll-fade-in :style="{ transitionDelay: `${index * 100}ms` }">
        <p>{{ item.reason }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const loveReasonItems = ref([
  { id: 1, reason: '환하게 웃을 때 휘어지는 너의 눈웃음' },
  { id: 2, reason: '내 얘기를 항상 진지하게 들어주는 따뜻한 마음' },
  { id: 3, reason: '맛있는 음식을 보고 신나 하는 귀여운 모습' },
  { id: 4, reason: '가끔은 엉뚱하지만 그래서 더 사랑스러운 너' },
  { id: 5, reason: '나를 세상에서 가장 멋진 사람으로 만들어주는 너의 말' },
  { id: 6, reason: '함께 있을 때 편안하고 포근한 분위기' },
  { id: 7, reason: '나의 작은 습관까지 기억해주는 세심함' },
  { id: 8, reason: '꿈을 향해 노력하는 너의 열정적인 모습' },
]);
</script>

<style scoped>
.reasons-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.reason-card { background-color: #fffde7; border: 1px solid #fff9c4; padding: 25px; border-radius: 10px; box-shadow: 3px 3px 8px rgba(0,0,0,0.05); width: calc(50% - 20px); text-align: center; transform: rotate(-2deg); transition: all 0.3s; }
.reason-card:nth-child(even) { transform: rotate(2deg); background-color: #fce4ec; border-color: #f8bbd0; }
.reason-card:hover { transform: scale(1.1) rotate(0deg); z-index: 10; box-shadow: 5px 5px 15px rgba(0,0,0,0.1); }
</style>