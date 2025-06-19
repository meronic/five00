<template>
  <section>
    <h2 class="section-title" v-scroll-fade-in>두근두근! 우리만의 퀴즈</h2>
    <div class="quiz-box" v-scroll-fade-in>
      <div v-if="!quizFinished">
        <h3>Q{{ currentQuestionIndex + 1 }}. {{ currentQuestion.question }}</h3>
        <ul class="options">
          <li v-for="(option, index) in currentQuestion.options" :key="index" @click="selectAnswer(index)">
            {{ option }}
          </li>
        </ul>
      </div>
      <div v-else class="quiz-result">
        <h3>퀴즈 결과</h3>
        <p>총 {{ questions.length }}문제 중 {{ score }}문제를 맞혔어!</p>
        <p class="result-message">{{ resultMessage }}</p>
        <button @click="resetQuiz">다시 풀기</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const questions = ref([
  { question: '우리가 처음 만난 장소는 어디였을까?', options: ['카페', '도서관', '영화관', '공원'], answer: 0 },
  { question: '내가 은서에게 처음 선물했던 것은?', options: ['꽃', '책', '향수', '목걸이'], answer: 1 },
  { question: '우리의 공식적인 1일은 언제일까?', options: ['2월 8일', '2월 14일', '3월 1일', '3월 14일'], answer: 0 },
]);

const currentQuestionIndex = ref(0);
const score = ref(0);
const quizFinished = ref(false);

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);

const resultMessage = computed(() => {
  const percentage = (score.value / questions.value.length) * 100;
  if (percentage === 100) return '역시 우린 천생연분이야! 모든 걸 기억하고 있네 ❤️';
  if (percentage >= 50) return '이 정도면 우리 추억 전문가! 조금 더 분발해볼까? 😉';
  return '이럴수가! 우리... 처음부터 다시 시작해야 할까? 😂';
});

const selectAnswer = (selectedIndex) => {
  if (selectedIndex === currentQuestion.value.answer) {
    score.value++;
  }
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    quizFinished.value = true;
  }
};

const resetQuiz = () => {
  currentQuestionIndex.value = 0;
  score.value = 0;
  quizFinished.value = false;
};
</script>

<style scoped>
.quiz-box { background: var(--bg-light); border-radius: 20px; padding: 30px; text-align: center; }
.options { list-style: none; padding: 0; margin-top: 20px; }
.options li { background: white; border: 1px solid #ddd; border-radius: 10px; padding: 15px; margin-bottom: 10px; cursor: pointer; transition: all 0.2s; }
.options li:hover { background: var(--main-pink); color: white; border-color: var(--main-pink); }
.quiz-result p { font-size: 1.2rem; }
.quiz-result .result-message { font-size: 1.4rem; color: var(--point-coral); font-weight: bold; }
.quiz-result button { background: var(--point-coral); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-size: 1rem; cursor: pointer; margin-top: 10px; }
</style>