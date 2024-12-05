interface Product {
    operation(): string;
}

class ConcreteProductA implements Product {
    operation(): string {
        return 'Product A';
    }
}

class ConcreteProductB implements Product {
    operation(): string {
        return 'Product B';
    }
}

class Creator {
    static createProduct(type: string): Product {
        if (type === 'A') return new ConcreteProductA();
        if (type === 'B') return new ConcreteProductB();
        throw new Error('Unknown product type');
    }
}

const productA = Creator.createProduct('A');
console.log(productA.operation());
