// AUTO-GENERATED — do not edit manually.

type _src_scenes_s1Tscn_Card_VBoxContainer_NameLabel = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_s1Tscn_Card_VBoxContainer;
  [__node_children]: [];

};

type _src_scenes_s1Tscn_Card_VBoxContainer_FatigueBar = {
  [__node_type]: ProgressBar;
  [__node_parent]: _src_scenes_s1Tscn_Card_VBoxContainer;
  [__node_children]: [];

};

type _src_scenes_s1Tscn_Card_VBoxContainer_RestButton = {
  [__node_type]: Button;
  [__node_parent]: _src_scenes_s1Tscn_Card_VBoxContainer;
  [__node_children]: [];

};

type _src_scenes_s1Tscn_Card_VBoxContainer = {
  [__node_type]: VBoxContainer;
  [__node_parent]: _src_scenes_s1Tscn_Card;
  [__node_children]: [_src_scenes_s1Tscn_Card_VBoxContainer_NameLabel, _src_scenes_s1Tscn_Card_VBoxContainer_FatigueBar, _src_scenes_s1Tscn_Card_VBoxContainer_RestButton];

  "NameLabel": _src_scenes_s1Tscn_Card_VBoxContainer_NameLabel;
  "FatigueBar": _src_scenes_s1Tscn_Card_VBoxContainer_FatigueBar;
  "RestButton": _src_scenes_s1Tscn_Card_VBoxContainer_RestButton;
};

type _src_scenes_s1Tscn_Card = {
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/person_card.gd">;
  [__node_parent]: _src_scenes_s1Tscn_Tree;
  [__node_children]: [_src_scenes_s1Tscn_Card_VBoxContainer];

  "VBoxContainer": _src_scenes_s1Tscn_Card_VBoxContainer;
  "VBoxContainer/NameLabel": _src_scenes_s1Tscn_Card_VBoxContainer_NameLabel;
  "VBoxContainer/FatigueBar": _src_scenes_s1Tscn_Card_VBoxContainer_FatigueBar;
  "VBoxContainer/RestButton": _src_scenes_s1Tscn_Card_VBoxContainer_RestButton;
};

type _src_scenes_s1Tscn_Tree = {
  [__node_root]: "S1";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/s1.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_s1Tscn__Parents>;
  [__node_children]: [_src_scenes_s1Tscn_Card];

  "Card": _src_scenes_s1Tscn_Card;
  "Card/VBoxContainer": _src_scenes_s1Tscn_Card_VBoxContainer;
  "Card/VBoxContainer/NameLabel": _src_scenes_s1Tscn_Card_VBoxContainer_NameLabel;
  "Card/VBoxContainer/FatigueBar": _src_scenes_s1Tscn_Card_VBoxContainer_FatigueBar;
  "Card/VBoxContainer/RestButton": _src_scenes_s1Tscn_Card_VBoxContainer_RestButton;
};

declare global {
  interface __src_scenes_s1Tscn__Parents {}

  interface __scripts_s1Gd__Trees {
    "res://src/scenes/s1.tscn": _src_scenes_s1Tscn_Tree;
  }

  interface __scripts_person_cardGd__Trees {
    "res://src/scenes/s1.tscn": _src_scenes_s1Tscn_Card;
  }

  interface GodotSceneTrees {
    "res://src/scenes/s1.tscn": _src_scenes_s1Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/s1.tscn": _GDTreeNode<_src_scenes_s1Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/s1.tscn": PackedScene<_GDTreeNode<_src_scenes_s1Tscn_Tree>>;
    "uid://bs1scene000001": PackedScene<_GDTreeNode<_src_scenes_s1Tscn_Tree>>;
  }
}

export {}