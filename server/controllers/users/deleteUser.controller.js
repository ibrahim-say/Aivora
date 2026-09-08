// const User = require("../../models/User");
// const AppError = require("../../utils/appError");
// const deleteUser = async (req, res,next) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findByIdAndDelete(id);

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "User deleted successfully"
//     });

//   } catch (error) {
//  next(new AppError( "خطاء في حذف المستخدم", 500));
//   }
// };

// module.exports = deleteUser;