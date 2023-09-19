const { Router } =require('express');
const router = Router();

router.get('/',(req, res) => {
    res.render('index.ejs');
})

router.get('/new-book', (req, res)=>{
    res.render('new-book');
})

module.exports = router;