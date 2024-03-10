import { IsOptional, IsString } from 'class-validator';

export class SearchCommentsSDI {
  @IsString()
  @IsOptional()
  content: string;

  @IsString()
  @IsOptional()
  book: string;
}

export class CreateCommentSDI {
  @IsString()
  content: string;

  @IsString()
  book: string;

  @IsString()
  user: string;
}

export class UpdateCommentSDI {
  @IsString()
  content: string;
}
