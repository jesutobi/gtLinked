<template>
  <div>
    <div class="bg-[#150E28] relative text-white montFontLight">
      <div class="container mx-auto max-[568px]:px-[2rem]">
        <div class="grid md:grid-cols-3 justify-between gap-2 py-[1rem]">
          <!--first section-->
          <div class="relative">
            <!-- logo -->
            <span class="absolute left-4 -bottom-3"
              ><Starthree class="px-7"
            /></span>
            <div
              class="flex clashBold max-[768px]:text-[1.7rem] text-[2rem] items-center"
            >
              <div class="text-white">
                <span>get</span>
              </div>
              <div class="text-[#D434FE]">
                <span>linked</span>
              </div>
            </div>
            <!-- text -->
            <div class="text-white text-sm leading-loose">
              <span>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </span>
            </div>
            <div class="flex items-center text-sm pt-5">
              <div><span>Terms of Use</span></div>
              <div class="text-[#D434FE] px-2 font-bold"><span>|</span></div>
              <div>Privacy Policy</div>
            </div>
          </div>
          <!-- second section -->
          <div
            class="max-[768px]:block max-[768px]:py-5 pt-2 flex justify-center relative"
          >
            <div class="text-white text-sm">
              <span class="absolute left-4 bottom-[5rem]"
                ><Starseven class="px-7"
              /></span>
              <div class="text-[#D434FE] montFontBold">
                <span> Useful Links</span>
              </div>
              <div class="py-2">
                <span> Overview</span>
              </div>
              <div class="py-2">
                <span> Timeline</span>
              </div>
              <div class="py-2">
                <span> FAQs</span>
              </div>
              <!-- register button -->
              <router-link :to="{ name: 'register' }">
                <div class="py-2">
                  <span> Register</span>
                </div></router-link
              >
              <div class="py-2 flex items-center">
                <div>
                  <span>Follow us </span>
                </div>
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
          <!-- third section -->
          <div class="text-white max-[768px]:py-5 pt-2 relative text-sm">
            <span class="absolute right-[4rem]"
              ><Starthree class="px-7"
            /></span>
            <div class="text-[#D434FE] montFontBold">
              <span> Contact Us</span>
            </div>
            <!-- call -->
            <div class="py-2 flex items-center">
              <!-- icon -->
              <div>
                <img src="@/assets/icon/call.svg" alt="" class="w-full" />
              </div>
              <div class="px-2">
                <span>+234 679 81819</span>
              </div>
            </div>
            <div class="py-2 flex items-center">
              <!-- icon -->
              <div>
                <img src="@/assets/icon/location.svg" alt="" class="w-full" />
              </div>
              <div class="px-2">
                <span>27,Alara Street Yaba 100012 Lagos State</span>
              </div>
            </div>
          </div>
        </div>
        <!-- logo -->
        <span class="absolute left-0 bottom-0"><Starthree class="px-7" /></span>
        <!-- copyright -->
        <div class="text-center text-xs py-5">
          <span>All rights reserved. © getlinked Ltd.</span>
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

<style></style>
