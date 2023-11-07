/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/

const text = "Hi, I am learning Javascript"
const vowels = "aeiouAEIOU"

let result = ""

for (let i=0; i<text.length; i++) {
        if (!vowels.includes(text.charAt(i))) {
            result += text.charAt(i);
    }
}
    

