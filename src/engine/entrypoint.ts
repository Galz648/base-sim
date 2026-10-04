import { Engine } from "./engine";


(
    () => {
        const engine = new Engine({
            floor: Math.floor,
            clamp: (value: number, min: number, max: number) => Math.min(Math.max(value, min), max),
        });
        engine.start();
    }
)()
