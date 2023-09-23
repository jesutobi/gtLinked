<template lang="">
  <div class="sticky top-0 zedindex">
    <!-- navbar -->
    <div class="bg-[#150E28] montFontLight border-b border-slate-600">
      <div class="container relative max-[768px]:px-[2rem] mx-auto">
        <div class="flex items-center justify-between h-[5.5rem]">
          <router-link :to="{ name: 'home' }">
            <!-- logo -->
            <div
              class="flex cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 clashBold max-[768px]:text-[1.7rem] text-[2rem] items-center"
            >
              <div class="text-white">
                <span>get</span>
              </div>
              <div class="text-[#D434FE]">
                <span>linked</span>
              </div>
            </div>
          </router-link>

          <div
            class="flex cursor-pointer max-[768px]:hidden items-center montFontLight text-sm"
          >
            <!-- nav buttons -->
            <div class="text-white flex items-center">
              <!-- ?timeline -->
              <a href="#timeline">
                <div
                  class="px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <span class="buttoncolor hover:font-bold">Timeline</span>
                </div></a
              >
              <!-- overview -->
              <div
                class="px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <span class="buttoncolor hover:font-bold">Overview</span>
              </div>
              <!-- contact -->
              <a href="#section1">
                <div
                  class="px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <span class="buttoncolor hover:font-bold">FAQs</span>
                </div></a
              >
              <router-link :to="{ name: 'contact' }">
                <div
                  class="px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  <span
                    class="buttoncolor hover:font-bold"
                    :class="{ active: $route.name == 'contact' }"
                    >Contact</span
                  >
                </div></router-link
              >
            </div>
            <!-- register button -->
            <router-link :to="{ name: 'register' }">
              <div
                class="pl-[4rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <button
                  class="py-2 px-5 text-white buttonbg"
                  :class="{ borderGradient: $route.name == 'register' }"
                >
                  <span>Register</span>
                </button>
              </div></router-link
            >
          </div>
          <div
            v-if="showcancel"
            @click="Show()"
            class="min-[768px]:hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <img src="@/assets/icon/menu.svg" alt="" />
          </div>
          <!-- cancel button -->
          <div
            v-if="hideCancel"
            @click="Cancel('hide')"
            class="min-[768px]:hidden flex justify-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <img src="@/assets/icon/cancel.svg" class="w-[20px]" alt="" />
          </div>
        </div>
      </div>
      <!-- side menu -->
      <div
        v-if="menu == true"
        class="min-[768px]:hidden text-white bg-[#150E28] w-full h-[100vh] fixed"
      >
        <!-- buttons -->
        <div
          @click="Cancel('hide')"
          class="text-sm container mx-auto px-[2rem]"
        >
          <div class="py-4 buttoncolor">
            <span>TImeline</span>
          </div>
          <div class="py-4 buttoncolor">
            <span>Overview</span>
          </div>
          <div class="py-4 buttoncolor">
            <span>FAQ's</span>
          </div>
          <router-link :to="{ name: 'contact' }">
            <div class="py-4 buttoncolor" py-2>
              <span>Contact</span>
            </div></router-link
          >
          <!-- register button -->
          <router-link :to="{ name: 'register' }">
            <div class="py-4">
              <button
                class="py-2 px-5 text-white buttongradiet transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <span>Register</span>
              </button>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let menu = ref(false);
let showcancel = ref(true);
let hideCancel = ref(false);

// hide and show menu function
const Show = () => {
  menu.value = true;
  hideCancel.value = true;
  showcancel.value = false;
  console.log(menu.value);
  // if (data == "show") {
  //   menu.value = true;
  //   console.log(menu.value);
  // }
  // if (data == "hide") {
  //   menu.value = false;
  // }
};
const Cancel = () => {
  menu.value = false;
  hideCancel.value = false;
  showcancel.value = true;
};
// return {
//   // menu,
//   showMenu,
// };
</script>

<style scoped>
/* active state of buttons */
.active {
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #fe34b9, #d434fe, #903aff);
}
/* biutton color on hover */
.buttoncolor:hover {
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #fe34b9, #d434fe, #903aff);
}
/* active register button */
.borderGradient {
  border: 2px solid;
  border-image: linear-gradient(to right, #fe34b9, #d434fe, #903aff);
  border-image-slice: 1;
  background-color: #150e28 !important ;
  background-image: linear-gradient(
    to right,
    #150e28,
    #150e28,
    #150e28
  ) !important;
}
/* button background */
.buttonbg {
  background-image: linear-gradient(to right, #fe34b9, #d434fe, #903aff);
}

.zedindex {
  z-index: 9999999 !important;
}
</style>
