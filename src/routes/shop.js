const express = require('express');
const router = express.Router();

// SHOP DUNE

router.get('/shop/mx/discover', (req, res) => {
    res.render('shop/mx/discover', { title: 'Descubrir'});
});

router.get('/shop/mx/shopping', (req, res) => {
    res.render('shop/mx/shopping', { title: 'Comprar'});
});

router.get('/shop/mx/search', (req, res) => {
    res.render('shop/mx/search', { title: 'Buscar'});
});

router.get('/shop/mx/categories', (req, res) => {
    res.render('shop/mx/categories', { title: 'Categorias'});
});

router.get('/shop/mx/arcade', (req, res) => {
    res.render('shop/mx/arcade', { title: 'Arcade'});
});

// SHOP PRODUCTS 

router.get('/shop/mx/products/playstation-5', (req, res) => {
    res.render('shop/mx/products/playstation-5', { title: 'PlayStation 5'});
});

router.get('/shop/products/iphone-12/pantalla-6-1-pulgadas-64gb-blanco', (req, res) => {
    res.render('shop/mx/products/iphone-12/pantalla-6-1-pulgadas-64gb-blanco', { title: 'iPhone 12'});
});

router.get('/shop/mx/products/iphone-12/pantalla-6-1-pulgadas-64gb-negro', (req, res) => {
    res.render('shop/mx/products/iphone-12/pantalla-6-1-pulgadas-64gb-negro', { title: 'iPhone 12'});
});

router.get('/shop/mx/products/iphone-12/pantalla-6-1-pulgadas-128gb-negro', (req, res) => {
    res.render('shop/mx/products/iphone-12/pantalla-6-1-pulgadas-128gb-negro', { title: 'iPhone 12'});
});

router.get('/shop/mx/products/iphone-12/pantalla-6-1-pulgadas-256gb-negro', (req, res) => {
    res.render('shop/mx/products/iphone-12/pantalla-6-1-pulgadas-256gb-negro', { title: 'iPhone 12'});
});

router.get('/shop/mx/products/iphone-12/pantalla-6-1-pulgadas-64gb-azul', (req, res) => {
    res.render('shop/mx/products/iphone-12/pantalla-6-1-pulgadas-64gb-azul', { title: 'iPhone 12'});
});

router.get('/shop/mx/products/iphone-12/pantalla-5-4-pulgadas-64gb-blanco', (req, res) => {
    res.render('shop/mx/products/iphone-12/pantalla-5-4-pulgadas-64gb-blanco', { title: 'iPhone 12 mini'});
});

router.get('/shop/mx/products/iphone-12/pantalla-5-4-pulgadas-64gb-negro', (req, res) => {
    res.render('shop/mx/products/iphone-12/pantalla-5-4-pulgadas-64gb-negro', { title: 'iPhone 12 mini'});
});

router.get('/shop/mx/products/iphone-12/pantalla-5-4-pulgadas-128gb-negro', (req, res) => {
    res.render('shop/mx/products/iphone-12/pantalla-5-4-pulgadas-128gb-negro', { title: 'iPhone 12 mini'});
});

router.get('/shop/mx/products/iphone-12/pantalla-5-4-pulgadas-64gb-azul', (req, res) => {
    res.render('shop/mx/products/iphone-12/pantalla-5-4-pulgadas-64gb-azul', { title: 'iPhone 12 mini'});
});

router.get('/shop/mx/products/sony-wh-1000xm4', (req, res) => {
    res.render('shop/mx/products/sony-wh-1000xm4', { title: 'Sony WH-1000XM4'});
});

// ARCADE GAMES

router.get('/shop/mx/arcade/games/visage', (req, res) => {
    res.render('shop/mx/arcade/games/visage', { title: 'Visage'});
});


// ARCADE SUITES PARKS

router.get('/shop/mx/arcade/suite', (req, res) => {
    res.render('shop/mx/arcade/suite', { title: 'Arcade Suites'});
});

router.get('/shop/mx/arcade/suite/nintendo', (req, res) => {
    res.render('shop/mx/arcade/suite/nintendo', { title: 'Nintendo Arcade'});
});

// SUITES PARKS 

router.get('/shop/mx/suite/', (req, res) => {
    res.render('shop/mx/suite/', { title: 'Suites'});
}); 

router.get('/shop/mx/suite/dune-market', (req, res) => {
    res.render('shop/mx/suite/dune-market', { title: 'Dune Market'});
}); 

router.get('/shop/mx/suite/puma', (req, res) => {
    res.render('shop/mx/suite/puma', { title: 'Puma'});
}); 

// PORFILE'S COMPANIES 

router.get('/shop/mx/profile/lacoste', (req, res) => {
    res.render('shop/mx/profile/lacoste', { title: 'Lacoste'});
}); 

module.exports = router;