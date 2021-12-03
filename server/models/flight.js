import mongoose from "mongoose";

const flightSchema = mongoose.Schema({
    pilot: String,
    sortiSiraNo: Number,
    ucusSayisi: Number,
    ucusTipi: String,
    ucusSuresi: String,
    ucusTarih: String,
    kanat: String,
    harness: String,
    etkinlik: String,
    pilotNo: Number,
    kalkisTürü: String,
    kalkisSaati: String,
    kalkisSorumlusu: String,
    inisSorumlusu: String,
    degerlendirmeEgitmen: String,
    degerlendirmePilot: String,
    createdAt:{
        type: Date,
        default: new Date()
    }    
});

const Flight = mongoose.model("Flight", flightSchema);

export default Flight;