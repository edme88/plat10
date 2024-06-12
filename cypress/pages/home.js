class Home {
  getTxt() {
    return cy.get(`[arial-label="Ingrese ciudad o terminal"]`);
  }

  getTxtOption() {
    return cy.get(`li[role="option"]`);
  }

  getDatePicker() {
    return cy.get(".SingleDatePicker");
  }

  getDaySquare() {
    return cy.get('td[class*="CalendarDay"][aria-disabled="false"]');
  }

  getCalendar() {
    return cy.get('[aria-label="Calendar"]');
  }
}

module.exports = new Home();
