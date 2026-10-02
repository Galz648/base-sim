// AUTO-GENERATED — do not edit manually.

type _src_scenes_s4Tscn_Timer = {
  [__node_type]: Timer;
  [__node_parent]: _src_scenes_s4Tscn_Tree;
  [__node_children]: [];

};

type _src_scenes_s4Tscn_EventPopup_VBoxContainer_Title = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_s4Tscn_EventPopup_VBoxContainer;
  [__node_children]: [];

};

type _src_scenes_s4Tscn_EventPopup_VBoxContainer_Body = {
  [__node_type]: Label;
  [__node_parent]: _src_scenes_s4Tscn_EventPopup_VBoxContainer;
  [__node_children]: [];

};

type _src_scenes_s4Tscn_EventPopup_VBoxContainer_Choice = {
  [__node_type]: Button;
  [__node_parent]: _src_scenes_s4Tscn_EventPopup_VBoxContainer;
  [__node_children]: [];

};

type _src_scenes_s4Tscn_EventPopup_VBoxContainer = {
  [__node_type]: VBoxContainer;
  [__node_parent]: _src_scenes_s4Tscn_EventPopup;
  [__node_children]: [_src_scenes_s4Tscn_EventPopup_VBoxContainer_Title, _src_scenes_s4Tscn_EventPopup_VBoxContainer_Body, _src_scenes_s4Tscn_EventPopup_VBoxContainer_Choice];

  "Title": _src_scenes_s4Tscn_EventPopup_VBoxContainer_Title;
  "Body": _src_scenes_s4Tscn_EventPopup_VBoxContainer_Body;
  "Choice": _src_scenes_s4Tscn_EventPopup_VBoxContainer_Choice;
};

type _src_scenes_s4Tscn_EventPopup = {
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/event_popup.gd">;
  [__node_parent]: _src_scenes_s4Tscn_Tree;
  [__node_children]: [_src_scenes_s4Tscn_EventPopup_VBoxContainer];

  "VBoxContainer": _src_scenes_s4Tscn_EventPopup_VBoxContainer;
  "VBoxContainer/Title": _src_scenes_s4Tscn_EventPopup_VBoxContainer_Title;
  "VBoxContainer/Body": _src_scenes_s4Tscn_EventPopup_VBoxContainer_Body;
  "VBoxContainer/Choice": _src_scenes_s4Tscn_EventPopup_VBoxContainer_Choice;
};

type _src_scenes_s4Tscn_Tree = {
  [__node_root]: "S4";
  [__node_type]: _GDGetInterfaceNode<GodotScripts, "res://scripts/s4.gd">;
  [__node_parent]: _GDGetInterfaceParent<__src_scenes_s4Tscn__Parents>;
  [__node_children]: [_src_scenes_s4Tscn_Timer, _src_scenes_s4Tscn_EventPopup];

  "Timer": _src_scenes_s4Tscn_Timer;
  "EventPopup": _src_scenes_s4Tscn_EventPopup;
  "EventPopup/VBoxContainer": _src_scenes_s4Tscn_EventPopup_VBoxContainer;
  "EventPopup/VBoxContainer/Title": _src_scenes_s4Tscn_EventPopup_VBoxContainer_Title;
  "EventPopup/VBoxContainer/Body": _src_scenes_s4Tscn_EventPopup_VBoxContainer_Body;
  "EventPopup/VBoxContainer/Choice": _src_scenes_s4Tscn_EventPopup_VBoxContainer_Choice;
};

declare global {
  interface __src_scenes_s4Tscn__Parents {}

  interface __scripts_s4Gd__Trees {
    "res://src/scenes/s4.tscn": _src_scenes_s4Tscn_Tree;
  }

  interface __scripts_event_popupGd__Trees {
    "res://src/scenes/s4.tscn": _src_scenes_s4Tscn_EventPopup;
  }

  interface GodotSceneTrees {
    "res://src/scenes/s4.tscn": _src_scenes_s4Tscn_Tree;
  }
  interface GodotScenes {
    "res://src/scenes/s4.tscn": _GDTreeNode<_src_scenes_s4Tscn_Tree>;
  }
  interface GodotResources {
    "res://src/scenes/s4.tscn": PackedScene<_GDTreeNode<_src_scenes_s4Tscn_Tree>>;
    "uid://bs4scene000001": PackedScene<_GDTreeNode<_src_scenes_s4Tscn_Tree>>;
  }
}

export {}