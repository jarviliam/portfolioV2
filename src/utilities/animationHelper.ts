export const fadeOut = (element: HTMLElement) => {
  element.classList.add("animated", "fadeOut");
  // element.classList.remove("d-none");
};

export const fadeIn = (element: HTMLElement) => {
  element.classList.remove("fadeOut");
  element.classList.add("fadeIn");
};
