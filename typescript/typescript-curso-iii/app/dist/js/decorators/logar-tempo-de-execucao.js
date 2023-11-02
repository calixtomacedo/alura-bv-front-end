export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milesegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const tinicial = performance.now();
            const response = metodoOriginal.apply(this, args);
            const tfinal = performance.now();
            console.log(`${propertyKey}, Tempo de execução:  ${(tfinal - tinicial) / divisor} ${unidade}`);
            response;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map