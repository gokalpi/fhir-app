import { FhirResource } from './fhir-resource';

export interface FhirResponse {
  entry: FhirResource[];
}
