import { MersenneTwister19937, Random } from 'random-js';

const engine = MersenneTwister19937.autoSeed();
const random = new Random(engine);

export const useRandom = () => random;
