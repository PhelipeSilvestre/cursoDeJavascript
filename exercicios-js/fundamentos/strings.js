const escola = "Cod3r"//em Javascript strigs podem ser usadas com '' ou "" 

console.log(escola.charAt(4));// aqui eu seleciono qual caracter quero mostrar, nesse caso o quarto.
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola));
console.log(escola.replace(3, 'e')); // troca 3 por 'e'

console.log('Ana, Maria, Pedro'.split(','));
