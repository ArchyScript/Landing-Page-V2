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
  { label: 'Twitter', href: 'https://x.com/Greeppay' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/showcase/greep-pay/' },
  { label: 'Instagram', href: 'https://instagram.com/greeppay' },
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
          <p class="font-semibold text-neutral-100">
            23 Alhaji Kosoko St, opposite Justrite, Ojodu, Lagos 102109, Nigeria
          </p>
          <p class="mt-4 font-semibold  text-neutral-100">
            support@greeppay.com
          </p>
        </FooterColumn>
        <FooterColumn title="Legal" :links="legalLinks" />
      </footer>
    </div>

    <p
      class="-mx-4 py-10 border-t border-theme-line pt-8 text-center font-medium text-sm text-neutral-60 md:-mx-5 lg:-mx-6"
    >
      &copy; 2026 GreepPay. All rights reserved.
    </p>
  </LandingSection>
</template>
