export class PatientBenefitNotFoundError extends Error {
  constructor() {
    super('Patient benefit not found.')
  }
}
