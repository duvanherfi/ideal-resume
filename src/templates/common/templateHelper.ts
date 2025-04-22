export const darkenHexColor = (hex: string, percent = 10) => {
  // Asegurarse que el hex empiece con #
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    // Expandir notación corta (#abc → #aabbcc)
    hex = hex.split('').map(c => c + c).join('');
  }

  const num = parseInt(hex, 16);

  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;

  const factor = 1 - percent / 100;

  r = Math.max(0, Math.floor(r * factor));
  g = Math.max(0, Math.floor(g * factor));
  b = Math.max(0, Math.floor(b * factor));

  const darkHex = '#' + [r, g, b].map(x =>
    x.toString(16).padStart(2, '0')
  ).join('');

  return darkHex;
};

export const lightenHexColor = (hex: string, percent = 10) => {
  // Quitar el # si está
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    // Expandir notación corta (#abc → #aabbcc)
    hex = hex.split('').map(c => c + c).join('');
  }

  const num = parseInt(hex, 16);

  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;

  const factor = percent / 100;

  r = Math.min(255, Math.floor(r + (255 - r) * factor));
  g = Math.min(255, Math.floor(g + (255 - g) * factor));
  b = Math.min(255, Math.floor(b + (255 - b) * factor));

  const lightHex = '#' + [r, g, b].map(x =>
    x.toString(16).padStart(2, '0')
  ).join('');

  return lightHex;
};
