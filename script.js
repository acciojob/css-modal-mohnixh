describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should close modal when close button is clicked", () => {
    // Open modal
    cy.get("#openModal").click();

    // Close modal via close button (force click due to pointer-events)
    cy.get(".close-modal").click({ force: true });

    // Assert modal is closed
    cy.get(".modal").should("have.css", "display", "none");
  });

  it("should close modal when clicking outside of modal", () => {
    // Open modal
    cy.get("#openModal").click();

    // Temporarily disable pointer events for test
    cy.window().then(win => {
      win.document.querySelector('.modal-content').style.pointerEvents = 'none';
    });

    // Click outside modal (on the overlay)
    cy.get(".modal").click("topLeft");

    // Assert modal is closed
    cy.get(".modal").should("have.css", "display", "none");

    // Restore pointer-events
    cy.window().then(win => {
      win.document.querySelector('.modal-content').style.pointerEvents = 'auto';
    });
  });
});