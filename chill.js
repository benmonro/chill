/**
 * Created with IntelliJ IDEA.
 * User: BenMonro
 * Date: 4/10/13
 * Time: 10:17 PM
 * To change this template use File | Settings | File Templates.
 */


module.exports = function (app) {

    this.handle = function (route) {

        if(route.path) {
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

            if(route.update) {
            app.put(route.path + ID_PARAM, route.update);
            }


            if (route.delete) {
                app.delete(route.path + ID_PARAM, route.delete);
            }
        }
    }


    return this;
}

exports.handle = this.handle;