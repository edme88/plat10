import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const confirmation = require("../../pages/confirmation");

When(`selecciona una tarjeta {string}`, (cardType) => {
  confirmation.getCardMainBtn().click();
  confirmation.getCardType().contains(cardType).click();
});

When(`completa los datos del formulario de contacto`, (table) => {
  table = table.rows()[0];
  confirmation.getEmail().type(table[0]);
  confirmation.getNacionalidad().select(table[1]);
  confirmation.getDocType().select(table[2]);
  confirmation.getDocNumber().type(table[3]);
  confirmation.getName().type(table[4]);
  confirmation.getLastName().type(table[5]);
  confirmation.getAreaCode().type(table[6]);
  confirmation.getPhoneNumber().type(table[7]);
});
