import TodoItems from "../../src/components/TodoItems.vue";
export {};

describe("TodoItems.vue", () => {
  it("Mounts TodoItems", () => {
    cy.fixture("todos").then((todos) => {
      cy.mount(TodoItems, {
        propsData: {
          todos: todos,
        },
      });

      cy.get('[data-test="todoitem"]').eq(0).as("firstTodoItem");

      // check if title rendered
      cy.get("[data-test=todoitem-title]").should(
        "contain.text",
        todos[0].title
      );

      // check if completed
      cy.get("@firstTodoItem")
        .find('[data-test="todoitem-cross"]')
        .should("exist");

      cy.get("@firstTodoItem")
        .find('[data-test="todoitem-tick"]')
        .should("not.exist");
    });
  });
});
