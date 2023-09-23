<template>
  <div id="section1">
    <div class="bg-[#150E28] montFontLight border-b border-slate-600">
      <div class="container mx-auto">
        <div class="min-[768px]:w-[90%] mx-auto">
          <div class="grid md:grid-cols-2 gap-2 py-[4rem]">
            <!-- text -->
            <div class="max-[992px]:order-2 max-[768px]:px-[2rem]">
              <div
                class="clashBold max-[568px]:text-center max-[568px]:text-[1.2rem] text-[1.5rem]"
              >
                <div class="text-white">
                  <span>Frequently Ask</span>
                </div>
                <div class="text-[#D434FE]">
                  <span>Question</span>
                </div>
              </div>
              <div class="text-white text-sm leading-loose">
                <span>
                  We got answers to the questions that you might want to ask
                  about getlinked Hackathon 1.0
                </span>
              </div>
              <!-- accordion -->

              <div
                v-for="(list, index) in faq"
                :key="index"
                class="flex flex-wrap py-2 text-sm max-[568px]:text-xs border-b border-[#D434FE] text-white"
              >
                <div class="flex items-center justify-between w-full">
                  <label class="grow px-4 py-2 font-medium" :for="list.for">{{
                    list.title
                  }}</label>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  class="peer mx-4 my-2 h-0 w-0 appearance-none border text-slate-800 border-[#D434FE] accent-slate-600 opacity-0"
                  type="checkbox"
                  name="collapse"
                  :id="list.id"
                />

                <div
                  class="py-3 absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:opacity-100"
                >
                  {{ list.text }}
                </div>
              </div>

              <div></div>
            </div>
            <!-- image -->
            <div class="max-[992px]:order-1">
              <!-- image -->
              <div class="flex justify-center">
                <div class="max-[768px]:w-[20rem] max-[992px]:w-[25rem]">
                  <img
                    src="@/assets/images/cwok_casual_211.svg"
                    alt=""
                    class="w-full bounce-animation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Faq from "@/json/faq.json";
import Faqres from "@/json/faqresult.json";
import { onMounted } from "vue";
import { initFlowbite, initAccordions } from "flowbite";

const faq = ref(Faq);
const faqres = ref(Faqres);

function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
  initAccordions();
  return {
    faq,
    faqres,
  };
});
</script>

<style scoped>
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
