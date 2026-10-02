// AUTO-GENERATED — do not edit manually.

type _src_scenes_s5Tscn_Talk = {
  [__node_type]: Button;
  [__node_parent]: _src_scenes_s5Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s5Tscn_Line = {
  [__node_type]: RichTextLabel;
  [__node_parent]: _src_scenes_s5Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s5Tscn_Tree = {
  [__node_root]: "S5";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/s5.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_s5Tscn__Parents>;
  [__node_children]: [_src_scenes_s5Tscn_Talk, _src_scenes_s5Tscn_Line];

  "Talk": _src_scenes_s5Tscn_Talk;
  "Line": _src_scenes_s5Tscn_Line;
};

declare global {
  interface __src_scenes_s5Tscn__Parents {}

  interface __scripts_s5Gd__Trees {
    "res://src/scenes/s5.tscn": _src_scenes_s5Tscn_Tree;
  }

  interface GodotSceneTrees {
    "res://src/scenes/s5.tscn": _src_scenes_s5Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/s5.tscn": _GDTreeNode<_src_scenes_s5Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/s5.tscn": PackedScene<_GDTreeNode<_src_scenes_s5Tscn_Tree>>;
    "uid://bs5scene000001": PackedScene<_GDTreeNode<_src_scenes_s5Tscn_Tree>>;
  }
}

export {}