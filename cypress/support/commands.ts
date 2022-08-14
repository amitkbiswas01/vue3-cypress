/// <reference types="cypress" />
export {};

import { mount } from "cypress/vue";

Cypress.Commands.add("mount", mount);
