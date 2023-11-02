export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`------ Parametros: ${JSON.stringify(args)}`);
            const response = metodoOriginal.apply(this, args);
            console.log(`------ Retorno: ${JSON.stringify(response)}`);
            return response;
        };
        return descriptor;
    };
}
