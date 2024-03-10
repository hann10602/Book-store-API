import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SearchBookSDI {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  user: string;
}

export class SelfBookSDI {
  @IsString()
  id: string;
}

export class CreateBookSDI {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  thumbnail: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsString()
  categoryId: string;
}

export class UpdateBookSDI {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  thumbnail: string;

  @IsOptional()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  categoryId: string;
}
