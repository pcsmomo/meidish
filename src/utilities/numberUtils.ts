/**
 * It rounds number to decimal places
 * roundFloat(13.005001) -> 13.01
 * roundFloat(13.00499) -> 13
 *
 * @param { number } number
 * @param { number } decimal
 * @returns { number }
 *
 * About Number.EPSILON
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON
 */
export const roundFloat = (number: number, decimal: number = 2): number => {
  if (decimal < 0) {
    decimal = 0;
  }

  return (
    Math.round((number + Number.EPSILON) * Math.pow(10, decimal)) /
    Math.pow(10, decimal)
  );
};

/**
 * It rounds number and display to decimal places
 * formatRoundFloat(13.005001) -> "13.01"
 * formatRoundFloat(13.00499) -> "13.00"
 *
 * @param { number } number
 * @param { number } decimal
 * @returns { string }
 *
 */
export const formatRoundFloat = (
  number: number,
  decimal: number = 2
): string => {
  if (decimal < 0) {
    decimal = 0;
  }

  return roundFloat(number, decimal).toFixed(decimal);
};
