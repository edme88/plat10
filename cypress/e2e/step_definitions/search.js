import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const search = require("../../pages/search");

Then(`se visualiza la imagen de Buscando Pasajes`, () => {
  cy.get("h1").should("have.text", "Buscando pasajes");
  search.getMainAnimation().should("be.visible");
});

Then(`posteriormente se visualizan los pasajes`, () => {
  search.getTickets().each((ticket) => {
    cy.wrap(ticket).should("be.visible");
  });
});

When(`el usuario presiona seleccionar del pasaje {string}`, (passNum) => {
  cy.get("button")
    .contains("Seleccionar")
    .eq(passNum - 1)
    .click();
});

When(`selecciona la butaca disponible`, () => {
  search.getButaca().first().click();
});

When(`completa los siguientes datos`, (table) => {
  table = table.rows()[0];

  search.getPasajeName().type(table[0]);
  search.getPasajeLastName().type(table[1]);

  if (table[2] !== "Argentina") {
    search.getNaciolanity().click();
    search.getNaciolanity().contains(table[2]).click();
  }

  if (table[3] !== "DNI") {
    search.getDocType().click();
    search.getDocType().contains(table[3]).click();
  }

  search.getDocNum().type(table[4]);
  search.getBirthDate().type(table[5]);

  if (table[6] == "Femenino") {
    search.getFem().click();
  } else {
    search.getMasc().click();
  }
});
