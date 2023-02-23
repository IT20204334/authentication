const router = require('express').Router();
const verify = require('../verifyToken');


router.get('/:id', verify, (req,res) => {
    res.send(req.user);
    User.findOne({_id: req.user})
})




module.exports = router;
