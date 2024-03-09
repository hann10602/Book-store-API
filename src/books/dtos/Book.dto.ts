import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SearchBookSDI {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;
}

export class SelfBookSDI {
  @IsString()
  id: string;
}

export class CreateBookSDI {
  @IsString()
  title;

  @IsString()
  description;

  @IsString()
  thumbnail;

  @IsNumber()
  quantity;

  @IsNumber()
  price;
}

export class UpdateBookSDI {
  @IsOptional()
  @IsString()
  title;

  @IsOptional()
  @IsString()
  description;

  @IsOptional()
  @IsString()
  thumbnail;

  @IsOptional()
  @IsNumber()
  quantity;

  @IsOptional()
  @IsNumber()
  price;
}
