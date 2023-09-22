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
          <div class="grid lg:grid-cols-2 gap-1">
            <!-- back button -->
            <div class="min-[768px]:hidden zed py-2 px-3">
              <button>
                <img src="@/assets/icon/back.svg" alt="" @click="goBack" />
              </button>
            </div>
            <!-- image -->
            <div class="zed text-sm">
              <div
                class="clashBold text-[1.5rem] text-center min-[768px]:hidden max-[568px]:text-[1.2rem] py-3 text-[#D434FE]"
              >
                <div class="py-1 tracking-wide">
                  <span>Register</span>
                </div>
              </div>
              <Starfour class="absolute top-0" />
              <div class="min-[992px]:pt-[8rem]">
                <img
                  src="@/assets/images/3d-graphic-designer-showing.svg"
                  alt=""
                  class="w-full max-[992px]:w-[20rem] mx-auto"
                />
              </div>

              <!-- time countdown -->
              <Starfive class="px-[7rem] right-0 absolute" />
            </div>
            <!-- forms -->
            <div class="sm:py-[1rem] pt-2 pb-1">
              <Starthree class="abolute right-0" />
              <div
                class="min-[768px]:backdrop-blur-[0.5px] w-full rounded-lg py-7 max-[568px]:px-[2em] px-[4rem] blurwhite"
              >
                <!-- text-->
                <div>
                  <div
                    class="clashBold text-[1.5rem] max-[768px]:hidden max-[568px]:text-[1.2rem] py-3 text-[#D434FE]"
                  >
                    <div class="py-1 tracking-wide">
                      <span>Register</span>
                    </div>
                  </div>
                  <div class="flex items-center text-xs">
                    <div><span>Be part of this movement!</span></div>
                    <div>
                      <img src="@/assets/images/manandwoman.svg" alt="" />
                    </div>
                  </div>
                  <div class="py-2 tracking-wide text-[1.3rem]">
                    <span>CREATE YOUR ACCOUNT</span>
                  </div>
                </div>
                <!-- input -->
                <div class="text-white">
                  <!-- team name and phone-->
                  <div
                    class="flex gap-2 w-full justify-between max-[768px]:block items-center py-2"
                  >
                    <div class="w-full">
                      <div class="py-2">
                        <label
                          for="teamsName"
                          class="text-sm max-[768px]:text-xs"
                          >Team’s Name</label
                        >
                      </div>
                      <div class="w-full">
                        <input
                          @input="validate"
                          @blur="validate"
                          v-model="team_name"
                          id="teamsName"
                          type="text"
                          placeholder="Enter the name of your group"
                          v-bind:class="{
                            'is-valid': validation.valid.team_name,
                            'is-invalid': validation.invalid.team_name,
                          }"
                          class="border-white border-[0.5px] rounded w-full text-white text-xs px-5 py-3"
                        />
                      </div>
                      <!-- validations -->
                      <div
                        class="text-green-600 max-[568px]:text-xs text-sm"
                        v-if="validation.valid.team_name"
                      >
                        {{ validation.valid.team_name }}
                      </div>

                      <div
                        class="text-red-600 max-[568px]:text-xs text-sm"
                        v-if="validation.invalid.team_name"
                      >
                        {{ validation.invalid.team_name }}
                      </div>
                    </div>
                    <!-- phone -->
                    <div class="w-full">
                      <div class="py-2">
                        <label
                          for="tel"
                          class="text-sm py-2 max-[768px]:text-xs"
                          >Phone</label
                        >
                      </div>
                      <div class="w-full">
                        <input
                          @input="validate"
                          @blur="validate"
                          v-model="phone_number"
                          id="tel"
                          type="tel"
                          placeholder="Enter your phone number"
                          v-bind:class="{
                            'is-valid': validation.valid.phone_number,
                            'is-invalid': validation.invalid.phone_number,
                          }"
                          class="border-white border-[0.5px] rounded w-full text-white text-xs px-5 py-3"
                        />
                      </div>
                      <!-- validations -->
                      <div
                        class="text-green-600 max-[568px]:text-xs text-sm"
                        v-if="validation.valid.phone_number"
                      >
                        {{ validation.valid.phone_number }}
                      </div>

                      <div
                        class="text-red-600 max-[568px]:text-xs text-sm"
                        v-if="validation.invalid.phone_number"
                      >
                        {{ validation.invalid.phone_number }}
                      </div>
                    </div>
                  </div>
                  <!-- email and project topic-->
                  <div
                    class="flex max-[768px]:block gap-2 w-full justify-between items-center py-2"
                  >
                    <div class="w-full">
                      <div class="py-2">
                        <label for="email" class="text-sm max-[768px]:text-xs"
                          >Email</label
                        >
                      </div>
                      <div class="w-full">
                        <input
                          @input="validate"
                          @blur="validate"
                          v-model.trim="email"
                          type="email"
                          id="email"
                          required
                          v-bind:class="{
                            'is-valid': validation.valid.email,
                            'is-invalid': validation.invalid.email,
                          }"
                          placeholder="Enter your email address"
                          class="border-white border-[0.5px] rounded w-full text-white text-xs px-5 py-3"
                        />
                      </div>
                      <!-- validations -->
                      <div
                        class="text-green-600 max-[568px]:text-xs text-sm"
                        v-if="validation.valid.email"
                      >
                        {{ validation.valid.email }}
                      </div>

                      <div
                        class="text-red-600 max-[568px]:text-xs text-sm"
                        v-if="validation.invalid.email"
                      >
                        {{ validation.invalid.email }}
                      </div>
                    </div>
                    <!-- project topic -->
                    <div class="w-full">
                      <div class="py-2">
                        <label
                          for="topic"
                          class="text-sm py-2 max-[768px]:text-xs"
                          >Project Topic</label
                        >
                      </div>
                      <div class="w-full">
                        <input
                          @input="validate"
                          @blur="validate"
                          v-model="project_topic"
                          id="topic"
                          type="text"
                          v-bind:class="{
                            'is-valid': validation.valid.project_topic,
                            'is-invalid': validation.invalid.project_topic,
                          }"
                          placeholder="What is your group project topic"
                          class="border-white border-[0.5px] rounded w-full text-white text-xs px-5 py-3"
                        />
                      </div>
                      <!-- validations -->
                      <div
                        class="text-green-600 max-[568px]:text-xs text-sm"
                        v-if="validation.valid.project_topic"
                      >
                        {{ validation.valid.project_topic }}
                      </div>

                      <div
                        class="text-red-600 max-[568px]:text-xs text-sm"
                        v-if="validation.invalid.project_topic"
                      >
                        {{ validation.invalid.project_topic }}
                      </div>
                    </div>
                  </div>
                  <!-- category ,team size-->
                  <div
                    class="flex gap-2 max-[768px]:block w-full justify-between items-center py-2"
                  >
                    <div class="w-full">
                      <div class="py-2">
                        <label for="" class="text-sm max-[768px]:text-xs"
                          >Category</label
                        >
                      </div>
                      <div>
                        <select
                          @change="validate"
                          @click="validate"
                          v-model="selected_category"
                          name=""
                          id=""
                          v-bind:class="{
                            'is-valid': validation.valid.selected_category,
                            'is-invalid': validation.invalid.selected_category,
                          }"
                          class="border-white border-[0.5px] rounded w-full text-white text-xs px-5 py-3"
                        >
                          <option value="">Select your category</option>
                          <option
                            v-for="(list, index) in categoryList"
                            :key="index"
                            :value="list.id"
                          >
                            {{ list.name }}
                          </option>
                        </select>
                        <!-- validations -->
                        <div
                          class="text-green-600 max-[568px]:text-xs text-sm"
                          v-if="validation.valid.selected_category"
                        >
                          {{ validation.valid.selected_category }}
                        </div>

                        <div
                          class="text-red-600 max-[568px]:text-xs text-sm"
                          v-if="validation.invalid.selected_category"
                        >
                          {{ validation.invalid.selected_category }}
                        </div>
                      </div>
                    </div>
                    <!--team size -->
                    <div class="w-full">
                      <div class="py-2">
                        <label for="" class="text-sm py-2 max-[768px]:text-xs"
                          >Group Size</label
                        >
                      </div>
                      <div>
                        <select
                          @change="validate"
                          @click="validate"
                          v-model="selectedSize"
                          v-bind:class="{
                            'is-valid': validation.valid.selectedSize,
                            'is-invalid': validation.invalid.selectedSize,
                          }"
                          class="border-white border-[0.5px] rounded w-full text-white text-xs px-5 py-3"
                        >
                          <option value="">Select your size</option>
                          <option
                            v-for="(number, index) in numbers"
                            :key="index"
                          >
                            {{ number }}
                          </option>
                        </select>
                      </div>
                      <!-- validations -->
                      <div
                        class="text-green-600 max-[568px]:text-xs text-sm"
                        v-if="validation.valid.selectedSize"
                      >
                        {{ validation.valid.selectedSize }}
                      </div>

                      <div
                        class="text-red-600 max-[568px]:text-xs text-sm"
                        v-if="validation.invalid.selectedSize"
                      >
                        {{ validation.invalid.selectedSize }}
                      </div>
                    </div>
                  </div>

                  <!-- warning -->
                  <div class="text-xs text-[#FF26B9] py-2">
                    <i
                      >Please review your registration details before
                      submitting</i
                    >
                  </div>
                  <!-- agree -->
                  <div class="flex w-full py-2">
                    <div>
                      <input v-model="selectedpolicy" type="checkbox" />
                    </div>
                    <div class="text-xs px-2">
                      <span
                        >I agreed with the event terms and conditions and
                        privacy policy</span
                      >
                    </div>
                  </div>

                  <!-- submit button -->
                  <div class="py-4 flex justify-center text-sm">
                    <button
                      @click="register"
                      class="py-2 px-5 w-[10rem] flex items-center text-white cursor-pointer buttongradiet"
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
      <!-- success -->
      <div
        v-if="success"
        class="text-center animate__animated animate__bounceInDown pt-5 absolute bg-modal zed top-0 bottom-0 left-0 right-0 top-0"
      >
        <!-- image -->
        <div class="flex justify-center">
          <img
            src="@/assets/images/congratulation.svg"
            class="w-[20rem]"
            alt=""
          />
        </div>
        <!-- text -->
        <div class="text-[2.4rem] py-3">
          <span
            >Congratulations <br />
            you have successfully Registered!</span
          >
        </div>
        <div class="py-2">
          <span class="text-sm max-[568px]:text-xs"
            >Yes, it was easy and you did it! <br />
            check your mail box for next step</span
          >
        </div>
        <div class="py-2">
          <router-link :to="{ name: 'home' }">
            <button
              @click="register"
              class="py-2 px-5 w-[15rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white cursor-pointer buttongradiet"
            >
              <span>back</span>
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "animate.css";
import Starthree from "@/components/star/starthree.vue";
import Starfour from "@/components/star/starfour.vue";
import Starfive from "@/components/star/starfive.vue";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const numbers = ref([]);
const disabled = ref(true);
const noServerError = ref(false);
const validation = {
  invalid: {
    team_name: ref(),
    phone_number: ref(),
    email: ref(),
    project_topic: ref(),
    selected_category: ref(),
    selectedSize: ref(),
    selectedpolicy: ref(),
  },
  valid: {
    team_name: ref(),
    phone_number: ref(),
    email: ref(),
    project_topic: ref(),
    selected_category: ref(),
    selectedSize: ref(),
    selectedpolicy: ref(),
  },
};
const team_name = ref("");
const phone_number = ref("");
const email = ref("");
const project_topic = ref("");
const selected_category = ref("");
const selectedSize = ref("");
const selectedpolicy = ref();
const loader = ref(false);
const success = ref(false);
const errorServer = ref([]);

