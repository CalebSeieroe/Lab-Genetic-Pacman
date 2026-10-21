// Settings for AI training, evaluation, and rewards.
// These are intentionally poor starter values, not optimized settings.
const AI_SETTINGS = Object.freeze({
    network: {
        inputCount: 8,
        hiddenNeuronCount: 8,
        outputCount: 4,
    },
    inputs: {
        noTargetOffset: 0,
        noGhostOffset: 1,
        wallDetected: 1,
        pathClear: 0,
    },
    geneticAlgorithm: {
        populationSize: 50,
        mutationRate: 0.4,
        mutationStrength: 0.35,
        crossoverRate: 0.5,
        parentPoolFraction: 0.25,
        eliteCount: 5,
        minimumParentCount: 1,
    },
    rewards: {
        dot: 50,
        powerPellet: 250,
        ghost: 200,
        collectedPelletBonus: 550,
        levelCompletedBonus: 10000,
        survivalPointsPerSecond: -25,
    },
    simulation: {
        framesPerSecond: 60,
        speedDefault: 1,
        speedMinimum: 0,
        speedMaximum: 500,
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
