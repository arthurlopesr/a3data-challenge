import "styled-components";
import { AThreeDataTheme } from "../theme";

declare module "styled-components" {
  export interface DefaultTheme extends AThreeDataTheme {}
}
