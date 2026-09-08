
// const User = require("../../models/User");
// const bcrypt = require("bcryptjs");
// const  AppError = require("../../utils/appError");
// const changePassword = async (req, res, next) => {
//     try {
//         const { oldPassword, newPassword } = req.body;

//         // get user from req.user.id
//         const user = await User.findById(req.user.id);

//         // check old password
//         const isMatch = await bcrypt.compare(oldPassword, user.password);

//         if (!isMatch) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Old password is incorrect",
//             });
//         }

//         // hash new password
//         const hashedPassword = await bcrypt.hash(newPassword, 10);  

//         // save user        
//         user.password = hashedPassword;
//         await user.save();

//         res.status(200).json({
//             success: true,
//             message: "Password changed successfully",
//         });

//     } catch (error) {
//      next(new AppError( "خطاء في تغيير كلمة المرور", 500));
//     }
// };

// module.exports = changePassword;