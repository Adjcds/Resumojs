// Importa a coleção de chuvas de meteoros do arquivo "chuva-de-meteoros.js"
import colecaoChuvasDeMeteoros from "./chuva-de-meteoros.js";

// Importa a função imprimeListaDeChuvas do arquivo "funcoesInterface.js"
import imprimeListaDeChuvas from "./funcoesInterface.js";

// Importa funções lógicas do arquivo "funcoesLogicas.js"
import {
    verificaChuvaVisivelPorData,
    verificaChuvaVisivelProximos2Meses
} from "./funcoesLogicas.js";

// Cria uma instância de data atual
const dataAtual = new Date();

// Filtra chuvas de meteoros visíveis hoje com base na data atual
const chuvasVisiveisHoje = colecaoChuvasDeMeteoros.filter(
    (chuva) => verificaChuvaVisivelPorData(chuva, dataAtual)
);

// Filtra chuvas de meteoros visíveis nos próximos 2 meses com base na data atual
const chuvasVisiveisProximos2Meses = colecaoChuvasDeMeteoros.filter(
    (chuva) => verificaChuvaVisivelProximos2Meses(chuva, dataAtual)
);

// Imprime um título
console.log('Chuva de meteoros');

// Verifica se há chuvas de meteoros visíveis hoje
if (chuvasVisiveisHoje.length > 0) {
    let msg = "\nEncontramos ";
    msg += chuvasVisiveisHoje.length === 1
        ? '1 chuva de meteoros que pode ser vista hoje'
        : chuvasVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje';

    // Imprime a mensagem e a lista de chuvas de meteoros visíveis hoje
    console.log(msg);
    imprimeListaDeChuvas(chuvasVisiveisHoje);
} else {
    // Imprime uma mensagem se não houver chuvas visíveis hoje
    console.log('\nNenhuma chuva de meteoros passando no momento');
}

// Imprime uma mensagem sobre as próximas chuvas de meteoros e lista chuvas visíveis nos próximos 2 meses
console.log('\n\nNão perca as próximas chuvas de meteoros:');
imprimeListaDeChuvas(chuvasVisiveisProximos2Meses);
