import { Decimal } from '@prisma/client/runtime/library'

import {
  cadastro_sexo,
  cadastro_estado_civil,
  cadastro_status,
  cadastro_tipo_documento,
} from '@prisma/client'

export interface IRegisterPatient {
  nome: string
  idade: number
  documento: string
  data_nascimento: Date
  sexo: cadastro_sexo
  estado_civil: cadastro_estado_civil
  profissao?: string
  morador_rua?: boolean
  status: cadastro_status
  cor_olhos?: string
  cor_cabelo?: string
  altura?: Decimal
  peso?: Decimal
  etnia?: string
  tipo_documento: cadastro_tipo_documento
}
