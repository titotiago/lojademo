<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.ibb.co/cr8DxZw/logo2.png" alt="Project logo"></a>
</p>

<h3 align="center">React E-commerce</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/titotiago/lojademo/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
E-commerce mock application used to train my dev skills.

## 🏁 Getting Started <a name = "getting_started"></a>
Run ``git clone`` --branch demo https://github.com/titotiago/lojademo.git.

### Prerequisites

```
Node.js
```

### Installing

In root folder run
```
npm install
```
```
npm start
```

In '/api/' run
```
npm start
```

## 🎈 Usage <a name="usage"></a>
Add your mongoDB credentials in line 24 at 'api/app.js/'
Api Routes:
`GET`
localhost:5000/products/  : Returns all available products.

`GET`
localhost:5000/product/{key} : Returns a specific product.

`DELETE`
localhost:5000/product/{key} : Deletes a specific product.

`POST`
localhost:5000/products/ : Adds product. (Accepts array)

Post product request format:
[{

    title: String,
    
    description: String,
    
    value: String,
    
    key: String,
    
    imgUrl: String,
    
    Stock: String

}]

## ⛏️ Built Using <a name = "built_using"></a>
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [ReactJs](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>
- [@titotiago](https://github.com/titotiago)

## Demo & screenshots
![Video](https://media.giphy.com/media/HQaYrMC5otvS6A4CYH/giphy.gif)

![Screenshot3](https://i.ibb.co/G9Wf11C/Sem-t-tulo3.png)
