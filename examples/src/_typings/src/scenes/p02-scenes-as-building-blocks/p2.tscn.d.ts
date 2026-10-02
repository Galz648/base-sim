// AUTO-GENERATED — do not edit manually.

type _src_scenes_p02_scenes_as_building_blocks_ballTscn_Tree = GodotSceneTrees["res://src/scenes/p02-scenes-as-building-blocks/ball.tscn"];

type _src_scenes_p02_scenes_as_building_blocks_p2Tscn_Tree = {
  [__node_root]: "P2";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/p02-scenes-as-building-blocks/p2.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_p02_scenes_as_building_blocks_p2Tscn__Parents>;
  [__node_children]: [_src_scenes_p02_scenes_as_building_blocks_ballTscn_Tree];

  "Ball": _src_scenes_p02_scenes_as_building_blocks_ballTscn_Tree;
};

declare global {
  interface __src_scenes_p02_scenes_as_building_blocks_p2Tscn__Parents {}

  interface __scripts_p02_scenes_as_building_blocks_p2Gd__Trees {
    "res://src/scenes/p02-scenes-as-building-blocks/p2.tscn": _src_scenes_p02_scenes_as_building_blocks_p2Tscn_Tree;
  }

  // Instanced scene parents
  interface __src_scenes_p02_scenes_as_building_blocks_ballTscn__Parents { "res://src/scenes/p02-scenes-as-building-blocks/p2.tscn": _src_scenes_p02_scenes_as_building_blocks_p2Tscn_Tree; }

  interface GodotSceneTrees {
    "res://src/scenes/p02-scenes-as-building-blocks/p2.tscn": _src_scenes_p02_scenes_as_building_blocks_p2Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/p02-scenes-as-building-blocks/p2.tscn": _GDTreeNode<_src_scenes_p02_scenes_as_building_blocks_p2Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/p02-scenes-as-building-blocks/p2.tscn": PackedScene<_GDTreeNode<_src_scenes_p02_scenes_as_building_blocks_p2Tscn_Tree>>;
    "uid://bp2root000001": PackedScene<_GDTreeNode<_src_scenes_p02_scenes_as_building_blocks_p2Tscn_Tree>>;
  }
}

export {}