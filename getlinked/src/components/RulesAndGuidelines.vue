<template>
  <div>
    <div class="bg-[#150E28] montFontLight border-b border-slate-600">
      <div class="container mx-auto relative">
        <div class="absolute zedid left-0">
          <img
            src="@/assets/images/Purple-Lens-Flare-PNG.svg"
            class="w-[45rem]"
            alt=""
          />
        </div>
        <div class="min-[768px]:w-[90%] mx-auto">
          <div class="grid sm:grid-cols-2 gap-2 gap-2 py-1rem">
            <!-- text -->
            <div
              class="zed max-[568px]:order-2 py-[7rem] max-[568px]:pb-[2rem] max-[768px]:p-[2rem] max-[568px]:pt-[2rem] max-[568px]:order-1 max-[568px]:text-center"
            >
              <div>
                <Starsix />
              </div>
              <div class="clashBold text-[1.5rem] max-[568px]:text-[1.2rem] p">
                <div class="text-white">
                  <span>Rules and</span>
                </div>
                <div class="text-[#D434FE]">
                  <span>Guidelines</span>
                </div>
              </div>
              <div class="text-white text-sm leading-loose">
                <span>
                  Our tech hackathon is a melting pot of visionaries, and its
                  purpose is as clear as day: to shape the future. Whether
                  you're a coding genius, a design maverick, or a concept
                  wizard, you'll have the chance to transform your ideas into
                  reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the
                  world, that's what we're all about!
                </span>
              </div>
            </div>
            <!-- image -->
            <div class="max-[568px]:order-1 zed">
              <div>
                <StarOne />
              </div>
              <!-- image -->
              <div class="max-[768px]:flex justify-center zed">
                <div
                  class="w-[40rem] max-[568px]:w-[20rem] max-[768px]:pt-[2rem] max-[568px]:pt-0"
                >
                  <img
                    src="@/assets/images/74501591.svg"
                    alt=""
                    class="w-full bounce-animation"
                  />
                </div>
              </div>
              <div>
                <Starseven />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute zedid right-0">
        <img
          src="@/assets/images/Purple-Lens-Flare-PNG.svg"
          class="w-[45rem]"
          alt=""
        />
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
  /* width: 200px; Set the width as needed */
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
