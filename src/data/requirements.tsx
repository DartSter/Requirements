import { IRequirement } from "../modils";
import { corejsthems } from "./thems/corejs/";

const coreJS: IRequirement = {
  title: "Core JS",
  thems: corejsthems,
};
const clientSideJS: IRequirement = {
  title: "Client-Side JavaScript",
  thems: [],
};
const html: IRequirement = { title: "HTML", thems: [] };
const css: IRequirement = { title: "CSS", thems: [] };
const typeScrypt: IRequirement = { title: "TypeScrypt", thems: [] };
const csf: IRequirement = { title: "Computer science fundamentals", thems: [] };
const programmingParadigm: IRequirement = {
  title: "Programming Paradigms (OOP, FP, FRP)",
  thems: [],
};
const communicationProtocols: IRequirement = {
  title: "Communication Protocols (HTTP, WS, REST, GraphQL, ...)",
  thems: [],
};
const tools: IRequirement = {
  title: "Tools (NPM, Webpack, Chrome DevTools, ...)",
  thems: [],
};
const gitFundamentals: IRequirement = {
  title: "GIT branching, Release strategies",
  thems: [],
};
const nodeJSCore: IRequirement = { title: "NodeJS Core", thems: [] };
const react: IRequirement = { title: "React", thems: [] };
const designPatterns: IRequirement = { title: "Design patterns", thems: [] };
const qualityGates: IRequirement = {
  title: "Quality gates & refactoring",
  thems: [],
};
const automatedTesting: IRequirement = {
  title: "Automated Testing (TDD, Test Pyramid)",
  thems: [],
};
const cicd: IRequirement = { title: "CI/CD", thems: [] };
const methodologies: IRequirement = {
  title: "Methodologies (e.g. SCRUM, Kanban, Waterfall)",
  thems: [],
};

const Requirements: IRequirement[] = [
  coreJS,
  clientSideJS,
  html,
  css,
  typeScrypt,
  csf,
  programmingParadigm,
  communicationProtocols,
  tools,
  gitFundamentals,
  nodeJSCore,
  react,
  designPatterns,
  qualityGates,
  automatedTesting,
  cicd,
  methodologies,
];

export default Requirements;
