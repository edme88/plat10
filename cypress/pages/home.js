class Home {
  getTxt() {
    return cy.get(`[arial-label="Ingrese ciudad o terminal"]`);
  }

  getTxtOption() {
    return cy.get(`li[role="option"]`);
  }
}

module.exports = new Home();
