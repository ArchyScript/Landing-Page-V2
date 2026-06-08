import type UiIcon from "@/components/common/UiIcon.vue";

declare module "vue" {
  export interface GlobalComponents {
    UiIcon: typeof UiIcon;
  }
}

export {};
