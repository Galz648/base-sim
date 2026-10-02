// AUTO-GENERATED — do not edit manually.

type _src_scenes_s3Tscn_ClockLabel = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_s3Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s3Tscn_Activity = {
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/activity.gd">;
  [__node_parent]: _src_scenes_s3Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s3Tscn_Slot = {
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/slot.gd">;
  [__node_parent]: _src_scenes_s3Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s3Tscn_Tree = {
  [__node_root]: "S3";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/s3.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_s3Tscn__Parents>;
  [__node_children]: [_src_scenes_s3Tscn_ClockLabel, _src_scenes_s3Tscn_Activity, _src_scenes_s3Tscn_Slot];

  "ClockLabel": _src_scenes_s3Tscn_ClockLabel;
  "Activity": _src_scenes_s3Tscn_Activity;
  "Slot": _src_scenes_s3Tscn_Slot;
};

declare global {
  interface __src_scenes_s3Tscn__Parents {}

  interface __scripts_s3Gd__Trees {
    "res://src/scenes/s3.tscn": _src_scenes_s3Tscn_Tree;
  }

  interface __scripts_activityGd__Trees {
    "res://src/scenes/s3.tscn": _src_scenes_s3Tscn_Activity;
  }

  interface __scripts_slotGd__Trees {
    "res://src/scenes/s3.tscn": _src_scenes_s3Tscn_Slot;
  }

  interface GodotSceneTrees {
    "res://src/scenes/s3.tscn": _src_scenes_s3Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/s3.tscn": _GDTreeNode<_src_scenes_s3Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/s3.tscn": PackedScene<_GDTreeNode<_src_scenes_s3Tscn_Tree>>;
    "uid://bs3scene000001": PackedScene<_GDTreeNode<_src_scenes_s3Tscn_Tree>>;
  }
}

export {}