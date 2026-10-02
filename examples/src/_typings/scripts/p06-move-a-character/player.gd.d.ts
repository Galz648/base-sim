// AUTO-GENERATED — do not edit manually.

import type { Player as ScriptClass } from "../../../scripts/p06-move-a-character/player";

type StaticProps = Omit<typeof ScriptClass, 'prototype' | keyof Function>;

type ScriptTree = _GDGetInterfaceTree<__scripts_p06_move_a_character_playerGd__Trees>;
type ScriptPaths = _GDGetTreePaths<ScriptTree>;

declare module "../../../scripts/p06-move-a-character/player" {
  interface Player extends StaticProps {
    get_node<P extends string & ScriptPaths>(path: P): _GDGetNode<ScriptTree, P>;
    get_node<P extends '/root' | `/root/${string}`>(path: P): _GDGetRootNode<ScriptTree, P>;
    get_node(path: string): Node | null;
    get_node(path: NodePath): Node | null;
    get_node_or_null<P extends string & ScriptPaths>(path: P): _GDGetNodeOrNull<ScriptTree, P>;
    get_node_or_null<P extends '/root' | `/root/${string}`>(path: P): _GDGetRootNode<ScriptTree, P> | null;
    get_node_or_null(path: string): Node | null;
    get_node_or_null(path: NodePath): Node | null;
    has_node<P extends string & ScriptPaths>(path: P): boolean;
    has_node(path: string): boolean;
    has_node(path: NodePath): boolean;
    get_child<Idx extends number & _GDChildIndices<ScriptTree>>(idx: Idx): _GDGetChild<ScriptTree, Idx>;
    get_child(idx: int, include_internal?: boolean): Node;
    get_parent(): _GDParentType<ScriptTree>;
    get_parent<N extends Node = Node>(): N;
  }
}

declare global {
  interface __scripts_p06_move_a_character_playerGd__Trees {}

  interface GodotScripts {
    "res://scripts/p06-move-a-character/player.gd": ScriptClass;
  }

  interface GodotResources {
    "res://scripts/p06-move-a-character/player.gd": typeof ScriptClass;
    "uid://dc4tval7f1cyc": typeof ScriptClass;
  }
}

export {};