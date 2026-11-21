import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = "Between one verdict and the next, there is a pause no one measures. Rain falls on a tin roof in a village with no name, and far above it, light that left a star before there were readers is still on its way — and nothing is asked of you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
