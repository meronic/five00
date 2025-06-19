<template>
  <header class="intro-section">
    <div class="intro-content">
      <h1 class="fade-in-up-1">사랑하는 은서에게</h1>
      <h2 class="fade-in-up-2">함께한 500일, 고마워</h2>
      <p class="fade-in-up-3">2024.02.08 ~ 2025.06.21</p>
    </div>

    <div class="scroll-down fade-in-up-4">
      <span>우리 이야기 보러가기</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </header>
</template>

<style scoped>
.intro-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background-color: #fffdfc;
  color: #333;
  padding: 0 20px;
  font-family: 'Gowun Dodum', sans-serif;
}

.intro-content {
  z-index: 1;
}

.intro-section h1 {
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #e57373;
}

.intro-section h2 {
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 16px;
  color: #666;
}

.intro-section p {
  font-size: 1rem;
  color: #888;
}

.scroll-down {
  position: absolute;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  animation: soft-bounce 2.5s infinite;
  opacity: 0.85;
}

.scroll-down span {
  font-size: 0.9rem;
}

.scroll-down svg path {
  stroke: #888;
}

@keyframes soft-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up-1 { animation: fade-in-up 1s ease-out forwards; }
.fade-in-up-2 { opacity: 0; animation: fade-in-up 1s ease-out 0.5s forwards; }
.fade-in-up-3 { opacity: 0; animation: fade-in-up 1s ease-out 0.9s forwards; }
.fade-in-up-4 { opacity: 0; animation: fade-in-up 1s ease-out 1.3s forwards; }
</style>
