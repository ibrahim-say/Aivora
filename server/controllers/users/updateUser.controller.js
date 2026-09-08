// const User = require("../../models/User");
// const AppError = require("../../utils/appError");
// const updateUser = async (req, res,next) => {
//   try {
//     const { id } = req.params;
//     const allowedFields = ["name", "email"];

//     const updates = {};

//     allowedFields.forEach((field) => {
//       if (req.body[field] !== undefined) {
//         updates[field] = req.body[field];
//       }
//     });

//     if (Object.keys(updates).length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "No valid fields to update"
//       });
//     }

//     if (updates.email) {
//       const existingUser = await User.findOne({ email: updates.email });
//       if (existingUser && existingUser._id.toString() !== id) {
//         return res.status(400).json({
//           success: false,
//           message: "Email already exists"
//         });
//       }
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       id,
//       updates,
//       { returnDocument: "after", runValidators: true }
//     ).select("-password");

//     if (!updatedUser) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       user: updatedUser
//     });

//   } catch (error) {
//     if (error.code === 11000) {
//       return res.status(400).json({
//         success: false,
//         message: "Email already exists"
//       });
//     }

//   next(new AppError( "خطاء في تحديث المستخدم", 500));
//   }
// };

// module.exports = updateUser;

