const salariosPer = peru.map(
	function (personita) {
		return personita.salary;
	}
);

const salariosPerSorted = salariosPer.sort(
	function (salaryA, salaryB) {
		return salaryA - salaryB;
	}
);


function esPar(numerito) {
	return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
	const sumaLista = lista.reduce(
		function (valorAcumulado = 0, nuevoElemento) {
			return valorAcumulado + nuevoElemento;
		}
	);

	const promedioLista = sumaLista / lista.length;

	return promedioLista;
}

function medianaSalarios(lista) {
	const mitad = parseInt(lista.length / 2);

	if (esPar(lista.length)) {
		const personitaMitad1 = lista[mitad - 1];
		const personitaMitad2 = lista[mitad];

		const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

		return mediana;
	}
	else {
		const personitaMitad = lista[mitad];
		return personitaMitad;
	}
}

const medianaGeneralPer = medianaSalarios(salariosPerSorted)

//Mediana del top 10%

const spliceStart = (salariosPerSorted.length * 90) / 100;
const spliceCount = salariosPerSorted.length - spliceStart;

const salarioPerTop10 = salariosPerSorted.splice(
	spliceStart,
	spliceCount,
);

const medianaTop10Per = medianaSalarios(salarioPerTop10);

console.log({
	medianaGeneralPer,
	medianaTop10Per,
});