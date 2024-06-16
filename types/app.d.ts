declare global {
  /**
   *
   * Custom utility types
   */
  export type ChangeFieldType<T, K extends keyof T, NewType> = Omit<T, K> & {
    [P in K]: NewType;
  };

  export type Id = string;
  export type Url = string;
  export type Color = string;
  export type DateIso = string;

  /**
   * FSD
   *
   * Its hack way to export redux infering types from @/app
   * and use it in @/shared/model/hooks.ts
   */
  declare type RootState =
    import('../src/app/providers/store/config/appStore').RootState;
  declare type AppDispatch =
    import('../src/app/providers/store/config/appStore').AppDispatch;
}

declare module 'csstype' {
  interface Properties {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: `--${string}`]: any;
  }
}

export {};
