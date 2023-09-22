<template>
  <div>
    <div class="bg-[#150E28] montFontLight border-b border-slate-600">
      <div class="container mx-auto">
        <div class="min-[768px]:w-[90%] mx-auto">
          <div class="grid lg:grid-cols-2 gap-2 py-[1rem]">
            <!-- image -->
            <div class="max-[768px]:px-[2rem]">
              <div class="min-[992px]:hidden max-[992px]:text-center">
                <div class="clashBold text-[1.5rem] max-[568px]:text-[1.2rem]">
                  <div class="text-white">
                    <span>Prizes and </span>
                  </div>
                  <div class="text-[#D434FE]">
                    <span>Rewards</span>
                  </div>
                </div>
                <div class="text-white text-sm leading-loose">
                  <span>
                    Highlight of the prices or rewards for winners and for
                    participants
                  </span>
                </div>
              </div>
              <div
                class="py-[3rem] max-[568px]:py-[1.5rem] relative flex justify-center"
              >
                <div><Starseven class="absolute left-0" /></div>
                <!-- image -->
                <div
                  class="w-[30rem] max-[768px]:w-[16rem] max-[992px]:w-[16rem] zed"
                >
                  <div>
                    <img
                      src="@/assets/images/94868891.svg"
                      alt=""
                      class="w-full bounce-animation"
                    />
                  </div>
                </div>
                <div class="absolute zedid top-0">
                  <img
                    src="@/assets/images/Purple-Lens-Flare-PNG.svg"
                    class="w-[45rem]"
                    alt=""
                  />
                </div>
                <div><Starthree class="absolute bottom-0 right-0" /></div>
              </div>
            </div>
            <!-- text -->
            <div
              class="py-[3rem] max-[568px]:py-[1.5rem] relative max-[992px]:text-center"
            >
              <div
                class="clashBold text-[1.5rem] max-[992px]:text-[1.2rem] max-[992px]:hidden"
              >
                <div class="text-white">
                  <span>Prizes and </span>
                </div>
                <div class="text-[#D434FE]">
                  <span>Rewards</span>
                </div>
              </div>
              <div class="text-white text-sm leading-loose max-[768px]:hidden">
                <span>
                  Highlight of the prices or rewards for winners and for
                  participants
                </span>
              </div>
              <!-- images -->
              <div
                class="w-[30rem] max-[568px]:w-[20rem] max-[992px]:mx-auto max-[992px]:py-[0rem] py-[2rem]"
              >
                <img src="@/assets/images/Rewards.svg" alt="" class="w-full" />
              </div>
              <div><StarOne class="absolute bottom-0 right-0" /></div>
            </div>
          </div>
        </div>
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
