// AUTO-GENERATED — do not edit manually.

type _src_scenes_p06_move_a_character_p6Tscn_Player_Sprite2D = {
  [__node_type]: Sprite2D;
  [__node_parent]: _src_scenes_p06_move_a_character_p6Tscn_Player;
  [__node_children]: [];

};

type _src_scenes_p06_move_a_character_p6Tscn_Player_CollisionShape2D = {
  [__node_type]: CollisionShape2D;
  [__node_parent]: _src_scenes_p06_move_a_character_p6Tscn_Player;
  [__node_children]: [];

};

type _src_scenes_p06_move_a_character_p6Tscn_Player = {
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/p06-move-a-character/player.gd">;
  [__node_parent]: _src_scenes_p06_move_a_character_p6Tscn_Tree;
  [__node_children]: [_src_scenes_p06_move_a_character_p6Tscn_Player_Sprite2D, _src_scenes_p06_move_a_character_p6Tscn_Player_CollisionShape2D];

  "Sprite2D": _src_scenes_p06_move_a_character_p6Tscn_Player_Sprite2D;
  "CollisionShape2D": _src_scenes_p06_move_a_character_p6Tscn_Player_CollisionShape2D;
};

type _src_scenes_p06_move_a_character_p6Tscn_Wall_ColorRect = {
  [__node_type]: ColorRect;
  [__node_parent]: _src_scenes_p06_move_a_character_p6Tscn_Wall;
  [__node_children]: [];

};

type _src_scenes_p06_move_a_character_p6Tscn_Wall_CollisionShape2D = {
  [__node_type]: CollisionShape2D;
  [__node_parent]: _src_scenes_p06_move_a_character_p6Tscn_Wall;
  [__node_children]: [];

};

type _src_scenes_p06_move_a_character_p6Tscn_Wall = {
  [__node_type]: StaticBody2D;
  [__node_parent]: _src_scenes_p06_move_a_character_p6Tscn_Tree;
  [__node_children]: [_src_scenes_p06_move_a_character_p6Tscn_Wall_ColorRect, _src_scenes_p06_move_a_character_p6Tscn_Wall_CollisionShape2D];

  "ColorRect": _src_scenes_p06_move_a_character_p6Tscn_Wall_ColorRect;
  "CollisionShape2D": _src_scenes_p06_move_a_character_p6Tscn_Wall_CollisionShape2D;
};

type _src_scenes_p06_move_a_character_p6Tscn_Tree = {
  [__node_root]: "P6";
  [__node_type]: Node2D;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_p06_move_a_character_p6Tscn__Parents>;
  [__node_children]: [_src_scenes_p06_move_a_character_p6Tscn_Player, _src_scenes_p06_move_a_character_p6Tscn_Wall];

  "Player": _src_scenes_p06_move_a_character_p6Tscn_Player;
  "Player/Sprite2D": _src_scenes_p06_move_a_character_p6Tscn_Player_Sprite2D;
  "Player/CollisionShape2D": _src_scenes_p06_move_a_character_p6Tscn_Player_CollisionShape2D;
  "Wall": _src_scenes_p06_move_a_character_p6Tscn_Wall;
  "Wall/ColorRect": _src_scenes_p06_move_a_character_p6Tscn_Wall_ColorRect;
  "Wall/CollisionShape2D": _src_scenes_p06_move_a_character_p6Tscn_Wall_CollisionShape2D;
};

declare global {
  interface __src_scenes_p06_move_a_character_p6Tscn__Parents {}

  interface __scripts_p06_move_a_character_playerGd__Trees {
    "res://src/scenes/p06-move-a-character/p6.tscn": _src_scenes_p06_move_a_character_p6Tscn_Player;
  }

  interface GodotSceneTrees {
    "res://src/scenes/p06-move-a-character/p6.tscn": _src_scenes_p06_move_a_character_p6Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/p06-move-a-character/p6.tscn": _GDTreeNode<_src_scenes_p06_move_a_character_p6Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/p06-move-a-character/p6.tscn": PackedScene<_GDTreeNode<_src_scenes_p06_move_a_character_p6Tscn_Tree>>;
    "uid://bp6root000001": PackedScene<_GDTreeNode<_src_scenes_p06_move_a_character_p6Tscn_Tree>>;
  }
}

export {}