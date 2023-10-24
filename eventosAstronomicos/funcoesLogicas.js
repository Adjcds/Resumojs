/**
 * @description Verifica se a chuva recebida por parâmetro está visível com base na data atual.
 * Retorna true se a chuva está visível, false caso contrário.
 *
 * @param {Object} chuva - Objeto contendo informações da chuva.
 * @param {Date} dataAtual - Data atual para verificar a visibilidade.
 * @returns {boolean}
 */
export const verificaChuvaVisivelPorData = (chuva, dataAtual) => {
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim + '/' + anoAtual);

    if (dataInicio.getMonth() + 1 > dataFim.getMonth() + 1) {
        const anoFinal = dataFim.getFullYear();
        dataFim.setFullYear(anoFinal + 1);
    }

    return (dataAtual >= dataInicio && dataAtual <= dataFim);
}

/**
 * @description Verifica se a chuva recebida por parâmetro estará visível nos próximos 2 meses com base na data atual.
 * Retorna true se a chuva estiver visível nos próximos 2 meses, false caso contrário.
 *
 * @param {object} chuva - Objeto contendo informações da chuva.
 * @param {Date} data - Data para verificar a visibilidade nos próximos 2 meses.
 * @returns {boolean}
 */
export const verificaChuvaVisivelProximos2Meses = (chuva, data) => {
    const dataAtual = data;
    const anoAtual = dataAtual.getFullYear();
    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(dataAtual);

    if (dataAtual.getMonth() + 1 > dataInicio.getMonth() + 1) {
        const anoFinal = dataInicio.getFullYear();
        dataInicio.setFullYear(anoFinal + 1);
    }

    dataFim.setMonth(dataFim.getMonth() + 2);

    return (dataAtual < dataInicio && dataInicio < dataFim);
}

/**
 * @description Inverte o mês e o dia de uma data que não possui ano definido.
 *
 * @param {String} data - Data no formato "mês/dia".
 */
export const inverteMesAno = (data) => {
    const dataInvertida = data.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}

/**
 * @description Retorna um texto com a intensidade da chuva com base na descrição da intensidade.
 *
 * @param {String} intensidade - Descrição da intensidade da chuva.
 */
export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';

    if (intensidade.indexOf('Forte') >= 0) {
        novaIntensidade = '3 (Forte)';
    } else if (intensidade.indexOf('Média') >= 0) {
        novaIntensidade = '2 (Média)';
    } else if (intensidade.indexOf('Irregular') >= 0) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
}

/**
 * @description Retorna o hemisfério com base no valor da declinação.
 *
 * @param {Number} declinacao - Valor da declinação.
 */
export const retornaHemisferio = (declinacao) => (declinacao >= 0) ? 'Norte' : 'Sul';
