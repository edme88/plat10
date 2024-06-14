@buscar @plataforma10
Feature: Buscar colectivos

    Scenario: Buscar Viaje
        Given un usuario esta en la pagina de plataforma10
        When completa en "origen" el texto "Posadas"
        And completa en "destino" el texto "Cordoba"
        And selecciona fecha de "partida" el dia "+8dias"
        And hace click en el boton "Buscar Pasajes"
        Then se visualiza la imagen de Buscando Pasajes
        And posteriormente se visualizan los pasajes
        When el usuario presiona seleccionar del pasaje "1"
        And selecciona la butaca disponible
        And completa los siguientes datos
            | nombre   | apellido  | nacionalidad | TipoDoc | doc      | nacimiento | sexo     |
            | Agustina | Aliciardi | Argentina    | DNI     | 34022568 | 24/08/1990 | Femenino |