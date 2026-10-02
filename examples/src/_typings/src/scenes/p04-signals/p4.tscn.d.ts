// AUTO-GENERATED — do not edit manually.

type _src_scenes_p04_signals_p4Tscn_Button = {
  [__node_type]: Button;
  [__node_parent]: _src_scenes_p04_signals_p4Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_p04_signals_p4Tscn_Label = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_p04_signals_p4Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_p04_signals_p4Tscn_Ping = {
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/p04-signals/ping.gd">;
  [__node_parent]: _src_scenes_p04_signals_p4Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_p04_signals_p4Tscn_Tree = {
  [__node_root]: "P4";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/p04-signals/p4.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_p04_signals_p4Tscn__Parents>;
  [__node_children]: [_src_scenes_p04_signals_p4Tscn_Button, _src_scenes_p04_signals_p4Tscn_Label, _src_scenes_p04_signals_p4Tscn_Ping];

  "Button": _src_scenes_p04_signals_p4Tscn_Button;
  "Label": _src_scenes_p04_signals_p4Tscn_Label;
  "Ping": _src_scenes_p04_signals_p4Tscn_Ping;
};

declare global {
  interface __src_scenes_p04_signals_p4Tscn__Parents {}

  interface __scripts_p04_signals_p4Gd__Trees {
    "res://src/scenes/p04-signals/p4.tscn": _src_scenes_p04_signals_p4Tscn_Tree;
  }

  interface __scripts_p04_signals_pingGd__Trees {
    "res://src/scenes/p04-signals/p4.tscn": _src_scenes_p04_signals_p4Tscn_Ping;
  }

  interface GodotSceneTrees {
    "res://src/scenes/p04-signals/p4.tscn": _src_scenes_p04_signals_p4Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/p04-signals/p4.tscn": _GDTreeNode<_src_scenes_p04_signals_p4Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/p04-signals/p4.tscn": PackedScene<_GDTreeNode<_src_scenes_p04_signals_p4Tscn_Tree>>;
    "uid://bp4root000001": PackedScene<_GDTreeNode<_src_scenes_p04_signals_p4Tscn_Tree>>;
  }
}

export {}