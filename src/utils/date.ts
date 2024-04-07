export const convertToHours = (time: string) => {
  const hours = new Date(time).getHours();
  const minutes = new Date(time).getMinutes();
  return `${hours}:${+minutes < 10 ? "0" + minutes : minutes}`;
};
