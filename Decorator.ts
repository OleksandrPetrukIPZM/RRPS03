interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    operation(): string {
        return 'ConcreteComponent';
    }
}

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    operation(): string {
        return `DecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    operation(): string {
        return `DecoratorB(${super.operation()})`;
    }
}

// Використання:
const simple = new ConcreteComponent();
const decoratedA = new ConcreteDecoratorA(simple);
const decoratedB = new ConcreteDecoratorB(decoratedA);

console.log(decoratedB.operation()); // DecoratorB(DecoratorA(ConcreteComponent))
