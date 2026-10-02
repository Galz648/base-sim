// AUTO-GENERATED — do not edit manually.

import type { Person as ScriptClass } from "../../scripts/person";

type StaticProps = Omit<typeof ScriptClass, 'prototype' | keyof Function>;

declare module "../../scripts/person" {
  interface Person extends StaticProps {}
}

declare global {
  interface GodotScripts {
    "res://scripts/person.gd": ScriptClass;
  }

  interface GodotResources {
    "res://scripts/person.gd": typeof ScriptClass;
    "uid://ck7qywf8eswm3": typeof ScriptClass;
  }
}

export {};