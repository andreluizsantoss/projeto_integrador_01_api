import { IFixedDependencie } from '../models/IFixedDependencie'

export interface IFixedDependenciesRepository {
  findAllFixedDependencies(): Promise<IFixedDependencie[]>
  findFixedDependencieByCodigo(
    codigo: string,
  ): Promise<IFixedDependencie | null>
  registerFixedDependencie(descricao: string): Promise<IFixedDependencie | null>
  updateFixedDependencie(
    codigo: string,
    descricao: string,
  ): Promise<IFixedDependencie | null>
  deleteFixedDependencie(codigo: string): Promise<void>
}
