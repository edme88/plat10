class Search {
  getMainAnimation() {
    return cy.get(`div[aria-label="animation"]`);
  }

  getTickets() {
    return cy.get(`[data-testid="providerName"]`).parent().parent().parent();
  }
}

module.exports = new Search();
