export const FormatNum = (num) => {
  if (typeof num !== "number") {
    throw new Error("Input must be a number");
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
