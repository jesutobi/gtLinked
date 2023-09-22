<template>
  <div>
    <div>
      <img src="@/assets/icon/starpu.svg" alt="" class="star" />
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
  animation: blink 1s infinite;
  animation-delay: 2s;
}
</style>
