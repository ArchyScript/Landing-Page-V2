<script setup lang="ts">
import FooterColumn from '@/components/common/FooterColumn.vue';
import LandingSection from '@/components/common/LandingSection.vue';
import { DOWNLOAD_URL, EXTERNAL_LINK_TARGET } from '@/data/links';

const quickLinks = [
  {
    label: 'Download App',
    href: DOWNLOAD_URL,
    target: EXTERNAL_LINK_TARGET,
  },
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
  {
    label: 'Terms & Conditions',
    href: `${import.meta.env.BASE_URL}terms`,
  },
  {
    label: 'Privacy Policy',
    href: `${import.meta.env.BASE_URL}privacy`,
  },
  {
    label: 'Savings Policy',
    href: `${import.meta.env.BASE_URL}savings-policy`,
  },
];
</script>

<template>
  <LandingSection id="contact">
    <div class="container-page container-y-padding">
      <footer class="grid gap-10 text-sm md:grid-cols-2 lg:grid-cols-5">
        <FooterColumn title="Quick Links" :links="quickLinks" />
        <FooterColumn title="Product" :links="productLinks" />
        <FooterColumn title="Stay Connected" :links="socialLinks" />
        <FooterColumn title="Find Us">
          <p class="font-bold text-black">
            23 Alhaji Kosoko St, opposite Justrite, Ojodu, Lagos 102109,
            Nigeria
          </p>
          <p class="mt-4 font-bold text-black">support@greeppay.com</p>
        </FooterColumn>
        <FooterColumn title="Legal" :links="legalLinks" />
      </footer>

      <p
        class="mt-12 border-t border-theme-line pt-8 text-center text-sm text-theme-muted"
      >
        &copy; 2026 GreepPay. All rights reserved.
      </p>
    </div>
  </LandingSection>
</template>
