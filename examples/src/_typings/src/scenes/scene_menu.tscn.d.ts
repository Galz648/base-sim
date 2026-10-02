// AUTO-GENERATED — do not edit manually.

type _src_scenes_scene_menuTscn_VBoxContainer_Title = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_scene_menuTscn_VBoxContainer;
  [__node_children]: [];

};

type _src_scenes_scene_menuTscn_VBoxContainer = {
  [__node_type]: VBoxContainer;
  [__node_parent]: _src_scenes_scene_menuTscn_Tree;
  [__node_children]: [_src_scenes_scene_menuTscn_VBoxContainer_Title];

  "Title": _src_scenes_scene_menuTscn_VBoxContainer_Title;
};

type _src_scenes_scene_menuTscn_Tree = {
  [__node_root]: "SceneMenu";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/scene_menu.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_scene_menuTscn__Parents>;
  [__node_children]: [_src_scenes_scene_menuTscn_VBoxContainer];

  "VBoxContainer": _src_scenes_scene_menuTscn_VBoxContainer;
  "VBoxContainer/Title": _src_scenes_scene_menuTscn_VBoxContainer_Title;
};

declare global {
  interface __src_scenes_scene_menuTscn__Parents {}

  interface __scripts_scene_menuGd__Trees {
    "res://src/scenes/scene_menu.tscn": _src_scenes_scene_menuTscn_Tree;
  }

  interface GodotSceneTrees {
    "res://src/scenes/scene_menu.tscn": _src_scenes_scene_menuTscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/scene_menu.tscn": _GDTreeNode<_src_scenes_scene_menuTscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/scene_menu.tscn": PackedScene<_GDTreeNode<_src_scenes_scene_menuTscn_Tree>>;
    "uid://bscenemenu001": PackedScene<_GDTreeNode<_src_scenes_scene_menuTscn_Tree>>;
  }
}

export {}