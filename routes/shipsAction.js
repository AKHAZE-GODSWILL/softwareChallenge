const express = require('express');
const router = express.Router();
const request = require('request');
const MotherShip = require('../models/motherShip');
const Ship = require('../models/ship');

// End point to create a new mother ship
router.post('/createMotherShip',async(req,res) =>{ 
    const {mShipName} = req.body;

    console.log(req.body);

    //checks

    if(  !mShipName){
           return res.status(400).send({status:"400",msg:"All fields must be entered, pls try and do it again sir"});
    }



    try{
        let shipCount = await MotherShip.find();
        if(shipCount == 5){
            return res.status(200).send({status: "200",msg: "Max Limit for the mother ship reached"});
        }

        let motherShip = new MotherShip;
        motherShip.shipName = mShipName;
        motherShip = await motherShip.save();
        const uri = "http//localhost:2000/shipAction/createShip"
        for(let i = 0; i<3; i++){

            let timestamp = Date.now();
            const options = {
                method: "POST",
    
                body: JSON.stringify({
                    shipName: `ship - ${timestamp}`
                }),
    
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json, text/plain, */*"
                }
            }

            let response = await fetch(url, options);

            console.log(response);
        }

       return res.status(200).send({status: "200",msg: "Ship created successfully", motherShip});

    }catch(error){
        
        console.log(error);
        return res.status(400).send({status:"400",msg:"Some error occured"});
    }

});

// End point to create a new ship
router.post('/createShip',async(req,res) =>{ 
    const {shipName} = req.body;

    console.log(req.body);

    try{

        let timestamp = Date.now();
        let ship = new Ship;
        ship.shipName = shipName? shipName: `ship - ${timestamp}`;

        ship = await ship.save();

        res.status(200).send({status: "200",msg: "Ship created successfully", ship});

    }catch(error){
        
        console.log(error);
        return res.status(400).send({status:"400",msg:"Some error occured"});
    }

});


// End point to edit the crew members in a ship
router.post('/createShip',async(req,res) =>{ 
    const {shipName} = req.body;

    console.log(req.body);

    try{

        let timestamp = Date.now();
        let ship = new Ship;
        ship.shipName = shipName? shipName: `ship - ${timestamp}`;

        ship = await ship.save();

        res.status(200).send({status: "200",msg: "Ship created successfully", ship});

    }catch(error){
        
        console.log(error);
        return res.status(400).send({status:"400",msg:"Some error occured"});
    }

});

module.exports = router;