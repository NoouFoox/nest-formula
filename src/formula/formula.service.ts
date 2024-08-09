import { Injectable } from '@nestjs/common';
import { FormulaParams, FormulaReturnType } from 'src/type';
import { getGAnalysis } from '../lib/nearley';
const throwErrs = [undefined, Infinity, -Infinity];
@Injectable()
export class FormulaService {
  getFormula(body: FormulaParams): FormulaReturnType {
    try {
      const result = getGAnalysis(body.formula)[0];
      if (throwErrs.includes(result)) throw new Error('Invalid formula');
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
