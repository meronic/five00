// src/directives/scrollAnimation.js

// 화면에 요소가 나타났는지 감지하는 Intersection Observer 설정
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // isIntersecting: 요소가 뷰포트와 교차하는지 여부 (화면에 보이는지)
    if (entry.isIntersecting) {
      // 보이면 'visible' 클래스를 추가
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 // 요소가 10% 보였을 때 감지
});

// v-scroll-fade-in 이라는 커스텀 디렉티브를 정의
export default {
  // 디렉티브가 HTML 요소에 처음 바인딩될 때 호출
  mounted(el) {
    // 모든 애니메이션 대상 요소는 기본적으로 투명하고 약간 아래에 위치
    el.classList.add('fade-in-element');
    // 해당 요소를 관찰 시작
    observer.observe(el);
  }
}