import mongoose from 'mongoose';

var phieubaogiaSchema = new mongoose.Schema({
    PhieuTiepNhan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PhieuTiepNhan"
    },
    NgayLap: String,
    TongTien: Number
},{
    versionKey: false
})

const PhieuBaoGia = mongoose.model("PhieuBaoGia", phieubaogiaSchema)

export default PhieuBaoGia