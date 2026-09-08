// const User = require("../../models/User");
// const AppError = require("../../utils/appError");
// const getAllUsers = async (req, res,next) => {
//   try {
//     const users = await User.find().select("-password -v");

//     res.status(200).json({
//       success: true,
//       users
//     });

//   } catch (error) {
//   next(new AppError( "خطاء في جلب المستخدمين", 500));
//   }
// };

// module.exports = getAllUsers;