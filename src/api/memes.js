export const getTemplates = async () => {
  const response = await fetch("git");
  return await response.json();
};
