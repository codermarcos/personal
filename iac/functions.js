function handler(event) {
	var request = event.request;
	if (request.uri !== "/" && (request.uri.endsWith("/") || request.uri.endsWith("/en"))) {
		request.uri = request.uri.concat(request.uri.endsWith("/") ? "index.html" : "/index.html");
	}
	return request;
}
