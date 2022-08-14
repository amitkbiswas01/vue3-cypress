import { mountApp } from "../support/component";
import TodoItems from "../../src/components/TodoItems.vue";
import { useStore } from "../../src/store";

export {};

describe("App.vue", () => {
  let store: ReturnType<typeof useStore>;

  beforeEach(() => {
    store = mountApp();
  });

  it("shows the header", () => {
    cy.get("[data-test=todo-header]").should("contain.text", "Todos");
  });

  it("shows 200 todos", () => {
    cy.mount(TodoItems, {
      propsData: {
        todos: store.allTodos,
      },
    });
    cy.get('[data-test="todoitem"]').should("have.length", 200);
  });
});
