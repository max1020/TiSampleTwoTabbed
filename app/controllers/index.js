// TiSampleTwoTabbed
// Titanium Alloy two tabbed application sample (iOS/Android)

// open TabGroup
$.root.open();

// Alloy.Globals.UI: iOS/Android common UI functions
if (!Alloy.Globals.UI) {
	Alloy.Globals.UI = {};
}

// open Window
// winName: Alloy Window name(String)
Alloy.Globals.UI.openWindow = function(winName) {
	$.root.activeTab.open(Alloy.createController(winName).getView());
};
