export const formatPrice = (number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat(); //The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  }
  return ["all", ...new Set(unique)]; //Set is used to get unique values
};
