export interface IPatientBenefitResponse {
  id: number
  paciente: {
    id: number
    nome: string
  }
  beneficio: {
    codigo: string
    descricao: string
  }
}
