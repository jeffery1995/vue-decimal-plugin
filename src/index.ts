import { Money, Percentage } from "./core";

import type { App, Plugin } from "vue";
import type { DecimalOptions } from "./core/type";

const DecimalPlugin: Plugin = {
  install(app: App, locale = "en") {
    app.config.globalProperties.$money = (
      value: number,
      options?: DecimalOptions
    ) => {
      const defaultMoneyOptions: DecimalOptions = {
        locale,
        placeholder: "-",
      };
      const mergedOptions = { ...defaultMoneyOptions, ...options };
      const instance = new Money(value, mergedOptions);

      return instance;
    };
    app.config.globalProperties.$percentage = (
      value: number,
      options?: DecimalOptions
    ) => {
      const defaultPercentageOptions: DecimalOptions = {
        locale,
        placeholder: "-",
        precision: 2,
      };
      const mergedOptions = { ...defaultPercentageOptions, ...options };
      const instance = new Percentage(value, mergedOptions);

      return instance;
    };
  },
};

export default DecimalPlugin;
