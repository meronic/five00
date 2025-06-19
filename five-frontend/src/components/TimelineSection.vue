<template>
  <section class="timeline-section">
    <h2 class="section-title">우리의 발자취</h2>
    <div class="timeline-container">
      <div 
        v-for="(item, index) in timelineItems" 
        :key="item.id" 
        class="timeline-item-wrapper"
      >
        <div :ref="el => (itemRefs[index] = el)" class="timeline-item fade-in-element">
          <div class="timeline-content">
            <p class="timeline-date">{{ item.eventDate }}</p>
            <p class="timeline-description" v-html="item.description"></p>
          </div>
          <div v-if="item.imageUrl" class="timeline-image-container">
            <img :src="item.imageUrl" :alt="item.description.replace(/<br>/g, ' ')" class="timeline-image">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 타임라인에 표시될 데이터 (100일 단위 기념일 추가)
const timelineItems = ref([
  { id: 1, eventDate: '2024.02.08', description: '어색했지만 설렘 가득했던<br>우리의 첫 만남', imageUrl: 'https://placehold.co/600x400/f8bbd0/333?text=첫만남' },
  { id: 2, eventDate: '2024.03.15', description: '처음으로 손 잡았던 날,<br>심장이 터지는 줄 알았어', imageUrl: 'https://placehold.co/600x400/f08080/FFF?text=첫손' },
  { id: 3, eventDate: '2024.05.17', description: '우리의 100일,<br>서툴지만 진심 가득했던 선물 교환', imageUrl: 'https://placehold.co/600x400/fff5f8/333?text=100일' },
  { id: 4, eventDate: '2024.08.15', description: '함께 떠난 첫 여름 휴가,<br>뜨거운 햇살과 시원한 바다', imageUrl: 'https://placehold.co/600x400/a2d2ff/FFF?text=여름휴가' },
  // --- [추가된 데이터 1] ---
  { id: 5, eventDate: '2024.08.25', description: '어느새 200일,<br>너와 함께하는 모든 날이 기념일이야', imageUrl: 'https://placehold.co/600x400/8ecae6/FFF?text=200일' },
  { id: 6, eventDate: '2024.10.20', description: '함께 걸었던 가을 단풍길,<br>너의 얼굴이 단풍보다 예뻤어', imageUrl: 'https://placehold.co/600x400/c97c5d/FFF?text=가을' },
  { id: 7, eventDate: '2024.12.04', description: '소소하지만 그래서 더 행복했던<br>우리의 300일', imageUrl: 'https://placehold.co/600x400/f4a261/333?text=300일' },
  { id: 8, eventDate: '2024.12.25', description: '처음으로 함께 보낸 크리스마스,<br>반짝이는 트리와 너의 미소', imageUrl: 'https://placehold.co/600x400/e63946/FFF?text=X-MAS' },
  { id: 9, eventDate: '2025.01.01', description: '새해 첫날, 함께 일출을 보며<br>소원을 빌었지', imageUrl: 'https://placehold.co/600x400/fca311/333?text=새해' },
  // --- [추가된 데이터 2] ---
  { id: 10, eventDate: '2025.03.14', description: '벌써 400일이라니!<br>시간이 정말 빠른 것 같아', imageUrl: 'https://placehold.co/600x400/219ebc/FFF?text=400일' },
  { id: 11, eventDate: '2025.04.05', description: '흩날리는 벚꽃 아래에서,<br>내년 봄도 함께하기로 약속', imageUrl: 'https://placehold.co/600x400/ffc2d1/333?text=벚꽃' },
  { id: 12, eventDate: '2025.06.21', description: '그리고 오늘,<br>우리가 함께한 500일 ❤️', imageUrl: 'https://placehold.co/600x400/ffafcc/333?text=500일' }
]);

// 스크롤 애니메이션을 위한 로직
const itemRefs = ref([]); 

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1
  });

  itemRefs.value.forEach((item, index) => {
    if (item) {
      item.style.transitionDelay = `${index * 200}ms`;
      observer.observe(item);
    }
  });
});
</script>

<style scoped>
.timeline-section {
  position: relative;
  background-color: white;
  padding: 80px 20px;
}

.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

/* 타임라인 중앙선 스타일 */
.timeline-container::after {
  content: '';
  position: absolute;
  width: 3px;
  background-color: var(--main-pink);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1.5px;
  z-index: 0;
}

.timeline-item-wrapper {
  position: relative;
  z-index: 1;
  margin-bottom: 40px; /* 아이템 간격 */
}

.timeline-item {
  padding: 20px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* 타임라인 아이템의 점(dot) 스타일 */
.timeline-item::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: white;
  border: 4px solid var(--point-coral);
  top: 20px;
  border-radius: 50%;
  z-index: 1;
}

/* 텍스트와 이미지 영역 */
.timeline-content {
  margin-bottom: 15px;
}

.timeline-image-container {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  overflow: hidden;
}

.timeline-image {
  display: block;
  width: 100%;
  height: auto;
}

/* 홀수 번째 아이템 (왼쪽) */
.timeline-item-wrapper:nth-child(odd) .timeline-item {
  left: 0;
  padding-right: 40px;
  align-items: flex-end; /* 콘텐츠 오른쪽 정렬 */
}
.timeline-item-wrapper:nth-child(odd) .timeline-content {
  text-align: right;
}
.timeline-item-wrapper:nth-child(odd) .timeline-item::after {
  right: -12px;
}

/* 짝수 번째 아이템 (오른쪽) */
.timeline-item-wrapper:nth-child(even) .timeline-item {
  left: 50%;
  padding-left: 40px;
  align-items: flex-start; /* 콘텐츠 왼쪽 정렬 */
}
.timeline-item-wrapper:nth-child(even) .timeline-item::after {
  left: -12px;
}

.timeline-date {
  font-size: 1rem;
  font-weight: bold;
  color: var(--point-coral);
  margin-bottom: 8px;
}

.timeline-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-light);
  margin: 0;
}


/* 모바일 화면에서는 타임라인을 한 줄로 표시 */
@media screen and (max-width: 768px) {
  .timeline-section {
    padding: 60px 20px;
  }
  .timeline-container::after {
    left: 20px;
  }
  .timeline-item {
    width: 100%;
    padding: 0;
    align-items: flex-start !important; /* 모바일에서는 모두 왼쪽 정렬 */
  }
  .timeline-item-wrapper:nth-child(odd) .timeline-item,
  .timeline-item-wrapper:nth-child(even) .timeline-item {
    left: 0;
    padding-left: 45px;
  }
  .timeline-content {
    text-align: left !important;
  }
  .timeline-item::after,
  .timeline-item-wrapper:nth-child(odd) .timeline-item::after, 
  .timeline-item-wrapper:nth-child(even) .timeline-item::after {
    left: 11px;
  }
}
</style>