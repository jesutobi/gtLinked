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
              <div>
                <div
                  id="accordion-flush"
                  data-accordion="collapse"
                  data-active-classes="bg-[#150E28] text-sm dark:bg-gray-900 text-gray-900 dark:text-white"
                  data-inactive-classes="text-gray-500 dark:text-gray-400"
                >
                  <!-- <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full text-sm py-5 font-medium text-left text-white border-b border-[#D434FE]"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span class="text-sm">a</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="#D434FE"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2> -->
                  <!-- <div
                  id="accordion-flush-body-2"
                  class="hidden"
                  aria-labelledby="text-sm accordion-flush-heading-1"
                >
                  <div class="py-3 border-b border-[#D434FE]">
                    <p class="mb-2 text-white text-sm">
                      {{ txt }}
                    </p>
                  </div>
                </div> -->
                </div>
              </div>
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
