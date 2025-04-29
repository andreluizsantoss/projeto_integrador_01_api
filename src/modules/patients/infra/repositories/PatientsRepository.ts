import { IPatient } from '@patients/domain/models/IPatient'
import { IPatientDTO } from '@patients/domain/models/IPatientDTO'
import { IRegisterPatient } from '@patients/domain/models/IRegisterPatient'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class PatientsRepository implements IPatientsRepository {
  async findAllPatients(): Promise<IPatientDTO[]> {
    const patients = await prisma.cadastro.findMany({
      orderBy: {
        nome: 'asc',
      },
      include: {
        beneficiospaciente: {
          select: {
            id: true,
            codigo_beneficio: true,
            beneficiosfixos: {
              select: {
                descricao: true,
              },
            },
          },
        },
        dependenciaspaciente: {
          select: {
            id: true,
            codigo_dependencia: true,
            dependenciasfixas: {
              select: {
                descricao: true,
              },
            },
          },
        },
        historicoatividades: {
          select: {
            id: true,
            codigo_atividade: true,
            data_atendimento: true,
            atividadesfixas: {
              select: {
                codigo: true,
                descricao: true,
              },
            },
          },
        },
      },
    })

    const patientDTOs: IPatientDTO[] = patients.map(patient => ({
      id: patient.id,
      nome: patient.nome,
      idade: patient.idade,
      documento: patient.documento,
      data_nascimento: patient.data_nascimento,
      sexo: patient.sexo,
      estado_civil: patient.estado_civil,
      profissao: patient.profissao,
      morador_rua: patient.morador_rua,
      status: patient.status,
      cor_olhos: patient.cor_olhos,
      cor_cabelo: patient.cor_cabelo,
      altura: patient.altura,
      peso: patient.peso,
      etnia: patient.etnia,
      codigo_usuario: patient.codigo_usuario,
      tipo_documento: patient.tipo_documento,
      beneficiospaciente: patient.beneficiospaciente.map(benefit => ({
        id: benefit.id,
        beneficio: {
          codigo: benefit.codigo_beneficio,
          descricao: benefit.beneficiosfixos?.descricao,
        },
      })),
      dependenciaspaciente: patient.dependenciaspaciente.map(dependency => ({
        id: dependency.id,
        dependencia: {
          codigo: dependency.codigo_dependencia,
          descricao: dependency.dependenciasfixas?.descricao,
        },
      })),
      historicoatividades: patient.historicoatividades.map(activity => ({
        id: activity.id,
        atividade: {
          codigo: activity.atividadesfixas?.codigo,
          descricao: activity.atividadesfixas?.descricao,
        },
        data_atendimento: activity.data_atendimento,
      })),
    }))

    return patientDTOs
  }

  async findPatientByCodigo(id: number): Promise<IPatientDTO | null> {
    const patient = await prisma.cadastro.findUnique({
      where: {
        id: id,
      },
      include: {
        beneficiospaciente: {
          select: {
            id: true,
            codigo_beneficio: true,
            beneficiosfixos: {
              select: {
                descricao: true,
              },
            },
          },
        },
        dependenciaspaciente: {
          select: {
            id: true,
            codigo_dependencia: true,
            dependenciasfixas: {
              select: {
                descricao: true,
              },
            },
          },
        },
        historicoatividades: {
          select: {
            id: true,
            codigo_atividade: true,
            data_atendimento: true,
            atividadesfixas: {
              select: {
                codigo: true,
                descricao: true,
              },
            },
          },
        },
      },
    })

    if (!patient) return null

    const patientDTO: IPatientDTO = {
      id: patient.id,
      nome: patient.nome,
      idade: patient.idade,
      documento: patient.documento,
      data_nascimento: patient.data_nascimento,
      sexo: patient.sexo,
      estado_civil: patient.estado_civil,
      profissao: patient.profissao,
      morador_rua: patient.morador_rua,
      status: patient.status,
      cor_olhos: patient.cor_olhos,
      cor_cabelo: patient.cor_cabelo,
      altura: patient.altura,
      peso: patient.peso,
      etnia: patient.etnia,
      codigo_usuario: patient.codigo_usuario,
      tipo_documento: patient.tipo_documento,
      beneficiospaciente: patient.beneficiospaciente.map(benefit => ({
        id: benefit.id,
        beneficio: {
          codigo: benefit.codigo_beneficio,
          descricao: benefit.beneficiosfixos?.descricao,
        },
      })),
      dependenciaspaciente: patient.dependenciaspaciente.map(dependency => ({
        id: dependency.id,
        dependencia: {
          codigo: dependency.codigo_dependencia,
          descricao: dependency.dependenciasfixas?.descricao,
        },
      })),
      historicoatividades: patient.historicoatividades.map(activity => ({
        id: activity.id,
        atividade: {
          codigo: activity.atividadesfixas?.codigo,
          descricao: activity.atividadesfixas?.descricao,
        },
        data_atendimento: activity.data_atendimento,
      })),
    }

    return patientDTO
  }

  async registerPatient(
    patient: IRegisterPatient,
  ): Promise<IPatientDTO | null> {
    const result = await prisma.cadastro.create({
      data: {
        nome: patient.nome,
        idade: patient.idade,
        documento: patient.documento,
        data_nascimento: patient.data_nascimento,
        sexo: patient.sexo,
        estado_civil: patient.estado_civil,
        profissao: patient.profissao,
        morador_rua: patient.morador_rua,
        status: patient.status,
        cor_olhos: patient.cor_olhos,
        cor_cabelo: patient.cor_cabelo,
        altura: patient.altura,
        peso: patient.peso,
        etnia: patient.etnia,
        tipo_documento: patient.tipo_documento,
      },
      include: {
        beneficiospaciente: {
          select: {
            id: true,
            codigo_beneficio: true,
            beneficiosfixos: {
              select: {
                descricao: true,
              },
            },
          },
        },
        dependenciaspaciente: {
          select: {
            id: true,
            codigo_dependencia: true,
            dependenciasfixas: {
              select: {
                descricao: true,
              },
            },
          },
        },
        historicoatividades: {
          select: {
            id: true,
            codigo_atividade: true,
            data_atendimento: true,
            atividadesfixas: {
              select: {
                codigo: true,
                descricao: true,
              },
            },
          },
        },
      },
    })

    const patientDTO: IPatientDTO = {
      id: result.id,
      nome: result.nome,
      idade: result.idade,
      documento: result.documento,
      data_nascimento: result.data_nascimento,
      sexo: result.sexo,
      estado_civil: result.estado_civil,
      profissao: result.profissao,
      morador_rua: result.morador_rua,
      status: result.status,
      cor_olhos: result.cor_olhos,
      cor_cabelo: result.cor_cabelo,
      altura: result.altura,
      peso: result.peso,
      etnia: result.etnia,
      codigo_usuario: result.codigo_usuario,
      tipo_documento: result.tipo_documento,
      beneficiospaciente: result.beneficiospaciente.map(benefit => ({
        id: benefit.id,
        beneficio: {
          codigo: benefit.codigo_beneficio,
          descricao: benefit.beneficiosfixos?.descricao,
        },
      })),
      dependenciaspaciente: result.dependenciaspaciente.map(dependency => ({
        id: dependency.id,
        dependencia: {
          codigo: dependency.codigo_dependencia,
          descricao: dependency.dependenciasfixas?.descricao,
        },
      })),
      historicoatividades: result.historicoatividades.map(activity => ({
        id: activity.id,
        atividade: {
          codigo: activity.atividadesfixas?.codigo,
          descricao: activity.atividadesfixas?.descricao,
        },
        data_atendimento: activity.data_atendimento,
      })),
    }

    return patientDTO
  }

  async updatePatient(patient: IPatient): Promise<IPatientDTO | null> {
    const result = await prisma.cadastro.update({
      where: {
        id: patient.id,
      },
      data: {
        nome: patient.nome,
        idade: patient.idade,
        documento: patient.documento,
        data_nascimento: patient.data_nascimento,
        sexo: patient.sexo,
        estado_civil: patient.estado_civil,
        profissao: patient.profissao,
        morador_rua: patient.morador_rua,
        status: patient.status,
        cor_olhos: patient.cor_olhos,
        cor_cabelo: patient.cor_cabelo,
        altura: patient.altura,
        peso: patient.peso,
        etnia: patient.etnia,
        tipo_documento: patient.tipo_documento,
      },
    })
    return null
  }

  async deletePatient(id: number): Promise<void> {
    await prisma.cadastro.delete({
      where: {
        id: id,
      },
    })
  }
}
