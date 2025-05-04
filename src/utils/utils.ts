import { FontName } from "@resume-api/context/resume-theme/availableFonts";
import type { CSSProperties } from "react";

export interface ParsedFontStyle {
  fontFamily: string;
  fontWeight?: CSSProperties["fontWeight"];
  fontStyle?: CSSProperties["fontStyle"];
}

/**
 * Parses a font name like "Courier-BoldOblique" into CSS-friendly properties.
 */
export function parseFontName(font: FontName): ParsedFontStyle {
  // Split the font string into family and modifiers
  const [family, ...modifiers] = font.split("-");

  // Determine weight and style
  let fontWeight: ParsedFontStyle["fontWeight"];
  let fontStyle: ParsedFontStyle["fontStyle"];

  const modString = modifiers.join("-").toLowerCase();

  if (/bold/.test(modString)) {
    fontWeight = "bold";
  }
  if (/(italic|oblique)/.test(modString)) {
    fontStyle = "italic";
  }

  // If no modifiers found, assume normal
  if (!fontWeight && !fontStyle) {
    // Some fonts use "Roman" suffix for normal
    fontWeight = "normal";
    fontStyle = "normal";
  }

  return {
    fontFamily: family,
    // Only include if set
    ...(fontWeight ? { fontWeight } : {}),
    ...(fontStyle ? { fontStyle } : {}),
  };
}
