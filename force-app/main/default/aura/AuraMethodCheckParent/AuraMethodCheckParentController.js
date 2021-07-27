({
    clickMe : function(component, event, helper) {
     var childCmp = component.find("childCmp");
     var message = childCmp.myMethodInChild();
    }
})
