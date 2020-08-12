const express = require('express');

var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

router.get('/',(req,res)=>{
 res.render('student/addOrEdit',{ viewTitle : "Insert Employee"});
});

router.post('/', (req,res)=>{
    if(req.body._id=='')
    {
        InsertRecord(req,res);
    }
    else{
        updateRecord(req,res);
    }
});


function InsertRecord(req,res){
    var student = new Student();
    student.fullname = req.body.fullname;
    student.lastname = req.body.lastname;
    student.mobile = req.body.mobile;
    student.city = req.body.city;
    student.save((err,doc)=>{
        if(!err){
            res.redirect('student/list');
        }
        else{
            console.log('Error in insert' + err);
        }
    })
}

function updateRecord(req,res){
    Student.findByIdAndUpdate({_id : req.body._id}, req.body, { new : true}, (err,doc)=>{
        if(!err)
        {
            res.redirect('student/list');
        }
        else{
            console.log('Update in Error' + err);
        }
    })
}
router.get('/delete/:id', (req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err)
        {
            res.redirect('/student/list');
        }
        else{
            console.log("Error in Delete" + err);
        }
    })
});

router.get('/list', (req,res)=>{
    
    Student.find((err,docs)=>{
        if(!err){
            res.render("student/list",{
                list:docs
            }
            );
            console.log(docs);
            
        }
        else{
            console.log("View in Error" + err);
        }
    });
});

router.get('/:id',(req,res)=>{
    Student.findById(req.params.id,(err,docs)=>{
        if(!err)
        {
            res.render('student/addOrEdit',{ viewTitle : "Update Student", student : docs});
        }
    })
})


module.exports = router