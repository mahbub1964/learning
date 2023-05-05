const mongoose = require("mongoose");

// COMPANY SCHEMA
const companySchema = new mongoose.Schema({
  name: String, yrendDate: Date, address: String,
  statCoi: String, statDfin: String, statLfin: String, statMoa: String, statEtin: String,
  statTlic: String, statBin: String, statFxii: String, statSchx: String, statVcrd: String,
  statF23b: String,  statAbst: String,
  mtStart: Date, mtEnd: Date, mtDuration: String,
  rqDays: Number,  rqTime: String, urgency: String, hrDelivery: String,
  period: String,  fsType: String,
  email: String,   mobile: String, bzCard: String,              revenue: mongoose.Decimal128, revnLyr: mongoose.Decimal128,
  tAssets: mongoose.Decimal128, tAsstLy: mongoose.Decimal128,   borrows: mongoose.Decimal128, borrwLy: mongoose.Decimal128,
  profLos: mongoose.Decimal128, prLosLy: mongoose.Decimal128,   rs1Name: String, rs2Name: String, rs3Name: String,
  rs4Name: String, rsMnames: String,
  agreed: Boolean, qLnItems: Number, qBnAccts: Number, qLnAccts: Number, corrErrs: Boolean,
  qToDToC: Number, qSbTests: Number, mangLetr: Boolean, fsDfBnSt: Boolean,
  efficiency: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Company", companySchema);
