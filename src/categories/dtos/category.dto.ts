import { IsOptional, IsString } from 'class-validator';

export class SearchCategoriesSDI {
  @IsString()
  @IsOptional()
  code: string;

  @IsString()
  @IsOptional()
  name: string;
}

export class CreateCategoriesSDI {
  @IsString()
  code: string;

  @IsString()
  name: string;
}

export class UpdateCategoriesSDI {
  @IsString()
  code: string;

  @IsString()
  name: string;
}
