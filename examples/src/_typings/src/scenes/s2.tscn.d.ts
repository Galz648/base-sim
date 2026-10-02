// AUTO-GENERATED — do not edit manually.

type _src_scenes_s2Tscn_Floor = {
  [__node_type]: ColorRect;
  [__node_parent]: _src_scenes_s2Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s2Tscn_Place = {
  [__node_type]: Marker2D;
  [__node_parent]: _src_scenes_s2Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s2Tscn_Person_Sprite2D = {
  [__node_type]: Sprite2D;
  [__node_parent]: _src_scenes_s2Tscn_Person;
  [__node_children]: [];

};

type _src_scenes_s2Tscn_Person_CollisionShape2D = {
  [__node_type]: CollisionShape2D;
  [__node_parent]: _src_scenes_s2Tscn_Person;
  [__node_children]: [];

};

type _src_scenes_s2Tscn_Person = {
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/person_body.gd">;
  [__node_parent]: _src_scenes_s2Tscn_Tree;
  [__node_children]: [_src_scenes_s2Tscn_Person_Sprite2D, _src_scenes_s2Tscn_Person_CollisionShape2D];

  "Sprite2D": _src_scenes_s2Tscn_Person_Sprite2D;
  "CollisionShape2D": _src_scenes_s2Tscn_Person_CollisionShape2D;
};

type _src_scenes_s2Tscn_Tree = {
  [__node_root]: "S2";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/s2.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_s2Tscn__Parents>;
  [__node_children]: [_src_scenes_s2Tscn_Floor, _src_scenes_s2Tscn_Place, _src_scenes_s2Tscn_Person];

  "Floor": _src_scenes_s2Tscn_Floor;
  "Place": _src_scenes_s2Tscn_Place;
  "Person": _src_scenes_s2Tscn_Person;
  "Person/Sprite2D": _src_scenes_s2Tscn_Person_Sprite2D;
  "Person/CollisionShape2D": _src_scenes_s2Tscn_Person_CollisionShape2D;
};

declare global {
  interface __src_scenes_s2Tscn__Parents {}

  interface __scripts_s2Gd__Trees {
    "res://src/scenes/s2.tscn": _src_scenes_s2Tscn_Tree;
  }

  interface __scripts_person_bodyGd__Trees {
    "res://src/scenes/s2.tscn": _src_scenes_s2Tscn_Person;
  }

  interface GodotSceneTrees {
    "res://src/scenes/s2.tscn": _src_scenes_s2Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/s2.tscn": _GDTreeNode<_src_scenes_s2Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/s2.tscn": PackedScene<_GDTreeNode<_src_scenes_s2Tscn_Tree>>;
    "uid://cth0pwgqoem53": PackedScene<_GDTreeNode<_src_scenes_s2Tscn_Tree>>;
  }
}

export {}