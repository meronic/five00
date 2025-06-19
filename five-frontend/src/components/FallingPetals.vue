<template>
  <div class="petals-container">
    <div v-for="i in 15" :key="i" class="petal"></div>
  </div>
</template>

<style scoped>
.petals-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 999;
}
.petal {
  position: absolute;
  background-color: var(--main-pink);
  border-radius: 0 50% 50% 50%;
  opacity: 0.8;
  animation: fall 10s linear infinite;
}
@keyframes fall {
  0% { transform: translateY(-100px) rotate(0deg); }
  100% { transform: translateY(100vh) rotate(720deg); }
}
/* 각 꽃잎에 랜덤한 시작 위치와 애니메이션 딜레이, 크기를 부여합니다. */
.petal:nth-child(1) { left: 10%; width: 20px; height: 20px; animation-delay: 0s; }
.petal:nth-child(2) { left: 20%; width: 10px; height: 10px; animation-delay: -5s; animation-duration: 12s; }
.petal:nth-child(3) { left: 30%; width: 20px; height: 20px; animation-delay: -2s; }
.petal:nth-child(4) { left: 40%; width: 15px; height: 15px; animation-delay: -8s; animation-duration: 15s; }
.petal:nth-child(5) { left: 50%; width: 10px; height: 10px; animation-delay: -1s; }
.petal:nth-child(6) { left: 60%; width: 20px; height: 20px; animation-delay: -4s; }
.petal:nth-child(7) { left: 70%; width: 10px; height: 10px; animation-delay: -6s; animation-duration: 11s; }
.petal:nth-child(8) { left: 80%; width: 15px; height: 15px; animation-delay: -3s; }
.petal:nth-child(9) { left: 90%; width: 10px; height: 10px; animation-delay: -9s; animation-duration: 13s; }
.petal:nth-child(10) { left: 5%;  width: 15px; height: 15px; animation-delay: -7s; }
/* ... 나머지 꽃잎들도 유사하게 설정 ... */
</style>