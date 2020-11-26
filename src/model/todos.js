const TodosModel = {
    priKeys: [
    ],

    allKeys: [],

    validator: {
        name            : "A.isString", // model category
        done           : "A.isBoolean < false",
    },
};

TodosModel.subKey = {
}

module.exports = TodosModel;