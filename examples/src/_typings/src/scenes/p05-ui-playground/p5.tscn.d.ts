// AUTO-GENERATED — do not edit manually.

type _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer_Label = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer;
  [__node_children]: [];

};

type _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer_HSlider = {
  [__node_type]: HSlider;
  [__node_parent]: _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer;
  [__node_children]: [];

};

type _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer = {
  [__node_type]: VBoxContainer;
  [__node_parent]: _src_scenes_p05_ui_playground_p5Tscn_Tree;
  [__node_children]: [_src_scenes_p05_ui_playground_p5Tscn_VBoxContainer_Label, _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer_HSlider];

  "Label": _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer_Label;
  "HSlider": _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer_HSlider;
};

type _src_scenes_p05_ui_playground_p5Tscn_Tree = {
  [__node_root]: "P5";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/p05-ui-playground/p5.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_p05_ui_playground_p5Tscn__Parents>;
  [__node_children]: [_src_scenes_p05_ui_playground_p5Tscn_VBoxContainer];

  "VBoxContainer": _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer;
  "VBoxContainer/Label": _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer_Label;
  "VBoxContainer/HSlider": _src_scenes_p05_ui_playground_p5Tscn_VBoxContainer_HSlider;
};

declare global {
  interface __src_scenes_p05_ui_playground_p5Tscn__Parents {}

  interface __scripts_p05_ui_playground_p5Gd__Trees {
    "res://src/scenes/p05-ui-playground/p5.tscn": _src_scenes_p05_ui_playground_p5Tscn_Tree;
  }

  interface GodotSceneTrees {
    "res://src/scenes/p05-ui-playground/p5.tscn": _src_scenes_p05_ui_playground_p5Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/p05-ui-playground/p5.tscn": _GDTreeNode<_src_scenes_p05_ui_playground_p5Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/p05-ui-playground/p5.tscn": PackedScene<_GDTreeNode<_src_scenes_p05_ui_playground_p5Tscn_Tree>>;
    "uid://bp5root000001": PackedScene<_GDTreeNode<_src_scenes_p05_ui_playground_p5Tscn_Tree>>;
  }
}

export {}