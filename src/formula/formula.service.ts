import { Injectable } from '@nestjs/common';
import { FormulaParams, FormulaReturnType } from 'src/type';
import { getGAnalysis } from '../lib/nearley';
@Injectable()
export class FormulaService {
  getFormula(body: FormulaParams): FormulaReturnType {
    try {
      const r = getGAnalysis(body.formula)[0];
      return {
        success: true,
        result: r[0],
      };
    } catch (e) {
      return {
        success: false,
        result: '',
      };
    }
  }
}
