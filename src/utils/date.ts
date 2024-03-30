export const convertToHours = (time: string) => {
  if (time) {
    const date = new Date("2020-05-12T23:50:21.817Z");
    console.log(new Date("Sat Mar 30 21:01:58 2024"));
    const hours = new Date(time).getHours();
    const minutes = new Date(time).getMinutes();
    console.log(`${hours}:${+minutes < 10 ? "0" + minutes : minutes}`);

    return `${hours}:${+minutes < 10 ? "0" + minutes : minutes}`;
  }
};
