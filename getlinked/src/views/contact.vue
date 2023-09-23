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
                      v-model="first_name"
                      type="text"
                      placeholder="Firstname"
                      class="border-white border-[0.5px] rounded w-full text-white text-sm max-[768px]:text-xs px-5 py-2"
                    />
                  </div>
                  <!-- Phone number -->
                  <div class="mb-[2rem] mt-[1rem] w-100">
                    <input
                      v-model="phone_number"
                      type="number"
                      placeholder="Phone number"
                      class="border-white border-[0.5px] rounded w-full text-white text-sm max-[768px]:text-xs px-5 py-2"
                    />
                  </div>
                  <!-- mail -->
                  <div class="my-[2rem]">
                    <input
                      v-model="email"
                      type="email"
                      required
                      placeholder="E-mail"
                      class="border-white border-[0.5px] rounded text-white w-full text-sm max-[768px]:text-xs px-5 py-2"
                    />
                  </div>
                  <!-- message -->
                  <div class="mt-[2rem]">
                    <textarea
                      v-model="message"
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
                      @click="submitMessage"
                      class="py-2 px-5 w-[10rem] flex justify-center cursor-pointer text-white buttongradiet"
                    >
                      <div>
                        <span>submit</span>
                      </div>
                      <div v-if="loader" class="px-2">
                        <span class="">
                          <svg
                            aria-hidden="true"
                            class="w-[1rem] h-[1rem] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span class="sr-only">Loading...</span>
                        </span>
                      </div>
                    </button>
                  </div>
                  <div class="" v-if="success">
                    <span class="text-xs flex justify-center text-green-600"
                      >Message sent successfully</span
                    >
                  </div>
                  <div v-if="errors">
                    <span class="text-xs flex justify-center text-red-600"
                      >Every field must be filled</span
                    >
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
import StarOne from "@/components/star/starone.vue";
import Startwo from "@/components/star/startwo.vue";
import Starthree from "@/components/star/starthree.vue";
import Starfour from "@/components/star/starfour.vue";
import Starfive from "@/components/star/starfive.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

// data
const router = useRouter();
const phone_number = ref("");
const email = ref("");
const first_name = ref("");
const message = ref("");
const loader = ref(false);
const success = ref(false);
const errors = ref(false);

const goBack = () => {
  console.log("test");
  router.back(-1);
};
async function submitMessage() {
  // try if there are no client side errors
  try {
    loader.value = true;
    await store.dispatch("Contact", {
      phone_number: phone_number.value,
      email: email.value,
      first_name: first_name.value,
      message: message.value,
    });
    console.log("success");
    success.value = true;
    setTimeout(() => {
      loader.value = false;
      success.value = false;
    }, 5000);
  } catch (error) {
    errors.value = true;
    console.log(error);
    loader.value = false;
    success.value = false;
    success.value = "";
  }
}
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
