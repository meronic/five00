<template>
  <section>
    <h2 class="section-title" v-scroll-fade-in>추억 앨범</h2>
    <div class="gallery-grid">
      <div v-for="(photo, index) in photoItems" :key="photo.id" class="gallery-item" v-scroll-fade-in :style="{ transitionDelay: `${index * 100}ms` }">
        <img :src="photo.imageUrl" :alt="photo.caption">
        <div class="caption">{{ photo.caption }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const photoItems = ref([
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1928&auto=format&fit=crop', caption: '#웃음빵터진날' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop', caption: '#맛집탐방' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1527632911563-ee5b6d5344b6?q=80&w=1887&auto=format&fit=crop', caption: '#여행의추억' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1594744806548-993457ea2eca?q=80&w=1887&auto=format&fit=crop', caption: '#너의예쁜모습' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1505373333342-c8411a309341?q=80&w=1887&auto=format&fit=crop', caption: '#멍때릴때도귀여워' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1523424228392-729815c54049?q=80&w=1887&auto=format&fit=crop', caption: '#함께걷던거리' },
]);
</script>

<style scoped>
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
.gallery-item { position: relative; overflow: hidden; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.08); }
.gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
.gallery-item:hover img { transform: scale(1.1); }
.caption { position: absolute; bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); color: white; width: 100%; text-align: right; padding: 20px 15px; font-size: 1rem; }
</style>