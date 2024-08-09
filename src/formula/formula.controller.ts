import { Body, Controller, Post } from '@nestjs/common';
import { FormulaService } from './formula.service';
import { FormulaParams, FormulaReturnType } from 'src/type';

@Controller()
export class FormulaController {
  constructor(private readonly appService: FormulaService) {}

  @Post('/formula')
  getFormula(@Body() body: FormulaParams): FormulaReturnType {
    return this.appService.getFormula(body);
  }
}
