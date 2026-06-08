<script setup lang="ts">
import FooterColumn from '@/components/common/FooterColumn.vue';
import LandingSection from '@/components/common/LandingSection.vue';

const quickLinks = [
  { label: 'Download App', href: '#download' },
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#features' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#' },
];

const productLinks = [
  { label: 'Payments', href: '#benefits' },
  { label: 'Savings', href: '#features' },
  { label: 'Cards', href: '#cards' },
  { label: 'Merchants', href: '#features' },
];

const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
];

const legalLinks = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/terms' },
];
</script>

<template>
  <LandingSection id="contact" class-name="py-12  md:py-16 lg:py-20">
    <footer
      class="container-page grid gap-10 text-sm md:grid-cols-2 lg:grid-cols-5"
    >
      <FooterColumn title="Quick Links" :links="quickLinks" />
      <FooterColumn title="Product" :links="productLinks" />
      <FooterColumn title="Stay Connected" :links="socialLinks" />
      <FooterColumn title="Find Us">
        <p class="font-bold text-black">
          23 Alhaji Kosoko St, opp justrite, Ojodu, Lagos 102109, Ogun state,
          Nigeria
        </p>
        <p class="mt-4 font-bold text-black">support@greeppay.com</p>
      </FooterColumn>
      <FooterColumn title="Legal" :links="legalLinks" />
    </footer>

    <p
      class="mt-12 border-t border-theme-line pt-8 text-center text-sm text-theme-muted"
    >
      © 2026 GreepPay. All rights reserved.
    </p>
  </LandingSection>
</template>
