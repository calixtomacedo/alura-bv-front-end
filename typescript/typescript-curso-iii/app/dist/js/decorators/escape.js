export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let response = metodoOriginal.apply(this, args);
        if (typeof response === 'string') {
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey} `);
            response = response.replace(/<script>[\s\S]*?<script>/, '');
        }
        return response;
    };
    return descriptor;
}
