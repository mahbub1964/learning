require("dotenv").config(); //console.log("DB_USER:", process.env.DB_USER);

//import mongoose from "mongoose";
const mongoose = require("mongoose"), Company = require("./models/company");

const databaseUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}` +
  `@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;
mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.log(`Database connection error ${err.message}`));
  //.finally(() => process.exit());

const name = "Justified Company Limited", query = {name: name};
const today = new Date(); console.log("Mongoose:: today:", today);

Company.find(query)
.then(companies => {
  console.log("Found Companies:", companies);
  companies.forEach(company => {
    Company.findById(company._id)
    .then(company => { console.log("Editing company:", company);
      company.mtEnd = today.toString(); company.save();
      console.log("Successfully updated:", company);
    })
    .catch(err => console.log(err));
    
    // console.log("Deleting company:: _id:", company._id); //company.remove();
    // Company.findByIdAndDelete(company)
    // .then(company => console.log("Deletion successfull:", company))
    // .catch(err => console.log(err));
  });
  //-------------------------------------------------------------------------------------------------------//
  const defaultAddress = "23/D/1, Box Culvert Road, Free School Street, Panthapath, Dhaka-1205, Bangladesh.";
  const company = {
    name: name, yrendDate:
    `6/30/${today.getMonth()<6?today.getFullYear()-1:today.getFullYear()}`,
    address: defaultAddress, statCoi: "N", statDfin: "N", statLfin: "N", statMoa: "N",
    statEtin: "N", statTlic: "N",statBin:"N/A",statFxii:"N",statSchx:"N",statVcrd:"N",
    statF23b: "N", statAbst: "N",
    mtStart: today.toString(), mtEnd: today.toString(), mtDuration: "0 : 00",
    rqDays: "13", // `${getReqDays(allocations, mgLtrAllocs, fsDftAllocs)}`, // "7"
    rqTime: "", urgency: "", hrDelivery: "",
    period: "for the year ended", fsType: "FS_(0)_Op",
    email: "", mobile: "", bzCard: "Y", revenue: "25030000", revnLyr: null,
    tAssets: "20000000", tAsstLy: null, borrows: "6000000", borrwLy: null,
    profLos: "-2500000", prLosLy: null, rs1Name: "Rouf", rs2Name: "Ayasa", rs3Name: "Mitu",
    rs4Name: "Rupa", rsMnames: "Ayasa,Mitu",
    agreed: true, qLnItems: "15", qBnAccts: "1", qLnAccts: "1", corrErrs: true, // "Y"
    qToDToC: "3", qSbTests: "29", mangLetr: false, fsDfBnSt: false, // "N"
    efficiency: "50",
  }; //console.log("company:", company);
  
  // Company.create(company)
  // .then(company => {
  //   console.log("NEW COMPANY:", company);
  // })
  // .catch(err => console.log(err));
  //-------------------------------------------------------------------------------------------------------//
})
.catch(err => console.log(err));

