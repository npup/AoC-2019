# AoC-2019

installera dependencies (mocha och chai)

    npm i

## Ny uppgift
    
skapa template för ny dag

    npm run create <nr>

- Klistra in din input i `<dag>/assignment/input.txt`.
- Fyll i testkod och lösningar i `<dag>/test.js` och `<dag>/solutions.js`.

Det finns hjälpfunktioner för att läsa in din input som rå text, radvis, splittat på separator:
    
    getInput();
    getInputRows();
    getCsvNumbers();
    getCsvStrings();

etc.

kör tester för dag

    npm test <nr>
    
kör solutions för dag
    
    npm start <nr>

