// Settings for AI training, evaluation, and rewards.
// These are intentionally poor starter values, not optimized settings.
const AI_SETTINGS = Object.freeze({
    network: {
        inputCount: 8,
        hiddenNeuronCount: 4,
        outputCount: 4,
    },
    inputs: {
        noTargetOffset: 0,
        noGhostOffset: 1,
        wallDetected: 1,
        pathClear: 0,
    },
    geneticAlgorithm: {
        populationSize: 4,
        mutationRate: 0.05,
        mutationStrength: 0.2,
        crossoverRate: 0.5,
        parentPoolFraction: 0.5,
        eliteCount: 1,
        minimumParentCount: 2,
    },
    rewards: {
        dot: 10,
        powerPellet: 50,
        ghost: 200,
        collectedPelletBonus: 100,
        levelCompletedBonus: 10000,
        survivalPointsPerSecond: 1,
    },
    simulation: {
        framesPerSecond: 60,
        speedDefault: 1,
        speedMinimum: 1,
        speedMaximum: 10,
        speedStep: 1,
    },
    actors: {
        pacmanSpeed: 0.12,
        ghostSpeed: 0.09,
        frightenedGhostSpeedMultiplier: 0.6,
        eatenGhostSpeedMultiplier: 1.8,
        collisionDistance: 0.7,
        frightenedDurationFrames: 360,
    },
    opponents: {
        pinkyTargetOffset: 4,
        inkyTargetOffset: 2,
        clydeScatterDistance: 6,
    },
});
