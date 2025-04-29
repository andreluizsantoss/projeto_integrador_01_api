import { IPatientDependencie } from '@patientDependencies/domain/models/IPatientDependencie'
import { IPatientDependencieDTO } from '@patientDependencies/domain/models/IPatientDependencieDTO'
import { IPatientDependencieResponse } from '@patientDependencies/domain/models/IPatientDependencieResponse'
import { IRegisterPatientDependencie } from '@patientDependencies/domain/models/IRegisterPatientDependencie'
import { IUpdatePatientDependencie } from '@patientDependencies/domain/models/IUpdatePatientDependencie'
import { IPatientDependenciesRepository } from '@patientDependencies/domain/repositories/IPatientDependenciesRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class PatientDependenciesRepository
  implements IPatientDependenciesRepository
{
  async findAllPatientDependencies(): Promise<IPatientDependencieResponse[]> {
    const patientDependencies = await prisma.dependenciaspaciente.findMany({
      orderBy: {
        id: 'asc',
      },
    })

    const result = await Promise.all(
      patientDependencies.map(async patientDependencie => {
        const cadastro = await prisma.cadastro.findUnique({
          where: { id: patientDependencie.cadastro_id },
        })

        const dependencia = await prisma.dependenciasfixas.findUnique({
          where: { codigo: patientDependencie.codigo_dependencia },
        })

        return {
          id: patientDependencie.id,
          paciente: {
            id: cadastro?.id ?? 0,
            nome: cadastro?.nome ?? 'Desconhecido',
          },
          dependencia: {
            codigo: dependencia?.codigo ?? 'Desconhecido',
            descricao: dependencia?.descricao ?? 'Sem descrição',
          },
        }
      }),
    )

    return result
  }

  async findPatientDependencieByCodigo(
    id: number,
  ): Promise<IPatientDependencieResponse | null> {
    const patientDependencie = await prisma.dependenciaspaciente.findUnique({
      where: {
        id: id,
      },
    })

    if (!patientDependencie) {
      return null
    }

    const cadastro = await prisma.cadastro.findUnique({
      where: { id: patientDependencie.cadastro_id },
    })

    const dependencia = await prisma.dependenciasfixas.findUnique({
      where: { codigo: patientDependencie.codigo_dependencia },
    })

    return {
      id: patientDependencie.id,
      paciente: {
        id: cadastro?.id ?? 0,
        nome: cadastro?.nome ?? 'Desconhecido',
      },
      dependencia: {
        codigo: dependencia?.codigo ?? 'Desconhecido',
        descricao: dependencia?.descricao ?? 'Sem descrição',
      },
    }
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
