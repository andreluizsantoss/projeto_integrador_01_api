export interface IHistoryActivitieResponse {
  id: number
  paciente: {
    id: number
    nome: string
  }
  atividade: {
    codigo: string
    descricao: string
  }
  data_atendimento: Date
}
