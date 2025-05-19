import { type FontName } from "@resume-api/context/resume-theme/availableFonts";
import type { CSSProperties } from "react";

export interface ParsedFontStyle {
  fontFamily: string;
  fontWeight?: CSSProperties["fontWeight"];
  fontStyle?: CSSProperties["fontStyle"];
}

export function parseFontName(font: FontName): ParsedFontStyle {
  const [family, ...modifiers] = font.split("-");

  let fontWeight: ParsedFontStyle["fontWeight"];
  let fontStyle: ParsedFontStyle["fontStyle"];

  const modString = modifiers.join("-").toLowerCase();

  if (/bold/.test(modString)) {
    fontWeight = "bold";
  }
  if (/(italic|oblique)/.test(modString)) {
    fontStyle = "italic";
  }

  if (!fontWeight && !fontStyle) {
    fontWeight = "normal";
    fontStyle = "normal";
  }

  return {
    fontFamily: family,
    ...(fontWeight ? { fontWeight } : {}),
    ...(fontStyle ? { fontStyle } : {}),
  };
}
