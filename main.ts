import * as files from "node:fs";

const opening =
  "Rain falls on a tin roof in a village with no name, and no one counts the drops. ";
const starlight =
  "The light left its star before there were verdicts, and it is still on its way. ";
const pause =
  "Between one verdict and the next, a pause no one measures, where nothing is asked of you.";

const passage = opening + starlight + pause;

files.mkdirSync("/output", { recursive: true });
files.writeFileSync("/output/entry.txt", passage, "utf8");
