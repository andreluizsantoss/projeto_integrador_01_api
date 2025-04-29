export interface IPatientDependencieResponse {
  id: number
  paciente: {
    id: number
    nome: string
  }
  dependencia: {
    codigo: string
    descricao: string
  }
}
