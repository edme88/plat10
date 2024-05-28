import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
const home = require("../../pages/home");

Given(`un usuario esta en la página de plataforma10`, () => {
  cy.visit("https://www.plataforma10.com.ar");
});

When(`completa en {string} el texto {string}`, (sitio, texto) => {
  sitio === "origen"
    ? home.getTxt().first().type(texto)
    : home.getTxt().last().type(texto);

  home.getTxtOption().contains(texto).click();
  cy.log(`Se busco: Prueba`);
});
