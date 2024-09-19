function verificaLetraA(s) {
    const countA = (s.match(/a/gi) || []).length;
    
    if (countA > 0) {
        console.log(`A letra 'a' aparece ${countA} vezes.`);
    } else {
        console.log("A letra 'a' não aparece na string.");
    }
}

const texto = "oi";
verificaLetraA(texto);
