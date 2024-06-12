import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const home = require("../../pages/home");
const search = require("../../pages/search");

Given(`un usuario esta en la pagina de plataforma10`, () => {
  cy.viewport("macbook-16");
  cy.visit("https://www.plataforma10.com.ar");
});

When(`completa en {string} el texto {string}`, (sitio, texto) => {
  sitio === "origen"
    ? home.getTxt().first().type(texto)
    : home.getTxt().last().type(texto);

  home.getTxtOption().contains(texto).click();
});

When(`selecciona fecha de {string} el dia {string}`, (sitio, date) => {
  sitio === "partida"
    ? home.getDatePicker().first().click()
    : home.getDatePicker().last().click();

  const fecha = new Date();
  const dayNum = fecha.getDate();
  let day;
  if (date === "hoy") {
    day = dayNum;
  } else if (date === "mañana") {
    day = dayNum + 1;
  } else {
    date = date.replace("+", "").replace("dias", "");
    day = dayNum + Number(date);
  }
  home.getDaySquare().contains(day).click();
});

When(`hace click en el boton {string}`, (btnTxt) => {
  cy.get("button").contains(btnTxt).click();
});

Then(`se visualiza la imagen de Buscando Pasajes`, () => {
  cy.get("h1").should("have.text", "Buscando pasajes");
  search.getMainAnimation().should("be.visible");
});

Then(`posteriormente se visualizan los pasajes`, () => {
  search.getTickets().each((ticket) => {
    cy.wrap(ticket).should("be.visible");
  });
});
