export const formatNumber = (num: number | string) => {
  return `${num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const textCapitalize = (text: string) => {
  return text.slice(0, 1).toLocaleUpperCase() + text.slice(1)?.toLocaleLowerCase();
}
