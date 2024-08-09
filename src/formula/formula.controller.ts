import { Body, Controller, Post } from '@nestjs/common';
import { FormulaService } from './formula.service';
import { FormulaParams, FormulaReturnType } from 'src/type';

@Controller('formula')
export class FormulaController {
  constructor(private readonly appService: FormulaService) {}

  @Post()
  getFormula(@Body() body: FormulaParams): FormulaReturnType {
    return this.appService.getFormula(body);
  }
}
