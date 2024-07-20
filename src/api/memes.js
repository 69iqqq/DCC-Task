export const getTemplates = async () => {
  const response = await fetch("https://api.memegen.link/templates/");
  return await response.json();
};
