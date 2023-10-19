import { ThemeProps } from "./AThreeDataTheme";
import { getBorderRadius, getBreakpoint, getColor, getSpace } from "./getters";

export type Selectors<T> = (props: ThemeProps) => T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OmitThemeProps<Args extends any[]> = Args[3] extends ThemeProps
  ? [Args[0], Args[1], Args[2]]
  : Args[2] extends ThemeProps
  ? [Args[0], Args[1]]
  : [Args[0]];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createSelector = <T extends (...args: any) => any>(getter: T) => {
  function select(
    ...args: OmitThemeProps<Parameters<T>>
  ): Selectors<ReturnType<T>>;

  function select(...args: Parameters<T>): ReturnType<T>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function select(...args: any) {
    if (args.length === getter.length) {
      return getter(...args);
    }

    return (props: ThemeProps) => getter(...args, props);
  }

  return select;
};

export const color = createSelector(getColor);
export const space = createSelector(getSpace);
export const borderRadius = createSelector(getBorderRadius);
export const breakpoint = createSelector(getBreakpoint);
