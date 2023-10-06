export const getFormValues = (form: HTMLFormElement) => {
  return Object.fromEntries(new FormData(form));
};
