function handler(event) {
	var request = event.request;
	if (request.uri !== "/" && (request.uri.endsWith("/") || request.uri.endsWith("/en"))) {
		if (request.uri.endsWith("/")) {
			request.uri = request.uri.concat("index.html");
		} else {
			request.uri = request.uri.concat("/index.html");
		}
	}
	return request;
}
