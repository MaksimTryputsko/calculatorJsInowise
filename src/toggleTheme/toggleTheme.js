const buttonToggleTheme = document.querySelector('.changeTheme');

const attribute = 'data-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

export const toggleTheme = () => {
  const attributeFromLocalStorage = localStorage.getItem(attribute);
  if (!attributeFromLocalStorage) {
    document.documentElement.setAttribute(attribute, LIGHT_THEME);
  } else {
    document.documentElement.setAttribute(attribute, attributeFromLocalStorage);
  }

  buttonToggleTheme.addEventListener('click', () => {
    const newTheme =
      document.documentElement.getAttribute(attribute) === LIGHT_THEME
        ? DARK_THEME
        : LIGHT_THEME;
    document.documentElement.setAttribute(attribute, newTheme);
    localStorage.setItem(attribute, newTheme);
  });
};
