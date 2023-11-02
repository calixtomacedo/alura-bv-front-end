export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor  
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            let divisor = 1;
            let unidade = 'milesegundos';
            if(emSegundos){
               divisor = 1000;
               unidade = 'segundos'; 
            }
            const tinicial = performance.now();
            const response = metodoOriginal.apply(this, args);
            const tfinal = performance.now();
            console.log(`${propertyKey}, Tempo de execução:  ${(tfinal - tinicial) / divisor} ${unidade}`);
            response
        };
        return descriptor
    }
    
}
