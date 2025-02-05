const Reservation = require("../Models/Reservation").Reservation

const AddReservation = async(req,res)=>{


    let reservation = await Reservation.find({});
    let id;
    if(reservation.length >0){
        let last_reserve = reservation.slice(-1);
        let last_array = last_reserve[0];
        id=last_array.id +1
    }else{
        id=1
    }

    const Reservations = new Reservation({
        id:id,
        people:req.body.people,
        location:req.body.location,
        gender:req.body.gender,
        date:req.body.date
    });

    await Reservations.save();
    console.log("Reservation has been added",Reservations);
    res.json({
        success:true,
        id:req.body.id
    });
    
};

const DeleteReservation=async(req,res)=>{
    
    await Reservation.deleteOne({id:req.params.id})
    console.log("Reservation has been removed");
    res.json({success:true,status:"Reservstion deleted successiful"})
    
};

const GetAll=async(req,res)=>{
    let reservations = await Reservation.find({});
    console.log("All products have been fetched!");
    res.send(reservations);
    
};

module.exports = {AddReservation,DeleteReservation,GetAll}