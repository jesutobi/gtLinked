<template>
  <div>
    <div
      class="bg-[#150E28] montFontLight text-white bg-[#150E28] overflow-hidden relative"
    >
      <div class="absolute left-4 -top-4">
        <img
          src="@/assets/images/Purple-Lens-Flare-PNG.svg"
          class="w-[45rem]"
          alt=""
        />
      </div>

      <div class="container mx-auto">
        <div class="w-[95%] mx-auto">
          <div class="grid sm:grid-cols-2 gap-1">
            <!-- back button -->
            <div class="sm:hidden zed py-2 px-3">
              <button>
                <img src="@/assets/icon/back.svg" alt="" @click="goBack" />
              </button>
            </div>
            <!-- address -->
            <div class="zed max-[568px]:hidden text-sm py-[7rem]">
              <Starfour class="absolute top-0" />
              <div>
                <div
                  class="clashBold text-[1.5rem] max-[568px]:text-[1.2rem] py-3 text-[#D434FE]"
                >
                  <span>Get in touch</span>
                </div>
                <div class="py-3">
                  <span>Contact </span><br /><span>Information</span>
                </div>
                <!-- address -->
                <div class="py-3">
                  <span> 27,Alara Street </span><br /><span>Yaba 100012</span
                  ><br /><span>Lagos State</span>
                </div>
                <!-- phone number -->
                <div class="py-3">
                  <span>Call Us : 07067981819</span>
                </div>
                <!-- phone number -->
                <div class="py-3">
                  <span>we are open from Monday-Friday</span><br /><span
                    >08:00am - 05:00pm</span
                  >
                </div>
              </div>
              <!-- social mnedia -->
              <div>
                <div class="py-3">
                  <span>Share on</span>
                </div>
                <div class="py-2 flex items-center">
                  <!-- instagram -->
                  <div class="">
                    <img
                      src="@/assets/icon/mdi_instagram.svg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                  <!-- x -->
                  <div class="px-2">
                    <img src="@/assets/icon/x.svg" alt="" class="w-full" />
                  </div>
                  <!-- fb -->
                  <div class="px-2">
                    <img src="@/assets/icon/vector.svg" alt="" class="w-full" />
                  </div>
                  <!-- linkedin -->
                  <div class="px-2">
                    <img
                      src="@/assets/icon/ri_linkedin-fill.svg"
                      alt=""
                      class="w-full"
                    />
                  </div>
                </div>
              </div>

              <!-- time countdown -->
              <Starfive class="px-[7rem] right-0 absolute" />
            </div>
            <!-- forms -->
            <div class="sm:py-[3rem] pt-3 pb-1">
              <Starthree class="abolute right-0" />
              <div
                class="min-[569px]:backdrop-blur-[0.5px] w-full rounded-lg py-7 max-[568px]:px-[2em] px-[4rem] blurwhite"
              >
                <!-- text-->
                <div>
                  <div
                    class="clashBold text-[1.2rem] max-[568px]:text-[1rem] py-3 text-[#D434FE]"
                  >
                    <div class="py-1 tracking-wide">
                      <span>Questions or need assistance?</span>
                    </div>
                    <div class="py-1 tracking-wide">
                      <span>Let us know about it!</span>
                    </div>
                  </div>
                </div>
                <!-- input -->
                <div class=" ">
                  <!-- firstname -->
                  <div class="mb-[2rem] mt-[1rem] w-100">
                    <input
                      type="text"
                      placeholder="Firstname"
                      class="border-white border-[0.5px] rounded w-full text-white text-sm max-[768px]:text-xs px-5 py-2"
                    />
                  </div>
                  <!-- mail -->
                  <div class="my-[2rem]">
                    <input
                      type="text"
                      placeholder="E-mail"
                      class="border-white border-[0.5px] rounded text-white w-full text-sm max-[768px]:text-xs px-5 py-2"
                    />
                  </div>
                  <!-- message -->
                  <div class="mt-[2rem]">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      class="border-white border-[0.5px] rounded text-white w-full text-sm max-[768px]:text-xs px-5 py-2"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <!-- submit button -->
                  <div class="py-4 flex justify-center text-sm">
                    <button
                      class="py-2 px-5 w-[10rem] text-white buttongradiet"
                    >
                      <span>submit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-2 text-center text-xs sm:textsm sm:hidden">
          <div class="py-2">
            <span>Share on</span>
          </div>
          <div class="flex items-center justify-center">
            <!-- instagram -->
            <div class="px-2">
              <img
                src="@/assets/icon/mdi_instagram.svg"
                alt=""
                class="w-full"
              />
            </div>
            <!-- x -->
            <div class="px-2">
              <img src="@/assets/icon/x.svg" alt="" class="w-full" />
            </div>
            <!-- fb -->
            <div class="px-2">
              <img src="@/assets/icon/vector.svg" alt="" class="w-full" />
            </div>
            <!-- linkedin -->
            <div class="px-2">
              <img
                src="@/assets/icon/ri_linkedin-fill.svg"
                alt=""
                class="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

import StarOne from "@/components/star/starone.vue";
import Startwo from "@/components/star/startwo.vue";
import Starthree from "@/components/star/starthree.vue";
import Starfour from "@/components/star/starfour.vue";
import Starfive from "@/components/star/starfive.vue";
import { ref } from "vue";

const goBack = () => {
  console.log("test");
  router.back(-1);
};
</script>

<style scoped>
.zed {
  z-index: 99999 !important;
}
/* input background */
@media (min-width: 568px) {
  .blurwhite {
    background-color: rgba(255, 255, 255, 0.04);
  }
}
</style>
