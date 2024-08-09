import * as nearley from 'nearley';

import grammar from './grammar';

/**
 *
 * @param {String|Number} t
 * @returns {Number|NaN|String|Boolean}
 */
export const getGAnalysis = (t) => {
  let isErr = false;
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  try {
    parser.feed(t);
    if (parser.results.length === 0) {
      isErr = true;
    } else if (parser.results.length > 1) {
      console.error(parser);
    }
  } catch (e) {
    isErr = true;
  }

  return isErr
    ? false
    : parser.results.map((d) =>
        [Infinity, -Infinity].includes(d) || d > 999999999 ? NaN : d,
      );
};
