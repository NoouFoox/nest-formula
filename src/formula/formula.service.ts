import { Injectable } from '@nestjs/common';
import { FormulaParams, FormulaReturnType } from 'src/type';
import { getGAnalysis } from '../lib/nearley';
@Injectable()
export class FormulaService {
  getFormula(body: FormulaParams): FormulaReturnType {
    try {
      const result = getGAnalysis(body.formula)[0];
      if (
        !result[0] === undefined &&
        result[0] === Infinity &&
        result[0] === -Infinity
      ) {
        throw new Error('Invalid formula');
      }
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
