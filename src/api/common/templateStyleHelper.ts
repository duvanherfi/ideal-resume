/**
 * Ajusta el brillo de un color hexadecimal
 * @param hex - Color hexadecimal (con o sin #)
 * @param percent - Porcentaje de ajuste (-100 a 100)
 * @param isDarken - True para oscurecer, False para aclarar
 * @returns Color hexadecimal ajustado
 */
export const adjustHexBrightness = (hex: string, percent = 10, isDarken = true) => {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }

  const num = parseInt(hex, 16);
  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;

  if (isDarken) {
    const factor = 1 - percent / 100;
    r = Math.max(0, Math.floor(r * factor));
    g = Math.max(0, Math.floor(g * factor));
    b = Math.max(0, Math.floor(b * factor));
  } else {
    const factor = percent / 100;
    r = Math.min(255, Math.floor(r + (255 - r) * factor));
    g = Math.min(255, Math.floor(g + (255 - g) * factor));
    b = Math.min(255, Math.floor(b + (255 - b) * factor));
  }

  const newHex = '#' + [r, g, b].map(x =>
    x.toString(16).padStart(2, '0')
  ).join('');

  return newHex;
};

export const darkenHexColor = (hex: string, percent = 10) => {
  return adjustHexBrightness(hex, percent, true);
};

export const lightenHexColor = (hex: string, percent = 10) => {
  return adjustHexBrightness(hex, percent, false);
};

/**
 * Dado un color de fondo en formato hex (p. ej. "#fc0" o "#ffcc00"),
 * devuelve "white" o "#333" para que el texto contraste correctamente.
 */
export function getContrastingTextColor(hex: string): string {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map(ch => ch + ch)
      .join('');
  }
  if (cleanHex.length !== 6) {
    throw new Error(`Invalid HEX color: "${hex}"`);
  }

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? '#333' : 'white';
}