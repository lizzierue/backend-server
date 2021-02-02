const express = require ("express");
const storage = require ('node-persist');
const cors = require('cors');
const bodyParser = require ('body-parser');
const {v4: uuidv4 } = require ('uuid');
let customers = require('/customers.json')

const server = express();

(async () => {

    await storage.init({ dir: './data' });

    server.use(cors());
    server.use(express.json());
    server.use(bodyParser.json());


server.post('/signUpVoucher', async (request, response) => {
    let customer = {
        

        id : uuidv4() // serverside generated 
        firstName: request.body.firstName,
        lasttName: request.body.lastName,
        age: Number(request.body.age), //check is a number 
        dateOfBirth: request.body.dateOfBirth, 
        email: request.body.email,
        mobileNumber: Number(request.body.mobileNumber),
        medicareCard: request.body.medicareCard  // check is unique 
    }

    //stackoverflow how to generate a random number 

  function randomString(length) {
		var result           = '';
		var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-';
		var charactersLength = characters.length;
		for ( var i = 0; i < length; i++ ) {
		   result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	 }
randomString(4);
5

//     if () {
//         await storage.setItem();  //persisting the data

//         response.json({ #vouchernumber, status: 200 }); //sending the ok response
//     } else {
//         response.json({  }) // if the post code is not 4 digits it will show this error
//     }
// });

server.listen(3000, () => { console.log(`http://localhost:3000`) });
})();
