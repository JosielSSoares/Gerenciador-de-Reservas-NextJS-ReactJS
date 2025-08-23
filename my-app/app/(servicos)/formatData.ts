
export function formatarDataBrasileira(dataISO: string | null | undefined): string {
    // Verifica se a data existe
    if (!dataISO) {
        return '';
    }

    try {
        // Remove a parte do horário se existir (pega apenas YYYY-MM-DD)
        const apenasData = dataISO.split('T')[0].split(' ')[0];
        
        // Cria objeto Date a partir da string ISO
        const data = new Date(apenasData + 'T00:00:00');
        
        // Verifica se a data é válida
        if (isNaN(data.getTime())) {
            return '';
        }
        
        // Formata para DD/MM/YYYY
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // +1 porque getMonth() retorna 0-11
        const ano = data.getFullYear();
        
        return `${dia}/${mes}/${ano}`;
        
    } catch (error) {
        console.error('Erro ao formatar data:', error);
        return '';
    }
}