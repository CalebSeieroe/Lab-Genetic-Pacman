class GeneticAlgorithm {
    constructor(populationSize = AI_SETTINGS.geneticAlgorithm.populationSize) {
        this.populationSize = populationSize;
        this.inputCount = AI_SETTINGS.network.inputCount;
        this.hiddenCount = AI_SETTINGS.network.hiddenNeuronCount;
        this.outputCount = AI_SETTINGS.network.outputCount;
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
        const nextPopulation = this.population
            .slice(0, AI_SETTINGS.geneticAlgorithm.eliteCount)
            .map((agent) => ({
                network: this.cloneNetwork(agent.network),
                fitness: null,
            }));
        const parentPool = this.population.slice(
            0,
            Math.max(
                AI_SETTINGS.geneticAlgorithm.minimumParentCount,
                Math.ceil(
                    this.populationSize *
                        AI_SETTINGS.geneticAlgorithm.parentPoolFraction,
                ),
            ),
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
            if (Math.random() < AI_SETTINGS.geneticAlgorithm.crossoverRate) {
                connection.weight = secondConnections[index].weight;
            }
            if (
                Math.random() < AI_SETTINGS.geneticAlgorithm.mutationRate
            ) {
                connection.weight +=
                    (Math.random() * 2 - 1) *
                    AI_SETTINGS.geneticAlgorithm.mutationStrength;
            }
        });
        return child;
    }
}
