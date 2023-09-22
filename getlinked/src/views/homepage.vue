<template>
  <div class="overflow-hidden">
    <!-- hero -->
    <div>
      <Hero />
    </div>
    <!-- intro -->
    <div>
      <Introduction />
    </div>
    <!-- RulesGuidelines -->
    <div>
      <RulesGuidelines />
    </div>
    <!-- Criteria -->
    <div>
      <Criteria />
    </div>
    <!--Faq -->
    <div id="section1">
      <Faq />
    </div>
    <!--Prizes -->
    <div>
      <Prizes />
    </div>
    <!--Partners -->
    <div>
      <Partners />
    </div>
    <!--Privacy -->
    <div>
      <Privacy />
    </div>
  </div>
</template>

<script setup>
import Hero from "@/components/HeroSection.vue";
import Introduction from "@/components/Introduction.vue";
import RulesGuidelines from "@/components/RulesAndGuidelines.vue";
import Criteria from "@/components/Criteria.vue";
import Faq from "@/components/Faqs.vue";
import Partners from "@/components/Partners.vue";
import Privacy from "@/components/privacy.vue";
import Prizes from "@/components/prizs.vue";
</script>

<style></style>
