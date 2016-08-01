	$(document).ready(function() {
		$.getJSON('http://photorankapi-a.akamaihd.net/customers/215757/media/photorank?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2', function(olaResults) {
			$('<div class="results"></div>')
			.append(olaResults.metadata.code)
			.appendTo('body')
		});
	});