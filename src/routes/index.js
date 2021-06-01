const express = require('express');
const router = express.Router();

// SHOP DUNE

router.get('/mx/discover', (req, res) => {
    res.render('mx/discover', { title: 'Descubrir'});
});

router.get('/mx/shopping', (req, res) => {
    res.render('mx/shopping', { title: 'Comprar'});
});

router.get('/mx/search', (req, res) => {
    res.render('mx/search', { title: 'Buscar'});
});

router.get('/mx/offers', (req, res) => {
    res.render('mx/offers', { title: 'Ofertas'});
});

router.get('/mx/categories', (req, res) => {
    res.render('mx/categories', { title: 'Categorias'});
});

router.get('/mx/arcade', (req, res) => {
    res.render('mx/arcade', { title: 'Arcade'});
});

router.get('/mx/saved', (req, res) => {
    res.render('mx/saved', { title: 'Favoritos'});
});

// RECORDS 

router.get('/mx/p/record', (req, res) => {
    res.render('mx/p/record', { title: '(Records Name)'});
});

router.get('/mx/p/gallery', (req, res) => {
    res.render('mx/p/gallery', { title: '(Gallery Name)'});
});

// SHOP PRODUCTS 

router.get('/mx/product', (req, res) => {
    res.render('mx/product', { title: '(Product Name)'});
});

// DELIVERY

router.get('/mx/delivery', (req, res) => {
    res.render('mx/delivery', { title: 'Delivery (Entregas)'});
});

router.get('/mx/delivery/day-deliveries', (req, res) => {
    res.render('mx/delivery/day-deliveries', { title: 'Day Delivery (Entregas al día)'});
});

// MUL MESSAGE

router.get('/mx/message', (req, res) => {
    res.render('mx/message', { title: 'Message'});
});


// ARCADE GAMES

router.get('/mx/arcade/games/visage', (req, res) => {
    res.render('mx/arcade/games/visage', { title: 'Visage'});
});


// ARCADE SUITES PARKS

router.get('/mx/arcade/suite', (req, res) => {
    res.render('mx/arcade/suite', { title: 'Arcade Suites'});
});

router.get('/mx/arcade/suite/nintendo', (req, res) => {
    res.render('mx/arcade/suite/nintendo', { title: 'Nintendo Arcade'});
});

// SUITES PARKS 

router.get('/mx/suite/', (req, res) => {
    res.render('mx/suite/', { title: 'Suites'});
}); 

router.get('/mx/suite/apple', (req, res) => {
    res.render('mx/suite/apple', { title: 'Apple'});
}); 

router.get('/mx/suite/apple/publications', (req, res) => {
    res.render('mx/suite/apple/publications', { title: 'Apple'});
}); 

router.get('/mx/suite/apple/events', (req, res) => {
    res.render('mx/suite/apple/events', { title: 'Apple'});
}); 

router.get('/mx/suite/apple/store', (req, res) => {
    res.render('mx/suite/apple/store', { title: 'Apple'});
}); 

router.get('/mx/suite/apple/store', (req, res) => {
    res.render('mx/suite/apple/store', { title: 'Apple'});
}); 

// PORFILE'S COMPANIES 

router.get('/mx/profile/lacoste', (req, res) => {
    res.render('mx/profile/lacoste', { title: 'Lacoste'});
}); 

// EVENT

router.get('/mx/event', (req, res) => {
    res.render('mx/event', { title: '(Event Name)'});
}); 

module.exports = router;