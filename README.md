# Repositori DWEC Jordi Casanova

Aquest repositori és un espai per emmagatzemar les activitats i projectes realitzats durant el curs de 2CFGS DAW en l'assignatura de Desenvolupament Web en Entorn Client (DWEC).

## Accés al Repositori

La pàgina del repositori està disponible en línia a: [https://Jordismt.github.io/CasanovaJordi_DWEC](https://Jordismt.github.io/CasanovaJordi_DWEC)

## Clonació del Repositori

Si desitges clonar aquest repositori al teu ordinador local, segueix aquests passos:

1. Obre una terminal o línia de comandes.
2. Utilitza el següent comandament per clonar el repositori:
   ```bash
   git clone https://github.com/Jordismt/CasanovaJordi_DWEC.git

3. Inicia l'archiu index.html per a millor navegació !!

## ERRORS O POSSIBLES DUBTES (Projecte 1AVAL)

1.- No es veuen les imatges generades dinamicament desde el data.json en la página del repositori.

 -Com sabem, GitHub pages, oferix allotjament a págines estátiques, per tant les imatges generades dinámicament desde el JSON no seran visibles, per a veure la Página funcional 100%, clona el repositori amb la comanda anterior !!

 2.-Posibles problemes en CORS al executar directament index.html sense utilitat d'un servidor web

  -Al executar l'index.html directament, pot hi haure un problema de CORS en el navegador i no visualitzar be la página, ja que per a mostrar els datos del JSON, s'utilitza fetch per a fer la solicitud i mostrar els datos
  Per a evitar aquest error, pots executar l'index.html en un servidor web com Apache o executarlo amb la extencio de VS Code 'Live Server' per a que la página web es vega perfecta.
