@buscar @plataforma10
Feature: Buscar colectivos

    Scenario: Buscar Viaje
        Given un usuario esta en la página de plataforma10
        When completa en "origen" el texto "Posadas"
        And completa en "destino" el texto "Cordoba"
        And selecciona fecha de "partida" el día "hoy"