import { DecimalOptions } from "./core/type";

import type { Money, Percentage } from "./core";
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $money: (value: number, options?: DecimalOptions) => Money;
    $percentage: (value: number, options?: DecimalOptions) => Percentage;
  }
}
