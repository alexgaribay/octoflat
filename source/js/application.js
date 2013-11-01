// Some general UI pack related JS

$(document).ready(function() {
    // Move some elements around when viewing from a "mobile" container
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
    // Disable link click not scroll top
    $("a[href='#']").click(function() {
        return false
    });

});

function updateContainer() {
    var $containerWidth = $(window).width();
    if ($containerWidth <= 767) {
        swapPlaces(".post-meta", ".post-container");
	moveDatetime(true);
    }
    else {
        swapPlaces(".post-container", ".post-meta");
	moveDatetime(false);
    }
}

function swapPlaces(currentlyBefore, currentlyAfter) {
    $(currentlyBefore).each(function() {
        var $sibling = $(this).siblings(currentlyAfter);
	$(this).insertAfter($sibling);
    });
}

function moveDatetime(underTitle) {
    if (underTitle == true) {
        $(".date-time").each(function() {
            var $title = $(this).closest(".row-fluid").find(".link");
            $(this).insertAfter($title);
        });
    }
    else {
	$(".date-time").each(function() {
	    var $firstItemInPostMeta = $(this).closest(".row-fluid").find(".post-meta").children().first();
	    $(this).insertBefore($firstItemInPostMeta);
	});
    }
}
