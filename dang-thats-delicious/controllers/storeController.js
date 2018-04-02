exports.myMiddleware = (req, res, next) => {
    req.name = 'Wes';
    if(req.name === 'Wes') {
        throw Error(`That's an stupid name!`);
    }
    next();
};
exports.homePage = (req, res) => {
    res.render('index', {
       name: req.name 
    });
};