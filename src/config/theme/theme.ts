export type THEME = {
  background: string;
  primary: string;
  secondary: string;
  secondary_disabled: string;
  tertiary: string;
  text: string;
  text_inverse: string;
  inactive: string;
  placeholderText: string;
  placeholderText_secondary: string;
  progressBarBase: string;
  progressBar: string;
};

export const dark: THEME = {
  background: '#1b1a3b',
  primary: '#2f2e66',
  secondary: '#42c6d2',
  secondary_disabled: '#2c8992',
  tertiary: '#1e237d',
  text: '#ffffff',
  text_inverse: '#000000',
  inactive: 'rgba(255, 255, 255, 0.3)',
  placeholderText: '#585858',
  placeholderText_secondary: '#aaaaaa',
  progressBarBase: '#013a00',
  progressBar: '#058900',
};

export const light: THEME = {
  background: '#a2dbff',
  primary: '#7fb5d7',
  secondary: '#dd5555',
  secondary_disabled: '#923636',
  tertiary: '#d782c8',
  text: '#000000',
  text_inverse: '#ffffff',
  inactive: 'rgba(0, 0, 0, 0.5)',
  placeholderText: '#727272',
  placeholderText_secondary: '#656565',
  progressBarBase: '#040049',
  progressBar: '#1a16e7',
};
