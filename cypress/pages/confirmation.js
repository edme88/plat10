class Confirmation {
  getCardMainBtn() {
    return cy.get("#boton-medios-de-pago");
  }

  getCardType() {
    return cy.get(".contenedor-item contenedor-tarjeta");
  }

  getEmail() {
    return cy.get("#Email");
  }

  getNacionalidad() {
    return cy.get("#NacionalidadId");
  }

  getDocType() {
    return cy.get("#TipoDocumentoId");
  }

  getDocNumber() {
    return cy.get("#DocumentoNumero");
  }

  getName() {
    return cy.get("#Nombre");
  }

  getLastName() {
    return cy.get("#Apellido");
  }

  getAreaCode() {
    return cy.get("#CodigoAreaFijo");
  }

  getPhoneNumber() {
    return cy.get("#TelefonoFijo");
  }
}

module.exports = new Confirmation();
