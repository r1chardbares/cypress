export const formatPhoneNumber = (value) => {
  if (!value) {
    return "";
  }
  const space = " ";
  return [
    value.slice(0, 3),
    space,
    value.slice(3, 6),
    space,
    value.slice(6),
  ].join("");
};

export const formatZipCode = (value) => {
  const space = " ";
  return [value.slice(0, 3), space, value.slice(3)].join("");
};
