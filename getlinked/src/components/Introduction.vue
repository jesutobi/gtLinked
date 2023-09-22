<template>
  <div>
    <div class="bg-[#150E28] montFontLight border-b border-slate-600">
      <div class="container mx-auto">
        <div class="min-[768px]:w-[90%] mx-auto">
          <div class="grid sm:grid-cols-2 gap-2 py-[1rem]">
            <!-- image -->
            <div>
              <div><StarOne /></div>
              <!-- image -->
              <div class="flex justify-center">
                <!-- @mouseover="stopRotation"
                @mouseleave="startRotation" -->
                <div
                  class="w-[27rem] max-[568px]:w-[18rem] max-[768px]:w-[15rem] max-[768px]:pt-[3rem] max-[568px]:pt-0"
                >
                  <img
                    src="@/assets/images/The-big-idea.svg"
                    alt=""
                    class="w-full bounce-animation"
                  />
                </div>
              </div>
            </div>
            <!-- text -->
            <div
              class="py-[5rem] max-[568px]:py-[2rem] max-[768px]:p-[2rem] max-[568px]:text-center"
            >
              <div class="clashBold text-[1.5rem] max-[568px]:text-[1.2rem]">
                <div class="text-white">
                  <span>Introduction to getlinked </span>
                </div>
                <div class="text-[#D434FE]">
                  <span>tech Hackathon 1.0 </span>
                </div>
              </div>
              <div class="text-white text-sm leading-loose">
                <div><Starthree /></div>
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
            <div class="flex justify-center"><Startwo /></div>
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

// animation
function stopRotation() {
  const image = document.querySelector(".rotate-3d");
  image.style.animationPlayState = "paused";
}
function startRotation() {
  const image = document.querySelector(".rotate-3d");
  image.style.animationPlayState = "running";
}
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
