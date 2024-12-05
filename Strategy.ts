interface Strategy {
    execute(a: number, b: number): number;
}

class AddStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

class SubtractStrategy implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    executeStrategy(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}


const context = new Context(new AddStrategy());
console.log(context.executeStrategy(5, 3));

context.setStrategy(new SubtractStrategy());
console.log(context.executeStrategy(5, 3));
