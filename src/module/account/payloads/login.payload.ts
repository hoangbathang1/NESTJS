import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginPayload {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  password: string;
}
