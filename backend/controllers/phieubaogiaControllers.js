import asyncHandler from "express-async-handler";
import PhieuBaoGia from "../models/phieubaogiaSchema.js";

const getPhieuBaoGiaList = asyncHandler(async (req, res) => {
    const phieubaogias = await PhieuBaoGia.find({});
    res.json(phieubaogias);
});

// const getUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.Id);
//     res.json(user);
// });

// const authUser = asyncHandler(async (req, res) => {
//     const user=await User.findOne({
//         TenTK:req.query.email,
//         MK:req.query.password
//     })
//     res.json(user)
// });
export { getPhieuBaoGiaList };
