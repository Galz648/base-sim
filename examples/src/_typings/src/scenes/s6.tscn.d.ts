// AUTO-GENERATED — do not edit manually.

type _src_scenes_s6Tscn_Floor = {
  [__node_type]: ColorRect;
  [__node_parent]: _src_scenes_s6Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s6Tscn_Path_Walker_Body_Sprite2D = {
  [__node_type]: Sprite2D;
  [__node_parent]: _src_scenes_s6Tscn_Path_Walker_Body;
  [__node_children]: [];

};

type _src_scenes_s6Tscn_Path_Walker_Body_CollisionShape2D = {
  [__node_type]: CollisionShape2D;
  [__node_parent]: _src_scenes_s6Tscn_Path_Walker_Body;
  [__node_children]: [];

};

type _src_scenes_s6Tscn_Path_Walker_Body = {
  [__node_type]: Area2D;
  [__node_parent]: _src_scenes_s6Tscn_Path_Walker;
  [__node_children]: [_src_scenes_s6Tscn_Path_Walker_Body_Sprite2D, _src_scenes_s6Tscn_Path_Walker_Body_CollisionShape2D];

  "Sprite2D": _src_scenes_s6Tscn_Path_Walker_Body_Sprite2D;
  "CollisionShape2D": _src_scenes_s6Tscn_Path_Walker_Body_CollisionShape2D;
};

type _src_scenes_s6Tscn_Path_Walker = {
  [__node_type]: PathFollow2D;
  [__node_parent]: _src_scenes_s6Tscn_Path;
  [__node_children]: [_src_scenes_s6Tscn_Path_Walker_Body];

  "Body": _src_scenes_s6Tscn_Path_Walker_Body;
  "Body/Sprite2D": _src_scenes_s6Tscn_Path_Walker_Body_Sprite2D;
  "Body/CollisionShape2D": _src_scenes_s6Tscn_Path_Walker_Body_CollisionShape2D;
};

type _src_scenes_s6Tscn_Path = {
  [__node_type]: Path2D;
  [__node_parent]: _src_scenes_s6Tscn_Tree;
  [__node_children]: [_src_scenes_s6Tscn_Path_Walker];

  "Walker": _src_scenes_s6Tscn_Path_Walker;
  "Walker/Body": _src_scenes_s6Tscn_Path_Walker_Body;
  "Walker/Body/Sprite2D": _src_scenes_s6Tscn_Path_Walker_Body_Sprite2D;
  "Walker/Body/CollisionShape2D": _src_scenes_s6Tscn_Path_Walker_Body_CollisionShape2D;
};

type _src_scenes_s6Tscn_Sweep_ColorRect = {
  [__node_type]: ColorRect;
  [__node_parent]: _src_scenes_s6Tscn_Sweep;
  [__node_children]: [];

};

type _src_scenes_s6Tscn_Sweep_Cone_CollisionShape2D = {
  [__node_type]: CollisionShape2D;
  [__node_parent]: _src_scenes_s6Tscn_Sweep_Cone;
  [__node_children]: [];

};

type _src_scenes_s6Tscn_Sweep_Cone = {
  [__node_type]: Area2D;
  [__node_parent]: _src_scenes_s6Tscn_Sweep;
  [__node_children]: [_src_scenes_s6Tscn_Sweep_Cone_CollisionShape2D];

  "CollisionShape2D": _src_scenes_s6Tscn_Sweep_Cone_CollisionShape2D;
};

type _src_scenes_s6Tscn_Sweep = {
  [__node_type]: Node2D;
  [__node_parent]: _src_scenes_s6Tscn_Tree;
  [__node_children]: [_src_scenes_s6Tscn_Sweep_ColorRect, _src_scenes_s6Tscn_Sweep_Cone];

  "ColorRect": _src_scenes_s6Tscn_Sweep_ColorRect;
  "Cone": _src_scenes_s6Tscn_Sweep_Cone;
  "Cone/CollisionShape2D": _src_scenes_s6Tscn_Sweep_Cone_CollisionShape2D;
};

type _src_scenes_s6Tscn_Notice = {
  [__node_type]: Timer;
  [__node_parent]: _src_scenes_s6Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s6Tscn_Status = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_s6Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s6Tscn_Tree = {
  [__node_root]: "S6";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/watch.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_s6Tscn__Parents>;
  [__node_children]: [_src_scenes_s6Tscn_Floor, _src_scenes_s6Tscn_Path, _src_scenes_s6Tscn_Sweep, _src_scenes_s6Tscn_Notice, _src_scenes_s6Tscn_Status];

  "Floor": _src_scenes_s6Tscn_Floor;
  "Path": _src_scenes_s6Tscn_Path;
  "Path/Walker": _src_scenes_s6Tscn_Path_Walker;
  "Path/Walker/Body": _src_scenes_s6Tscn_Path_Walker_Body;
  "Path/Walker/Body/Sprite2D": _src_scenes_s6Tscn_Path_Walker_Body_Sprite2D;
  "Path/Walker/Body/CollisionShape2D": _src_scenes_s6Tscn_Path_Walker_Body_CollisionShape2D;
  "Sweep": _src_scenes_s6Tscn_Sweep;
  "Sweep/ColorRect": _src_scenes_s6Tscn_Sweep_ColorRect;
  "Sweep/Cone": _src_scenes_s6Tscn_Sweep_Cone;
  "Sweep/Cone/CollisionShape2D": _src_scenes_s6Tscn_Sweep_Cone_CollisionShape2D;
  "Notice": _src_scenes_s6Tscn_Notice;
  "Status": _src_scenes_s6Tscn_Status;
};

declare global {
  interface __src_scenes_s6Tscn__Parents {}

  interface __scripts_watchGd__Trees {
    "res://src/scenes/s6.tscn": _src_scenes_s6Tscn_Tree;
  }

  interface GodotSceneTrees {
    "res://src/scenes/s6.tscn": _src_scenes_s6Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/s6.tscn": _GDTreeNode<_src_scenes_s6Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/s6.tscn": PackedScene<_GDTreeNode<_src_scenes_s6Tscn_Tree>>;
    "uid://bs6scene000001": PackedScene<_GDTreeNode<_src_scenes_s6Tscn_Tree>>;
  }
}

export {}