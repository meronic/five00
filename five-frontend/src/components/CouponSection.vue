<template>
  <section>
    <h2 class="section-title">널 위한 특별 선물!</h2>
    <p class="coupon-guide">아래 쿠폰을 클릭해서 사용해줘! (유효기간: 평생)</p>
    <div class="coupon-container">
        <div class="coupon">소원 들어주기 1회 이용권</div>
        <div class="coupon">보고 싶을 때 10분 내로 달려가기</div>
        <div class="coupon">하루 종일 껌딱지 되기 쿠폰</div>
        <div class="coupon">최고급 레스토랑 데이트권</div>
    </div>
  </section>
</template>

<style scoped>
.coupon-guide { text-align: center; margin-bottom: 30px; }
.coupon-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.coupon { border: 2px dashed var(--main-pink); background: white; padding: 20px 30px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: all 0.2s; }
.coupon:hover { background-color: var(--main-pink); color: white; transform: scale(1.05); }
</style>