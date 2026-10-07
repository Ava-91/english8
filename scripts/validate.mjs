import fs from "node:fs";

const countrySource = fs.readFileSync("data/countries.js", "utf8");
const countryRows = [...countrySource.matchAll(/^\s*\["(\d{3})","([^"]+)","([^"]+)"\],?$/gm)];
const ids = countryRows.map(([, id]) => id);

if (countryRows.length !== 195) {
  throw new Error(`Expected 195 country records, found ${countryRows.length}.`);
}
if (new Set(ids).size !== ids.length) {
  throw new Error("Country IDs must be unique.");
}

const required = ["364", "392", "276", "250", "840", "826"];
for (const id of required) {
  if (!ids.includes(id)) throw new Error(`Missing required country ID: ${id}`);
}

const questionsSource = fs.readFileSync("data/questions.js", "utf8");
const questionCount = (questionsSource.match(/\bquestion:\s*"/g) || []).length;
if (questionCount !== 10) {
  throw new Error(`Expected 10 quiz questions, found ${questionCount}.`);
}

console.log(`Validation passed: ${countryRows.length} countries and ${questionCount} quiz questions.`);
