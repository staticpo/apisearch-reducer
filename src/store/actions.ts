export const actions = {
  setName: (name: string) =>
    ({
      type: "SET_NAME",
      payload: name,
    } as const),
  countUp: () =>
    ({
      type: "COUNT_UP",
    } as const),
  countDown: () =>
    ({
      type: "COUNT_DOWN",
    } as const),
};