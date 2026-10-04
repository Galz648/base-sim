import { Sim } from "./sim";

(() => {
  const sim = new Sim({
    floor: Math.floor,
    clamp: (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max),
  });
  sim.start();
})();
