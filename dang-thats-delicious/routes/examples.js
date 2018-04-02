const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const wes = { 
    name: 'Wes', 
    age: 100, 
    cool: true
  };

  //RENDERS CAN BE USED ONCE! (.json, .send, .render)

  //res.send('Hey! It works');
  //res.json(wes);

  //request info from the URL params 
  //http://localhost:7777/?name=wes&age=100&cool=true
  //res.send(req.query); sends all params
  //res.send(req.query.name); sends 1 param

  //renders a template
  res.render('hello', {
    title: 'I love food',
    name: 'Chris',
    dog: 'Dam',
    paramName: req.query.paramName,
    paramDog: req.query.paramDog
  });

  router.get('/reverse/:name', (req, res) =>  {
    const reverse = [...re.params.name].reverse().join('');
    res.send(reverse)
  });

});

module.exports = router;
