import { IPatient } from '@patients/domain/models/IPatient'
import { IPatientDTO } from '@patients/domain/models/IPatientDTO'
import { IRegisterPatient } from '@patients/domain/models/IRegisterPatient'
import { IPatientsRepository } from '@patients/domain/repositories/IPatientsRepository'
import { prisma } from '@shared/infra/http/lib/prisma'

export class PatientsRepository implements IPatientsRepository {
  async findAllPatients(): Promise<IPatient[]> {
    const patients = await prisma.cadastro.findMany({
      orderBy: {
        nome: 'asc',
      },
    })
    return patients
  }

  async findPatientByCodigo(id: number): Promise<IPatient | null> {
    const patient = await prisma.cadastro.findUnique({
      where: {
        id: id,
      },
    })
    return patient
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
    })
    return result
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
    return result
  }

  async deletePatient(id: number): Promise<void> {
    await prisma.cadastro.delete({
      where: {
        id: id,
      },
    })
  }
}
