export const getTemplates = async () => {
  const response = await fetch("");
  return await response.json();
};
