class GeneticAlgorithm {
    constructor(populationSize = 8) {
        this.populationSize = populationSize;
        this.inputCount = 8;
        this.hiddenCount = 12;
        this.outputCount = 4;
        this.mutationRate = 0.15;
        this.generation = 1;
        this.agentIndex = 0;
        this.population = [];
    }

    start() {
        if (typeof neataptic === 'undefined') {
            throw new Error('Neataptic is required to run AI training.');
        }

        this.generation = 1;
        this.agentIndex = 0;
        this.population = Array.from(
            { length: this.populationSize },
            () => ({ network: this.createNetwork(), fitness: null }),
        );
    }

    createNetwork() {
        return new neataptic.architect.Perceptron(
            this.inputCount,
            this.hiddenCount,
            this.outputCount,
        );
    }

    get currentNetwork() {
        return this.population[this.agentIndex]?.network || null;
    }

    activate(inputs) {
        return this.currentNetwork?.activate(inputs) || null;
    }

    completeAgent(fitness) {
        const agent = this.population[this.agentIndex];
        if (!agent) throw new Error('There is no active AI agent to complete.');

        agent.fitness = fitness;
        this.agentIndex++;
        if (this.agentIndex === this.populationSize) {
            this.evolve();
            return true;
        }
        return false;
    }

    evolve() {
        this.population.sort((first, second) => second.fitness - first.fitness);
        const nextPopulation = [
            {
                network: this.cloneNetwork(this.population[0].network),
                fitness: null,
            },
        ];
        const parentPool = this.population.slice(
            0,
            Math.max(2, Math.ceil(this.populationSize / 2)),
        );

        while (nextPopulation.length < this.populationSize) {
            const first = this.selectParent(parentPool);
            const second = this.selectParent(parentPool);
            nextPopulation.push({
                network: this.crossAndMutate(first.network, second.network),
                fitness: null,
            });
        }

        this.population = nextPopulation;
        this.generation++;
        this.agentIndex = 0;
    }

    selectParent(parentPool) {
        const first = parentPool[Math.floor(Math.random() * parentPool.length)];
        const second = parentPool[Math.floor(Math.random() * parentPool.length)];
        return first.fitness >= second.fitness ? first : second;
    }

    cloneNetwork(network) {
        return neataptic.Network.fromJSON(network.toJSON());
    }

    crossAndMutate(firstNetwork, secondNetwork) {
        const child = this.cloneNetwork(firstNetwork);
        const secondConnections = secondNetwork.connections;

        child.connections.forEach((connection, index) => {
            if (Math.random() < 0.5) {
                connection.weight = secondConnections[index].weight;
            }
            if (Math.random() < this.mutationRate) {
                connection.weight += Math.random() * 2 - 1;
            }
        });
        return child;
    }
}
