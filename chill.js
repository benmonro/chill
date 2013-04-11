/**
 * Created with IntelliJ IDEA.
 * User: BenMonro
 * Date: 4/10/13
 * Time: 10:17 PM
 * To change this template use File | Settings | File Templates.
 */


module.exports = function (app) {

    console.log("hello");
    this.handle = function (route) {

        if(route.path) {
            app.get(route.path, route.list);
            app.post("/forms", route.create);
            app.put("/forms", route.update);
            app.delete("/forms", route.clearAll);
        }
    }


    return this;
}

exports.handle = this.handle;