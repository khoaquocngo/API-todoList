const TodosRoute = {
	route	: true,
	ctrl	: true,
	model	: true,

	POST	: [],
	GET		: [],
	PUT		: [],
	DELETE	: [],

	config	: {
		unAuth: true,
		IgnoreModifiedAt: true,

	}
};

TodosRoute.POST.push([[""], [
	`A.verifyInput: todos: name!`,
	`A.insertOne: todos`,
	`A.refactorOutput:: createdAt-,modifiedAt-, public-  `
]]);

TodosRoute.GET.push([["/:_id"], [
	`A.findById: todos`,
	`A.refactorOutput:: createdAt-,modifiedAt-  `
]]);

// Get all todos
TodosRoute.POST.push([["/s"], [
	`A.findAll: todos`,
	`A.refactorOutput:: createdAt-,modifiedAt-  `
]]);

// Filter by name
TodosRoute.POST.push([["/filter"], [
	`A.verifyInput: todos: name!`,
	`A.findMany: todos : name`,
	`A.refactorOutput:: createdAt-,modifiedAt-  `
]]);


// Delete todos
TodosRoute.DELETE.push([["/:_id"], [
	`A.deleteById: todos`
]]);

// Update todos
TodosRoute.PUT.push([["/:_id"], [
	`A.verifyInput: todos: name!`,
	`A.updateById: todos`,
	`A.refactorOutput:: createdAt-,modifiedAt-  `
]]);

// Done todo
TodosRoute.POST.push([["/:_id/done"], [
	`A.verifyInput: todos: ...`,
	`A.updateById: todos : : ({"done" : true})`,
	`A.refactorOutput:: createdAt-,modifiedAt-  `
]]);

module.exports = TodosRoute;