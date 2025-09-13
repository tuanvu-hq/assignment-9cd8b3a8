declare const __brand: unique symbol;

export type Brand<T, B extends string> = T & { [__brand]: B };
