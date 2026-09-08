// const User = require("../../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const AppError = require("../../utils/appError");
// const register = async (req, res,next) => {
//   try {
//     const { name, email, password } = req.body;

//     // check if user exists
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: "Email already exists"
//       });
//     }

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // create user
//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword
//     });

//         // create token
//         const token = jwt.sign(
//           { id: user._id },
//           process.env.JWT_SECRET,
//           { expiresIn: "7d" }
//         );

//     res.status(201).json({
//       success: true,
//       message: "User created successfully",
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email
//       }
//     });

//   } catch (error) {
//   next(new AppError( "خطاء في التسجيل", 500));
//   }
// };

// module.exports = register;