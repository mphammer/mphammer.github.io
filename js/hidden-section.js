function sectionToggle(sectionID) {
	var ID = '#' + sectionID;
	$(ID).slideToggle(1000,function() {
        if ($(ID).is(':visible')) {
            $(ID+'-toggle').find("i").attr('class', 'fa fa-caret-up');
            $(ID+'-toggle').find("div").html("Show Less")
        } else {
            $(ID+'-toggle').find("i").attr('class', 'fa fa-caret-down');
            $(ID+'-toggle').find("div").html("Show More")
        }
    });
}