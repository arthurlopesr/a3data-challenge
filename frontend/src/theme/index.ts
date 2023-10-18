import aThreeDataTheme, { AThreeDataTheme } from "./AThreeDataTheme";
import * as theme from "./selectors";

const themes = { aThreeDataTheme };

type Themes = keyof typeof themes;

export { aThreeDataTheme, theme, themes };
export type { AThreeDataTheme, Themes };
