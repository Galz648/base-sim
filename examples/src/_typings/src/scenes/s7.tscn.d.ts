// AUTO-GENERATED — do not edit manually.

type _src_scenes_s7Tscn_ClockLabel = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_s7Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s7Tscn_EndLabel = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_s7Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s7Tscn_Tree = {
  [__node_root]: "S7";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/day.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_s7Tscn__Parents>;
  [__node_children]: [_src_scenes_s7Tscn_ClockLabel, _src_scenes_s7Tscn_EndLabel];

  "ClockLabel": _src_scenes_s7Tscn_ClockLabel;
  "EndLabel": _src_scenes_s7Tscn_EndLabel;
};

declare global {
  interface __src_scenes_s7Tscn__Parents {}

  interface __scripts_dayGd__Trees {
    "res://src/scenes/s7.tscn": _src_scenes_s7Tscn_Tree;
  }

  interface GodotSceneTrees {
    "res://src/scenes/s7.tscn": _src_scenes_s7Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/s7.tscn": _GDTreeNode<_src_scenes_s7Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/s7.tscn": PackedScene<_GDTreeNode<_src_scenes_s7Tscn_Tree>>;
    "uid://bs7scene000001": PackedScene<_GDTreeNode<_src_scenes_s7Tscn_Tree>>;
  }
}

export {}