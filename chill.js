
module.exports = function (app) {

    this.handle = function (route) {
        if (!route) {
            console.error("No route, did you forget to return 'this' in the module.exports function?");
            return;
        }
        if (route.path) {
            const ID_PARAM = "/:id?";

            if (route.list) {
                app.get(route.path, route.list);
            }

            if (route.findById) {
                app.get(route.path + "/:id", route.findById);
            }

            if (route.create) {
                app.post(route.path + ID_PARAM, route.create);
            }

            if (route.update) {
                app.put(route.path + ID_PARAM, route.update);
            }

            if (route.delete) {
                app.delete(route.path + ID_PARAM, route.delete);
            }
        }
    };

    return this;
};

exports.handle = this.handle;