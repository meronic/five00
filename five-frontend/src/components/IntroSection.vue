<template>
  <header class="intro-section">
    <h1>사랑하는 은서에게</h1>
    <h2>우리가 함께한 500일을 축하하며</h2>
    <p>2024.02.08 ~ 2025.06.21</p>
    <div class="scroll-down">↓</div>
  </header>
</template>

<style scoped>
.intro-section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1502318217862-aa4e294ba65b?q=80&w=2070&auto=format&fit=crop') no-repeat center center/cover;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
}
.intro-section h1 { font-size: 3rem; margin: 0; }
.intro-section h2 { font-size: 1.5rem; }
.scroll-down {
  margin-top: 50px;
  font-size: 2rem;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
}
</style>