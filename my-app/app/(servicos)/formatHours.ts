export function formatarHorario(horarioCompleto: string | null | undefined): string {
    if (!horarioCompleto) {
        return '';
    }
    
    try {
        // Se vier no formato HH:MM:SS, pega apenas HH:MM
        const horarioArray = horarioCompleto.split(':');
        if (horarioArray.length >= 2) {
            return `${horarioArray[0]}:${horarioArray[1]}`;
        }
        
        return horarioCompleto;
        
    } catch (error) {
        console.error('Erro ao formatar horário:', error);
        return horarioCompleto;
    }
}