import * as bio from "./bio";
import * as codeOfConduct from "./codeOfConduct";
import * as help from "./help";
import * as roles from "./roles";
import * as reminder from "./reminder";
import * as iam from "./iam";
import * as standup from "./standup";
import * as stats from "./stats";
import * as tips from "./tips/tips";
import * as support from "./support";

export default [
  bio,
  codeOfConduct,
  help,
  iam,
  reminder,
  roles,
  standup,
  stats,
  tips,
  support,
];

export { fallback } from "./fallback";
