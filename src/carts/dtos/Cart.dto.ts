import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SearchCartSDI {
  @IsOptional()
  @IsString()
  user: string;
}

export class CreateCartSDI {
  @IsNumber()
  quantity: number;

  @IsString()
  book: string;

  @IsString()
  user: string;
}

export class UpdateCartSDI {
  @IsNumber()
  quantity: number;
}
