export const fadeOut = (element: HTMLElement) => {
  element.classList.remove("d-none");
  element.classList.add("animated", "fadeIn");
};

export const fadeIn = (element: HTMLElement) => {
  element.classList.remove("fadeIn");
  element.classList.add("fadeOut");
};
