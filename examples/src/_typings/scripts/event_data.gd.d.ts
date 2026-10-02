// AUTO-GENERATED — do not edit manually.

import type { EventData as ScriptClass } from "../../scripts/event_data";

type StaticProps = Omit<typeof ScriptClass, 'prototype' | keyof Function>;

declare module "../../scripts/event_data" {
  interface EventData extends StaticProps {}
}

declare global {
  interface GodotScripts {
    "res://scripts/event_data.gd": ScriptClass;
  }

  interface GodotResources {
    "res://scripts/event_data.gd": typeof ScriptClass;
    "uid://bn4t6dloyrcb5": typeof ScriptClass;
  }
}

export {};