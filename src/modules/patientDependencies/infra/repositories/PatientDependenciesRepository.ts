import { IPatientDependencie } from '@patientDependencies/domain/models/IPatientDependencie'
import { IPatientDependencieDTO } from '@patientDependencies/domain/models/IPatientDependencieDTO'
import { IRegisterPatientDependencie } from '@patientDependencies/domain/models/IRegisterPatientDependencie'
import { IUpdatePatientDependencie } from '@patientDependencies/domain/models/IUpdatePatientDependencie'
import { IPatientDependenciesRepository } from '@patientDependencies/domain/repositories/IPatientDependenciesRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class PatientDependenciesRepository
  implements IPatientDependenciesRepository
{
  async findAllPatientDependencies(): Promise<IPatientDependencie[]> {
    const patientDependencies = await prisma.dependenciaspaciente.findMany({
      orderBy: {
        id: 'desc',
      },
    })
    return patientDependencies
  }

  async findPatientDependencieByCodigo(
    id: number,
  ): Promise<IPatientDependencie | null> {
    const patientDependencie = await prisma.dependenciaspaciente.findUnique({
      where: {
        id: id,
      },
    })
    return patientDependencie
  }

  async registerPatientDependencie(
    data: IRegisterPatientDependencie,
  ): Promise<IPatientDependencieDTO | null> {
    const patientDependencie = await prisma.dependenciaspaciente.create({
      data: data,
    })
    return patientDependencie
  }

  async updatePatientDependencie(
    data: IUpdatePatientDependencie,
  ): Promise<IPatientDependencieDTO | null> {
    const patientDependencie = await prisma.dependenciaspaciente.update({
      where: {
        id: data.id,
      },
      data: data,
    })
    return patientDependencie
  }

  async deletePatientDependencie(id: number): Promise<void> {
    await prisma.dependenciaspaciente.delete({
      where: {
        id: id,
      },
    })
  }
}
