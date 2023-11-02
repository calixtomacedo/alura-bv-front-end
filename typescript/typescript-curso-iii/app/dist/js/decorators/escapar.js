export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let response = metodoOriginal.apply(this, args);
        if (typeof response === 'string') {
            response = response.replace(/<script>[\s\S]*?<script>/, '');
        }
        return response;
    };
    return descriptor;
}
//# sourceMappingURL=escapar.js.map