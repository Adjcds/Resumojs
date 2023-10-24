// Importa funções do arquivo "funcoesLogicas.js"
import { inverteMesAno, retornaHemisferio, retornaIntensidade } from "./funcoesLogicas.js";

/**
 * @description Imprime uma tabela com a lista de chuvas
 * @param {Array} lista - Uma lista de objetos de chuva
 */
const imprimeListaDeChuvas = (lista) => {
    console.log('\nNOME DA CHUVA               - INTENSIDADE - HEMISFÉRIO - PERÍODO');

    // Itera sobre a lista de chuvas e imprime cada uma delas
    lista.forEach(imprimeChuva);
}

/**
 * @description Imprime uma linha da tabela de lista de chuvas
 * @param {Object} chuva - Um objeto de chuva contendo informações
 */
const imprimeChuva = (chuva) => {
    // Formata o nome da chuva para ter 27 caracteres, preenchendo com espaços em branco se necessário
    const nome = chuva.nome.padEnd(27,' ');

    // Obtém a intensidade da chuva com base na função retornaIntensidade
    let intensidade = retornaIntensidade(chuva.intensidade);

    // Obtém o hemisfério da chuva com base na função retornaHemisferio
    let hemisferio = retornaHemisferio(chuva.declinacao);

    // Formata a intensidade e o hemisfério para ter um comprimento específico, preenchendo com espaços em branco se necessário
    intensidade = intensidade.padEnd(11, ' ');
    hemisferio = hemisferio.padEnd(10,' ');

    // Inverte o formato das datas de início e fim da chuva usando a função inverteMesAno
    const dataInicio = inverteMesAno(chuva.inicio);
    const dataFim = inverteMesAno(chuva.fim);

    // Imprime os detalhes da chuva formatados na linha da tabela
    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${dataInicio} à ${dataFim} `);
}

// Exporta a função imprimeListaDeChuvas para que possa ser usada em outros arquivos
export default imprimeListaDeChuvas;
