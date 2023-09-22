<template>
  <div>
    <div class="bg-[#150E28] montFontLight relative border-b border-slate-600">
      <div class="container mx-auto">
        <div class="absolute left-0 zedid bottom-0">
          <img
            src="@/assets/images/Purple-Lens-Flare-PNG.svg"
            class="w-[35rem]"
            alt=""
          />
        </div>
        <div class="min-[768px]:w-[90%] mx-auto">
          <div
            class="grid md:grid-cols-2 gap-2 max-[768px]:px-[2rem] max-[768px]:py-[1rem] py-[5rem]"
          >
            <!-- text -->
            <div class="zed max-[568px]:text-center">
              <div class="clashBold text-[1.5rem] max-[568px]:text-[1.2rem]">
                <div class="text-white">
                  <span>Privacy Policy and </span>
                </div>
                <div class="text-[#D434FE]">
                  <span>Terms</span>
                </div>
              </div>
              <div class="">
                <span class="text-slate-500 text-sm"
                  >Last updated on September 12, 2023</span
                >
              </div>
              <div class="py-3">
                <span class="text-white text-sm"
                  >Below are our privacy & policy, which outline a lot of
                  goodies. it’s our aim to always take of our participant</span
                >
              </div>
              <div
                class="text-white my-5 border-[#D434FE] border py-[5rem] max-[568px]:p-[1rem] max-[992px]:p-[0.7rem] max-[568px]:mx-3 px-[3rem] rounded text-sm leading-loose"
              >
                <!-- text -->
                <div class="">
                  <span
                    >At getlinked tech Hackathon 1.0, we value your privacy and
                    are committed to protecting your personal information. This
                    Privacy Policy outlines how we collect, use, disclose, and
                    safeguard your data when you participate in our tech
                    hackathon event. By participating in our event, you consent
                    to the practices described in this policy.</span
                  >
                </div>
                <!-- heading -->
                <div class="py-4">
                  <div class="text-[#D434FE] text-sm font-bold">
                    <span>Licensing Policy</span>
                  </div>
                  <div>
                    <span class="text-sm"
                      >Here are terms of our Standard License:</span
                    >
                  </div>
                </div>
                <!-- list -->
                <div class="flex py-2">
                  <div>
                    <img
                      src="@/assets/icon/listterms.svg"
                      class="w-full"
                      alt=""
                    />
                  </div>
                  <div class="text-sm px-2">
                    <span
                      >The Standard License grants you a non-exclusive right to
                      navigate and register for our event</span
                    >
                  </div>
                </div>
                <div class="flex py-2">
                  <div>
                    <img
                      src="@/assets/icon/listterms.svg"
                      class="w-full"
                      alt=""
                    />
                  </div>
                  <div class="text-sm px-2">
                    <span
                      >You are licensed to use the item available at any free
                      source sites, for your project developement</span
                    >
                  </div>
                </div>
                <!-- read more-->
                <div class="pt-[3rem] max-[768px]:px-0 px-[5rem]">
                  <button
                    class="py-2 px-5 max-[568px]:px-2 text-white buttongradiet"
                  >
                    <span>Read more</span>
                  </button>
                </div>
              </div>
            </div>
            <!-- image -->
            <div class="flex relative justify-center py-[3rem]">
              <div class="relative zed">
                <!-- image -->
                <Starfour class="absolute top-[5rem] left-0 right-0" />
                <Starthree class="absolute top-0 bottom-[4rem]" />
                <div
                  class="w-[25rem] max-[768px]:w-[13rem] max-[992px]:w-[20rem]"
                >
                  <img src="@/assets/images/Vector.svg" alt="" class="w-full" />
                </div>
                <StarOne />
                <!-- second image -->
                <div
                  class="absolute bottom-0 top-[10rem] max-[992px]:w-[20rem] max-[768px]:w-[13rem] w-[25rem]"
                >
                  <img
                    src="@/assets/images/081.svg"
                    alt=""
                    class="w-full bounce-animation"
                  />
                </div>

                <Starseven
                  class="absolute bottom-[3rem] left-[12rem] right-0"
                />
                <Startwo class="absolute top-[6rem] right-0" />
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
