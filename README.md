## ONE DROP SHOP
Application running on the MERN stack

## Table of Contents
* [Description](#description)
* [File Structure](#file-structure)
* [Requirements](#requirements)
* [Quick Start](#quick-start)
* [Usage](#usage)
* [Bugs](#bugs)


## Description
**The application**

Will help us to:

1. Create a buyer or seller profile
2. Manage (create, update, destroy, etc) via the UI
3. Store products to mongodb server

In this case, we want to be able to manage the objects of our application:
#As Admin/Seller
* Create a new product
* Retrieve an product from a database etc…
* Update attributes of the product
* Delete the product
* Viewing Orders
* Changing Order Status
* Viewing Total Earnings
* Viewing Category Based Earnings (on Graph)

#AS Consumer
* Create your own cart
* Retrieve an product from a database
* Update the products on you cart
* Delete the product on your cart

* The application will automatically do the stats of your cart.

## File Structure

These are the files with the custom funtions and system calls, each one contains a brief description:



|   ***File***    |  ***Description***                   |
|---------------|---------------------------------------|
|  #REACT.JS                                     |  
|  [`main`](index.js)	|  program file file	|
|  [`Header`](/header.js) |  Contains all the widget and app bars |
|  [`constans`](.env) |  contains global files to be used repeatedly |
|  [`menu`](/menu.js) | contains menu and product descriptions view |
|  [`product`](./newproduct.js) |  admin can  log innew products |
|  [`registration`](/login.js&/signup.js) |  admin auth and provider services|
|  [`utils`](/imageconverter) |  utilities folder contains image converter |
|  [`views`] |  Contains all the pages to be viewed in tha app |

|  # NODE.JS (SERVER)|
|  [`Index`](./index.js) |  run server program |
|  [`middleware`](/auth/admin) |  Contains middleware APIs |
|  [`models`](/product/user) |  product and user schema |
|  [`routes`](/auth/admin) |  authentication and admin routes |
|  [`utils`](/encrypt) |  encryption for senstitive data	       |
|  [`README.md`](./README.md) | README.md file |

## Requirements
After cloning this repository, migrate to ```one-drop``` folder. Then, follow the following steps:
- install react.js and node.js
- Create MongoDB Project & Cluster
- Click on Connect, follow the process where you will get the uri.- Replace the MongoDB uri with yours in ```server/index.js```.
- create ```/.env``` file, create "String uri = IP Address". 


## Quick Start
Then run the following commands to run your app:

### Server Side
```bash
  cd one-back
  npm install
  npm run dev (for continuous development)
  OR
  npm start (to run script 1 time)
```

### Client Side
```bash
cd one-front
npm init
npm i
npm start
```

## Tech Used
**Server side**: Node.js, Express, Mongoose, MongoDB

**Client side**: React.js, Tailwind.css

# CodeSmith
* Richard Kibet


