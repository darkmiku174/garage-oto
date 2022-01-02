import asyncHandler from "express-async-handler";
import PhuTung from "../models/phutungSchema.js";

const getPhuTungList = asyncHandler(async (req, res) => {
    const phutungs = await PhuTung.find({})
        .populate({
            path: "LoaiXe"
        })
    res.json(phutungs);
});

const addPhuTung = asyncHandler(async (req, res) => {
    const phutungs = await PhuTung.create(req.body);
    res.json(phutungs);
});
// const getUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.Id);
//     res.json(user);
// });

const getPhuTungLoaiXe = asyncHandler(async (req, res) => {
    const phutung = await PhuTung.find({
        LoaiXe: req.query.loaixe
    })
    res.json(phutung)
});
export { getPhuTungList, addPhuTung, getPhuTungLoaiXe };
