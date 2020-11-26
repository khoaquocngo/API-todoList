const App = {
	Enable	: true,

	EnableCORS			: true,
	CORSMethods			: ["POST", "GET", "PUT", "DELETE"],
	CORSHeaders			: ["authorization"],
	CORSOrigins			: [
		"http://127.0.0.1:5000", // Browser get Web URL as header "refer"
		"http://localhost:5000",
		"http://127.0.0.1:12000",


	],
}

module.exports = App;