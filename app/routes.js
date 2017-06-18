module.exports = function(app, router, path) {

    router.use(function(req, res, next) {
        console.log("/" + req.method);
    });

    app.get("/", function(req, res) {
        res.render("index", {
            title: "app_test"
        });
    });

    app.use("/", router);

    app.use("/", function(req, res) {
        res.sendFile(path + "404.html");
    });
}