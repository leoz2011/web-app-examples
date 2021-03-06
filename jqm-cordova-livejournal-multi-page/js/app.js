
// Application

$(function() {
    $( '[data-role="navbar"]' ).navbar();
    $( '[data-role="header"], [data-role="footer"]' ).toolbar();
	// Set button actions
	setActions();
});

$(document).on('pagecontainerbeforeshow', function(e, ui) {
	// Set title
    var title = activePage().jqmData('title');
    $('[data-role="header"] h1').text( title );
	// Enable/disable buttons
	setButtons();
});

$(document).on('pagecreate', '[data-role=page]', function(e) {
    var id = '#' + $(this).attr('id') + ' .main-content .livejournal';
    $.livejournal.getevents(window.lj_conf.date, window.lj_conf.journal, window.lj_conf.number, addRecord, id, doneReading);
});

