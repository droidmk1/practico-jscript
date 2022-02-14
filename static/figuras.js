// console.log("Hello World")
// Codigo del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
	return lado*4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
	return lado*lado;
}

// const areaCuadrado = ladoCuadrado*ladoCuadrado;
// console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

// Codigo del Triangulo
// console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
// 	"Los lados del triangulo miden: "
// 	+ ladoTriangulo1
// 	+ " cm, "
// 	+ ladoTriangulo2
// 	+ " cm, "
// 	+ baseTriangulo
// 	+ " cm "
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
	return (lado1 + lado2 + base);
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
	return (base * altura) / 2;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

// Codigo del Circulos
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");

function diametroCirculo(radio) {
	return radio*2;
}
//Diametro
// const diametroCirculo = radioCirculo*2;
// console.log("El diametro del circulo es: " + diametroCirculo + " cm");

//PI
// const PI = 3.1415;
const PI = Math.PI
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return diametro*PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

function areaCirculo(radio) {
	return (radio*radio) * PI;
}

//Area
// const areaCirculo = (radioCirculo*radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + " cm^2");

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
	const input = document.getElementById("InputCuadrado");
	const value = input.value;

	const perimetroS = perimetroCuadrado(value);
	alert(perimetroS);
}

function calcularAreaCuadrado() {
	const input = document.getElementById("InputCuadrado");
	const value = input.value;

	const areaS = areaCuadrado(value);
	alert(areaS);
}

function calcularPerimetroTriangulo() {
	const lado1 = document.getElementById("InputTriangulo1");
	const lado2 = document.getElementById("InputTriangulo2");
	const base = document.getElementById("InputTriangulo3");

	const value1 = Number(lado1.value);
	const value2 = Number(lado2.value);
	const value3 = Number(base.value);

	// console.log(typeof(value1))
	// console.log(typeof(value2))
	// console.log(typeof(value3))

	const perimetroT = perimetroTriangulo(value1, value2, value3);
	alert(perimetroT);
}

function calcularAreaTriangulo() {
	const base = document.getElementById("InputTriangulo3");
	const altura = document.getElementById("InputTriangulo4");

	const value1 = Number(base.value);
	const value2 = Number(altura.value);

	const areaT = areaTriangulo(value1, value2);
	alert(areaT);
}

function calcularDiametroCirculo() {
	const radio = document.getElementById("InputCirculo");
	const value = Number(radio.value);

	const diametroC = diametroCirculo(value);
	alert(diametroC);
}

function calcularPerimetroCirculo() {
	const radio = document.getElementById("InputCirculo");
	const value = Number(radio.value);

	const perimetroC = perimetroCirculo(value);
	alert(perimetroC);
}

function calcularAreaCirculo() {
	const radio = document.getElementById("InputCirculo");
	const value = Number(radio.value);

	const areaC = areaCirculo(value);
	alert(areaC);
}