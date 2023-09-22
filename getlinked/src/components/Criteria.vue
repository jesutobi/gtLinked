<template>
  <div>
    <div class="bg-[#150E28] montFontLight border-b border-slate-600">
      <div class="container mx-auto m">
        <div class="min-[768px]:w-[90%] mx-auto">
          <div class="grid lg:grid-cols-2 gap-2 py-[2rem]">
            <!-- image -->
            <div class="pt-[3rem]">
              <Startwo />
              <!-- image -->
              <div
                class="w-[35rem] max-[992px]:mx-auto max-[768px]:w-[20rem] max-[992px]:w-[25rem]"
              >
                <div class="">
                  <img
                    src="@/assets/images/80465541.svg"
                    alt=""
                    class="w-full bounce-animation"
                  />
                </div>
              </div>
            </div>
            <!-- text -->
            <div class="px-[2rem] zed max-[568px]:text-center">
              <div class="clashBold text-[1.5rem] max-[568px]:text-[1.2rem]">
                <Starfive class="flex justify-center" />
                <div class="text-white">
                  <span>Judging Criteria </span>
                </div>
                <div class="text-[#D434FE]">
                  <span>Key attributes</span>
                </div>
              </div>
              <div
                class="text-white text-sm leading-loose py-1"
                v-for="(item, index) in criteria"
                :key="index"
              >
                <span class="text-[#D434FE] montFontBold">
                  {{ item.title }}
                </span>
                <span>
                  {{ item.text }}
                </span>
              </div>
              <!-- register button -->
              <div>
                <button>
                  <span>Read More</span>
                </button>
              </div>
              <Starseven />
            </div>
          </div>
        </div>
        <StarOne />
      </div>
    </div>
  </div>
</template>

<script setup>
import StarOne from "@/components/star/starone.vue";
import Startwo from "@/components/star/startwo.vue";
import Starthree from "@/components/star/starthree.vue";
import Starfour from "@/components/star/starfour.vue";
import Starfive from "@/components/star/starfive.vue";
import Starsix from "@/components/star/starsix.vue";
import Starseven from "@/components/star/starseven.vue";

import { ref } from "vue";
import { onMounted } from "vue";
import CriteriaVar from "@/json/criteria.json";

const criteria = ref(CriteriaVar);

onMounted(() => {
  return {
    criteria,
  };
});
</script>

<style scoped>
.zed {
  z-index: 99999 !important;
}
.zedid {
  z-index: 0;
}
.bounce-animation {
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
