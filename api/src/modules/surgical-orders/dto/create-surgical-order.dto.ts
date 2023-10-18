import { IsDateString, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSurgicalOrderDto {
  @IsString()
  @IsNotEmpty({ message: 'Sala de cirurgia é obrigatória!' })
  surgicalRoom: string;

  @IsString()
  @IsNotEmpty({ message: 'Procedimentos cirúrgicos são obrigatórios!' })
  medicalProcedure: string;

  @IsString()
  @IsNotEmpty({ message: 'Médico responsável é obrigatório!' })
  doctor: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome do paciente é obrigatório!' })
  patient: string;

  @IsString()
  @IsNotEmpty({ message: 'Hospital é obrigatório!' })
  hospital: string;

  @IsDateString()
  @IsNotEmpty({ message: 'Data da cirurgia é obrigatória!' })
  surgeryDate: Date;

  @IsString()
  @IsNotEmpty({ message: 'Sala de cirurgia é obrigatória!' })
  @MinLength(10, { message: 'Observação deve ter no mínimo 10 caracteres!' })
  observations: string;
}
