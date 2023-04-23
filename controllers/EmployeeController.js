const { response } = require('express')
const Employee = require('../models/Employee')

const Bandhni = require('../models/bandhani')
const Festive= require('../models/festive_wear')
const Banarasi= require('../models/banarasi_silk')
const Chenderi =require('../models/chenderi')
const Prited  = require('../models/prited')
const Pochampally=require('../models/pochampally')



const { json } = require('body-parser')
const sharp = require('sharp');
const fs = require('fs');


//Show the list of Employees

const index = (req, res, next) => {
    Employee.find()
    .then(response => {
    
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!'
        })
    })
}

const pritediget = (req, res, next) => {
    Prited.find()
    .then(response => {
    
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!'
        })
    })
}


const festivewearget = (req, res, next) => {
    Festive.find()
    .then(response => {
    
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!'
        })
    })
}

//C:\Users\user\Documents\newq\uploads\1682124828022.png

const chenderiget = (req, res, next) => {
    Chenderi.find()
    .then(response => {
    
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!'
        })
    })
}




const bandhaniget = (req, res, next) => {
    Bandhni.find()
    .then(response => {
    
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!'
        })
    })
}





const pochampallyget = (req, res, next) => {
    Bandhni.find()
    .then(response => {
    
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!'
        })
    })
}

const get = (req, res, next) => {
    Employee.find()
    .then(response => {
    
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!'
        })
    })
}








//Show Single Employee
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID )
    .then(response => {
    
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!'
        })
    })
}


//add new employee

// const store = (req, res, next) => {
//     let  employee = new Employee({
//          name: req.body.name,
//         price: req.body.price,
//         //qty: req.body.qty,
//         dis: req.body.dis,
//         avatar: req.file.path
//     })


//     function uploadAvatar(req, file) {
//   // code here
//             if (req, file) {

//      employee.avatar = req.file.path
//  }
// }

//     employee.save()
//         .then(response => {
//             res.json({
//             message: 'Employee Added'
//         })
//         })
//         .catch(error => {
//             res, json({
//             message:'An error Occured!'
//         })
//     })

// }

const store = (req, res, next) => {
    let  employee = new Employee({
         name: req.body.name,
        price: req.body.price,
        //qty: req.body.qty,
        dis: req.body.dis,
        avatar: req.file.path
    })


  
        // Save the employee object to the database
        employee.save()
            .then(response => {
                res.json({
                    message: 'Employee added'
                });
            })
            .catch(error => {
                res.json({
                    message: 'An error occurred'
                });
            });
    }




const festivewear = (req, res, next) => {
    let  employee = new Festive({
         name: req.body.name,
        price: req.body.price,
        //qty: req.body.qty,
        dis: req.body.dis,
        avatar: req.file.path
    })


    
        employee.save()
            .then(response => {
                res.json({
                    message: 'Employee added'
                });
            })
            .catch(error => {
                res.json({
                    message: 'An error occurred'
                });
            });
    }


// const pochampally = (req, res, next) => {
//     let  employee = new Pochampally({
//          name: req.body.name,
//         price: req.body.price,
//         //qty: req.body.qty,
//         dis: req.body.dis,
//         avatar: null
//     })


//     sharp(req.file.path)
//     .resize(160, 160, { fit: 'cover' })
//     .toBuffer()
//     .then(buffer => {
//         // Save the resized image to disk
//         fs.writeFile(req.file.path, buffer, err => {
//             if (err) {
//                 console.error(err);
//             }
//         });
//         // Set the path of the resized image to the avatar property of the employee object
//         employee.avatar = req.file.path;
//         // Save the employee object to the database
//         employee.save()
//             .then(response => {
//                 res.json({
//                     message: 'Employee added'
//                 });
//             })
//             .catch(error => {
//                 res.json({
//                     message: 'An error occurred'
//                 });
//             });
//     });
// }

const banarasi = (req, res, next) => {
    let  employee = new Banarasi({
         name: req.body.name,
        price: req.body.price,
        //qty: req.body.qty,
        dis: req.body.dis,
        avatar: req.file.path
    })


   
        // Set the path of the resized image to the avatar property of the employee object
       // employee.avatar = req.file.path;
        // Save the employee object to the database
        employee.save()
            .then(response => {
                res.json({
                    message: 'Employee added'
                });
            })
            .catch(error => {
                res.json({
                    message: 'An error occurred'
                });
            });
    }


const prited = (req, res, next) => {
    let  employee = new Prited({
         name: req.body.name,
        price: req.body.price,
        //qty: req.body.qty,
        dis: req.body.dis,
        avatar: req.file.path
    })


   
        // Set the path of the resized image to the avatar property of the employee object
        //employee.avatar = req.file.path;
        // Save the employee object to the database
        employee.save()
            .then(response => {
                res.json({
                    message: 'Employee added'
                });
            })
            .catch(error => {
                res.json({
                    message: 'An error occurred'
                });
            });
    }

const pochampally = (req, res, next) => {
    let  employee = new Pochampally({
         name: req.body.name,
        price: req.body.price,
        //qty: req.body.qty,
        dis: req.body.dis,
        avatar: req.file.path
    })


        // Save the employee object to the database
        employee.save()
            .then(response => {
                res.json({
                    message: 'Employee added'
                });
            })
            .catch(error => {
                res.json({
                    message: 'An error occurred'
                });
            });
    }


const chenderi = (req, res, next) => {
    let  employee = new Chenderi({
         name: req.body.name,
        price: req.body.price,
        //qty: req.body.qty,
        dis: req.body.dis,
        avatar: req.file.path
    })


   
        // Save the employee object to the database
        employee.save()
            .then(response => {
                res.json({
                    message: 'Employee added'
                });
            })
            .catch(error => {
                res.json({
                    message: 'An error occurred'
                });
            });
    }


const bandhani = (req, res, next) => {
    let  employee = new Bandhni({
         name: req.body.name,
        price: req.body.price,
        //qty: req.body.qty,
        dis: req.body.dis,
        avatar: req.file.path
    })


    
        // Set the path of the resized image to the avatar property of the employee object
       // employee.avatar = req.file.path;
        // Save the employee object to the database
        employee.save()
            .then(response => {
                res.json({
                    message: 'Employee added'
                });
            })
            .catch(error => {
                res.json({
                    message: 'An error occurred'
                });
            });
    }




//update an employee

const update = (req, res, next) => {
    let employeeID = req.body.id
    
    let updatedData = {
     
         name: req.body.name,
         price: req.body.price
  
    }

    Bandhni.findByIdAndUpdate(employeeID, { $set: updatedData })
        .then(() => {
        
            res.json({
                message:'Employee updated'
            })
        })
        .catch(error => {
            res.json({
            message: 'error Occured!'
        })
    })

  
}


//delete an employee
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID
    Bandhni.findOneAndRemove(employeeID )
    .then(() => {
    
        res.json({
            message:'Employee delted'
        })
    })
        .catch(error => {
            res.json({
            message: 'An error Occured!'
        })
    })
}



module.exports = {
    pochampallyget,index,show,store,update,destroy,bandhani,festivewear,banarasi,chenderi,pochampally,prited,bandhaniget,festivewearget,chenderiget,pritediget
}