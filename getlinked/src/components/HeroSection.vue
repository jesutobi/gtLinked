<template>
  <div>
    <div
      class="bg-[#150E28] bg-[#150E28] overflow-hidden relative border-b border-slate-600"
    >
      <div class="absolute left-4 -top-4">
        <img
          src="@/assets/images/Purple-Lens-Flare-PNG.svg"
          class="w-[45rem]"
          alt=""
        />
      </div>
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-1">
          <!-- text -->
          <div
            class="min-[993px]:mt-[7rem] max-[992px]:mt-[5rem] max-[768px]:mt-[2rem] max-[768px]:text-center zed"
          >
            <!--  mobile text -->
            <div
              class="montFontBold min-[767px]:hidden text-white text-center max-[568px]:text-[1rem] max-[768px]:text-[1.5rem] p-4"
            >
              <i>Igniting a Revolution in HR Innovation</i>
            </div>
            <Starfour class="absolute top-0" />
            <div
              class="clashBold zed max-[568px]:text-[2rem] max-[768px]:text-[2.1rem] min-[993px]:text-[4rem] max-[992px]:text-[3rem]"
            >
              <div class="text-white relative">
                <div class="w-[35px] absolute left-[26rem] -top-5 right-0">
                  <img src="@/assets/icon/bulb.svg" alt="" class="w-full" />
                </div>
                <div class="gluey-text">
                  <span>g</span>
                  <span>e</span>
                  <span>t</span>
                  <span>l</span>
                  <span>i</span>
                  <span>n</span>
                  <span>k</span>
                  <span>e</span>
                  <span>d</span>
                  <span> </span>
                  <span>T</span>
                  <span>e</span>
                  <span>c</span>
                  <span>h</span>
                </div>
              </div>
              <div class="flex items-center max-[768px]:justify-center">
                <div class="text-white">
                  <span>Hackathon </span>
                </div>
                <div class="text-[#D434FE]">
                  <span>1.0</span>
                </div>
                <div class="w-[40px]">
                  <img src="@/assets/icon/chain.svg" alt="" class="w-full" />
                </div>
                <div class="text-[#D434FE] w-[40px]">
                  <img src="@/assets/icon/boom.svg" alt="" class="w-full" />
                </div>
              </div>
            </div>
            <div class="montFontLight text-white text-sm max-[568px]:px-2">
              <span>
                Participate in getlinked tech Hackathon 2023 stand <br />
                a chance to win a Big prize
              </span>
            </div>
            <!-- register button -->
            <div class="my-5">
              <button
                class="py-3 w-[8rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-5 text-sm text-white buttongradiet"
              >
                <span>Register</span>
              </button>
            </div>
            <!-- time countdown -->
            <Starfive class="px-[7rem] right-0 absolute" />
            <div
              class="flex items-center unica max-[568px]:text-center max-[768px]:justify-center text-white text-xl max-[768px]:text-[2.5rem] min-[992px]:text-[3rem] max-[768px]:py-4 min-[992px]:pt-[3rem]"
            >
              <div class="px-2 flex">
                <div>
                  <span>00</span>
                </div>
                <div class="text-xs">
                  <span>h </span>
                </div>
              </div>
              <div class="px-2 flex">
                <div>
                  <span>00 </span>
                </div>
                <div class="text-xs">
                  <span>m </span>
                </div>
              </div>
              <div class="px-2 flex">
                <div>
                  <span>00 </span>
                </div>
                <div class="text-xs">
                  <span>s </span>
                </div>
              </div>
            </div>
          </div>
          <!-- image -->
          <div>
            <!-- text -->
            <div
              class="montFontBold max-[768px]:hidden max-[992px]:text-[1.2rem] text-white text-center text-[1.5rem] p-4"
            >
              <i>Igniting a Revolution in HR Innovation</i>
            </div>
            <Starthree class="abolute right-0" />
            <!-- image -->
            <div class="relative">
              <Startwo class="flex justify-end right-4 absolute" />
              <!-- boy -->
              <div>
                <img
                  src="@/assets/images/man-wearing-smart-glasses-touching-virtual-screen1.svg"
                  alt=""
                  class="w-full grayscale"
                />
              </div>

              <!-- globe -->
              <div
                class="absolute top-0 max-[568px]:-top-5 bottom-0 animate-spin w-[40rem] max-[1000px]:w-[20rem] max-[568px]:w-[20rem] max-[768px]:w-[30rem] max-[568px]:left-0"
              >
                <img src="@/assets/images/Image1.svg" alt="" class="w-full" />
              </div>
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
</script>

<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin-slow 10s linear infinite !important; /* Adjust the duration (2s in this example) */
}
.zed {
  z-index: 99999 !important;
}

.gluey-text span {
  display: inline-block;
  transition: transform 1.5s ease;
}

.gluey-text span:hover {
  animation: bounce 1s;
}

@keyframes bounce {
  0%,
  100% {
    transform: scaleX(1.4) scaleY(1);
  }
  30% {
    transform: scaleX(1.25) scaleY(0.75);
  }
  40% {
    transform: scaleX(0.75) scaleY(1.8);
  }
  50% {
    transform: scaleX(1.15) scaleY(0.85);
  }
  65% {
    transform: scaleX(0.95) scaleY(1.45);
  }
  75% {
    transform: scaleX(0.8) scaleY(1.5);
  }
}
</style>
