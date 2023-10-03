import { type SchemaTypeDefinition } from 'sanity'
import destination from "./schemas/destination";
import crewMembers from "./schemas/crewMembers";
import launchSteps from "./schemas/launchSteps";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [destination, crewMembers, launchSteps],
}
