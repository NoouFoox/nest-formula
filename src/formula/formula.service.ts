import { Injectable } from '@nestjs/common';
import { FormulaParams, FormulaReturnType } from 'src/type';
import { getGAnalysis } from '../lib/nearley';
@Injectable()
export class FormulaService {
  getFormula(body: FormulaParams): FormulaReturnType {
    try {
      const result = getGAnalysis(body.formula)[0];
      return {
        success: true,
        result,
      };
    } catch (e) {
      return {
        success: false,
        result: '',
      };
    }
  }
}
