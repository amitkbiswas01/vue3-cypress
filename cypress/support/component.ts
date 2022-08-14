import { createTestingPinia, TestingOptions } from "@pinia/testing";
import { useStore } from "../../src/store";
import App from "../../src/App.vue";
import "./commands";
import "../../src/style.css";

const mountApp = (options?: TestingOptions) => {
  cy.mount(App, {
    global: {
      plugins: [
        createTestingPinia({
          stubActions: false,
          createSpy: cy.spy,
          ...options,
        }),
      ],
    },
  });
  return useStore();
};

export { mountApp };