// fectched category from store
const categoryList = computed(() => store.state.categories);

// team size function
for (let i = 1; i <= 10; i++) {
  numbers.value.push(i);
}
// go back to the previous route
const goBack = () => {
  console.log("test");
  router.back(-1);
};
// email regex
function validEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
// form validation
function validate() {
  // team name validation
  if (!team_name.value) {
    validation.invalid.team_name = "Please enter a valid team name";
    validation.valid.team_name = "";
  } else {
    validation.valid.team_name = "Team name is valid";
    validation.invalid.team_name = "";
  }
  // phone  number validation
  if (
    !phone_number.value ||
    phone_number.value.length > 11 ||
    phone_number.value.length < 9
  ) {
    validation.invalid.phone_number = "Please enter a valid phone number";
    validation.valid.phone_number = "";
  } else {
    validation.valid.phone_number = "Phone number is valid";
    validation.invalid.phone_number = "";
  }
  // email validation
  if (!email.value) {
    validation.invalid.email = "Please enter a valid email!";
    validation.valid.email = "";
  } else if (!validEmail(email.value)) {
    validation.invalid.email = "Please enter a valid email!";
    validation.valid.email = "";
  } else {
    validation.valid.email = "Email is valid";
    validation.invalid.email = "";
  }

  // project topic validation
  if (!project_topic.value) {
    validation.invalid.project_topic = "Please enter a valid projet topic";
    validation.valid.project_topic = "";
  } else {
    validation.valid.project_topic = "Project topic is valid";
    validation.invalid.project_topic = "";
  }
  // selected_category validation
  if (!selected_category.value) {
    validation.invalid.selected_category = "Please select a valid category";
    validation.valid.selected_category = "";
  } else {
    validation.valid.selected_category = "Valid selection";
    validation.invalid.selected_category = "";
  }
  // selected Size validation
  if (!selectedSize.value) {
    validation.invalid.selectedSize = "Please select team size";
    validation.valid.selectedSize = "";
  } else {
    validation.valid.selectedSize = "Valid selection";
    validation.invalid.selectedSize = "";
  }
  // // selected policy
  // if (!selectedpolicy.value) {
  //   validation.invalid.selectedpolicy = "";
  //   validation.valid.selectedpolicy = "";
  // } else if (selectedpolicy.value) {
  //   validation.invalid.selectedpolicy = "";
  //   validation.valid.selectedpolicy = "";
  // }
}
function register() {
  loader.value = true;
  console.log("txt");

  if (
    validation.valid.team_name &&
    validation.valid.phone_number &&
    validation.valid.email &&
    validation.valid.project_topic &&
    validation.valid.selected_category &&
    validation.valid.selectedSize
  ) {
    submit();
  }
  return true;
}
async function submit() {
  // try if there are no client side errors
  try {
    await store.dispatch("Register", {
      team_name: team_name.value,
      phone_number: phone_number.value,
      email: email.value,
      project_topic: project_topic.value,
      category: selected_category.value,
      group_size: selectedSize.value,
      privacy_poclicy_accepted: selectedpolicy.value,
    });
    console.log("success");
    success.value = true;
  } catch (error) {
    loader.value = false;
    const serverErr = error.response.data.email;
    if (serverErr == "applicant with this email already exists.") {
      noServerError.value = true;
      validation.invalid.email = "applicant with this email already exists.";
      validation.valid.email = "";
    }
  }
}
// submit form function

// onMounted
onMounted(() => {
  store.dispatch("getCategories");
});
</script>

<style scoped>
.bg-modal {
  background-color: rgba(0, 0, 0, 0.768);
}
.zed {
  z-index: 99999 !important;
}
/* input background */
@media (min-width: 768px) {
  .blurwhite {
    background-color: rgba(255, 255, 255, 0.04);
  }
}
</style>
