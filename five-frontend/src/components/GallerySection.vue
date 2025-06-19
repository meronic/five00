<template>
  <section class="album-section">
    <h2 class="section-title" v-scroll-fade-in>우리 앨범</h2>
    <div class="gallery-grid">
      <div
        v-for="(photo, index) in photoItems"
        :key="photo.id"
        class="gallery-item"
        v-scroll-fade-in
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <img :src="photo.imageUrl" :alt="photo.caption" />
        <div class="caption">{{ photo.caption }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const photoItems = ref([
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1920&auto=format&fit=crop', caption: '#웃음빵터진날' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?q=80&w=1920&auto=format&fit=crop', caption: '#맛집탐방' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1523413700524-84f7e28f2d59?q=80&w=1920&auto=format&fit=crop', caption: '#여행의추억' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1920&auto=format&fit=crop', caption: '#너의예쁜모습' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1920&auto=format&fit=crop', caption: '#멍때릴때도귀여워' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1602526216438-2cfc1aa7e8b7?q=80&w=1920&auto=format&fit=crop', caption: '#함께걷던거리' },
  { id: 7, imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop', caption: '#손잡고어디든' },
  { id: 8, imageUrl: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1920&auto=format&fit=crop', caption: '#우리들의피크닉' },
  { id: 9, imageUrl: 'https://images.unsplash.com/photo-1530639836701-ec05b7b8e56e?q=80&w=1920&auto=format&fit=crop', caption: '#노을지는바다' },
  { id: 10, imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop', caption: '#함께만든요리' },
  { id: 11, imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop', caption: '#첫눈오던날' },
  { id: 12, imageUrl: 'https://images.unsplash.com/photo-1513617334022-96e6d6c3099a?q=80&w=1920&auto=format&fit=crop', caption: '#작은선물큰기쁨' }
]);
</script>

<style scoped>
.album-section {
  background-color: var(--bg-light); /* 공통 배경 적용 */
  padding: 3rem 1.5rem;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  color: #333;
}

.section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  background-color: #ff8ba7;
  margin: 0.5rem auto 0;
  border-radius: 2px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* PC: 2장 */
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr; /* 모바일: 1장 */
  }
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.gallery-item img {
  width: 100%;
  height: 340px; /* 크기 키움 */
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

@media (max-width: 640px) {
  .gallery-item img {
    height: 300px; /* 모바일 크기 약간 축소 */
  }
}

.gallery-item:hover img {
  transform: scale(1.06);
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 14px 16px;
  font-size: 0.95rem;
  color: #fff;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  font-weight: 500;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
