<template>
  <section class="timeline-section">
    <h2 class="section-title">지금까지 우리 이야기</h2>
    <div class="timeline-container">
      <div 
        v-for="(item, index) in timelineItems" 
        :key="item.id" 
        class="timeline-item-wrapper"
      >
        <div :ref="el => (itemRefs[index] = el)" class="timeline-item fade-in-element" :data-index="index">
          <div class="timeline-content">
            <p class="timeline-date">{{ item.eventDate }}</p>
            <p class="timeline-description" v-html="item.description"></p>
          </div>
          <div v-if="item.imageUrl" class="timeline-image-container">
            <img 
              :src="item.imageUrl" 
              :alt="item.description.replace(/<br>/g, ' ')" 
              class="timeline-image" 
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';

// 1. eager: true 옵션을 제거하여 이미지를 즉시 로드하지 않도록 변경합니다.
// 이제 imageModules는 이미지 경로와 '이미지를 로드하는 함수'의 묶음이 됩니다.
const imageModules = import.meta.glob('/src/assets/timeline/*.png');

// 2. 이미지 로더 함수의 경로를 순서대로 정렬합니다.
const sortedImagePaths = Object.keys(imageModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

// 3. 타임라인 데이터는 이전과 동일합니다.
const timelineEventData = [
  { id: 1, eventDate: '2024.02.08', description: '모든 것이 시작된,<br>설렘 가득했던 우리의 첫 만남' },
  { id: 2, eventDate: '2024.02.13', description: '조금씩 가까워지며<br>서로를 알아가던 시간들' },
  { id: 3, eventDate: '2024.02.16', description: '함께 본 첫 벚꽃은 아니지만<br>내년 봄을 기약하며' },
  { id: 4, eventDate: '2024.03.03', description: '이제는 손잡는 게<br>너무나 자연스러워' },
  { id: 5, eventDate: '2024.04.02', description: '<strong>우리의 첫 100일,</strong><br>서툴지만 진심 가득했던 하루' },

  // { id: 5, eventDate: '2024.05.17', description: '<strong>우리의 첫 100일,</strong><br>서툴지만 진심 가득했던 하루' },


  { id: 6, eventDate: '2024.04.06', description: '초여름의 공기를 마시며<br>함께 걸었던 공원 산책' },
  
  { id: 7, eventDate: '2024.04.07', description: '<strong>함께 떠난 첫 여름,</strong><br>뜨거운 햇살 아래 더 빛나던 너' },

  { id: 8, eventDate: '2024.04.11', description: '맛있는 거 먹으러 갔던 날,<br>너의 행복한 얼굴이 나의 행복' },

  { id: 9, eventDate: '2024.05.18', description: '<strong>어느새 200일,</strong><br>너와 함께하는 모든 날이 기념일이야' },

  { id: 10, eventDate: '2024.07.12', description: '가을밤, 나란히 앉아<br>별을 보며 나눈 이야기들' },

  { id: 11, eventDate: '2024.07.22', description: '예쁜 단풍잎을 닮은<br>너의 붉어진 두 뺨' },

  { id: 12, eventDate: '2024.08.02', description: '너와 나의 소소한 기념일,<br>빼빼로보다 달콤한 시간' },

  { id: 13, eventDate: '2024.08.25', description: '<strong>소중한 300일,</strong><br>겨울의 문턱에서 더 따뜻했던 우리' },


  { id: 14, eventDate: '2024.09.30', description: '<strong>첫 번째 크리스마스,</strong><br>반짝이는 트리와 너의 미소' },


  { id: 15, eventDate: '2024.10.26', description: '<strong>함께 맞이한 새해,</strong><br>올해도 잘 부탁해 내 사랑' },


  { id: 16, eventDate: '2024.11.24', description: '추운 겨울, 서로의 온기로<br>따뜻하게 보냈던 날들' },


  { id: 17, eventDate: '2024.12.03', description: '밸런타인데이의 달콤함보다<br>더 달콤한 너' },

  { id: 18, eventDate: '2024.12.15', description: '시간이 흘러도<br>우리의 사랑은 변치 않아' },

  { id: 19, eventDate: '2024.12.25', description: '<strong>어느덧 400일,</strong><br>함께 쌓아온 추억만큼 깊어진 우리' },

  { id: 20, eventDate: '2025.01.01', description: '<strong>흩날리는 벚꽃 아래,</strong><br>내년에도 함께하기로 약속' },

  { id: 21, eventDate: '2025.02.08', description: '너의 모든 순간을<br>사진으로 남기고 싶어' },

  { id: 22, eventDate: '2025.02.11', description: '함께 꾸는 미래,<br>생각만 해도 설레' },


  { id: 23, eventDate: '2025.03.13', description: '서로에게 힘이 되어주는<br>세상 가장 든든한 내 편' },

  { id: 24, eventDate: '2025.03.30', description: '500일을 며칠 앞두고,<br>괜히 더 두근거리는 마음' },

  { id: 25, eventDate: '2025.04.12', description: '지난 시간들을 돌아보며<br>함께 웃을 수 있어서 감사해' },
  { id: 26, eventDate: '2025.05.25', description: '<strong>그리고 오늘, 우리가 함께한 500일</strong><br>앞으로도 잘 부탁해 ❤️' },
  { id: 27, eventDate: '2025.06.20', description: '<strong>그리고 오늘, 우리가 함께한 500일</strong><br>앞으로도 잘 부탁해 ❤️' }
];

// 4. 타임라인 아이템을 만들 때, imageUrl은 일단 빈 값으로 둡니다.
const timelineItems = ref(timelineEventData.map((eventData, index) => ({
  ...eventData,
  imagePath: sortedImagePaths[index], // 이미지 로더 함수의 경로
  imageUrl: '', // 실제 이미지 URL (처음엔 비어있음)
})));


const itemRefs = ref([]);

onMounted(() => {
  // 5. IntersectionObserver를 사용해 아이템이 화면에 보일 때 이미지를 로드합니다.
  const observer = new IntersectionObserver(async (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const itemElement = entry.target;
        const index = parseInt(itemElement.dataset.index, 10);
        const item = timelineItems.value[index];

        // 아직 이미지 URL이 로드되지 않았다면 로드합니다.
        if (item && !item.imageUrl) {
          const imageLoader = imageModules[item.imagePath];
          if (imageLoader) {
            const module = await imageLoader();
            item.imageUrl = module.default; // 로드된 이미지 URL을 할당
          }
        }

        // 애니메이션 클래스를 추가하고, 더 이상 관찰하지 않습니다.
        itemElement.classList.add('visible');
        observer.unobserve(itemElement);
      }
    }
  }, {
    // 이미지가 화면에 보이기 200px 전에 미리 로딩을 시작합니다.
    rootMargin: '30px',
  });

  itemRefs.value.forEach((item) => {
    if (item) {
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

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 60px;
}

.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-container::after {
  content: '';
  position: absolute;
  width: 3px;
  background-color: var(--main-pink, #f8bbd0);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1.5px;
  z-index: 0;
}

.timeline-item-wrapper {
  position: relative;
  z-index: 1;
  margin-bottom: 40px;
}

.timeline-item {
  padding: 20px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: white;
  border: 4px solid var(--point-coral, #f08080);
  top: 20px;
  border-radius: 50%;
  z-index: 1;
}

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

.timeline-item-wrapper:nth-child(odd) .timeline-item {
  left: 0;
  padding-right: 40px;
  align-items: flex-end;
}
.timeline-item-wrapper:nth-child(odd) .timeline-content {
  text-align: right;
}
.timeline-item-wrapper:nth-child(odd) .timeline-item::after {
  right: -12px;
}

.timeline-item-wrapper:nth-child(even) .timeline-item {
  left: 50%;
  padding-left: 40px;
  align-items: flex-start;
}
.timeline-item-wrapper:nth-child(even) .timeline-item::after {
  left: -12px;
}

.timeline-date {
  font-size: 1rem;
  font-weight: bold;
  color: var(--point-coral, #f08080);
  margin-bottom: 8px;
}

.timeline-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-light, #555);
  margin: 0;
}

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
    align-items: flex-start !important;
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