<template>
  <div>
    <div class="star">
      <img src="@/assets/icon/stsrgrey.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.star {
  animation: blink 2s infinite;
  animation-delay: 5s;
}
</style>
