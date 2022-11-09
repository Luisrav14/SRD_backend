import generator from "generate-password";

export const passwordGenerator = () => {
  const password = generator.generate({
    length: 8,
    numbers: true,
  });

  return password;
};
