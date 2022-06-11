import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class createbillpayload {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  datebuy?: string;

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  account_id?: number;

  @ApiProperty({ type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  product_id?: number;
}
