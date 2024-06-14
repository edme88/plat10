class Search {
  getMainAnimation() {
    return cy.get(`div[aria-label="animation"]`);
  }

  getTickets() {
    return cy.get(`[data-testid="providerName"]`).parent().parent().parent();
  }

  getButaca() {
    return cy.get('li.disponible a[data-toggle="modal"]');
  }

  getPasajeName() {
    return cy.get("#PasajeroNombre");
  }

  getPasajeLastName() {
    return cy.get("#PasajeroApellido");
  }

  getNaciolanity() {
    return cy.get("#NacionalidadId");
  }

  getDocType() {
    return cy.get("#TipoDocumentoId");
  }

  getDocNum() {
    return cy.get("#DocumentoNumero");
  }

  getBirthDate() {
    return cy.get("#FechaNacimiento");
  }

  getMasc() {
    return cy.get("#SexoMasculino");
  }

  getFem() {
    return cy.get("#SexoFemenino");
  }
}

module.exports = new Search();
