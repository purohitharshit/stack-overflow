import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import users from "../models/auth.js";

// export const signup = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const existinguser = await users.findOne({ email });
//     if (existinguser) {
//       return res.status(404).json({ message: "User already Exist." });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = await users.create({
//       email,
//       password: hashedPassword,
//     });
//     const token = jwt.sign(
//       { email: newUser.email, id: newUser._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.status(200).json({ result: newUser, token });
//   } catch (error) {
//     res.status(500).json("Something went worng...");
//   }
// };
// export const signup = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existinguser = await users.findOne({ email });
//     if (existinguser) {
//       return res.status(404).json({ message: "User already Exist." });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = await users.create({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     const token = jwt.sign(
//       { email: newUser.email, id: newUser._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );
//     res.status(200).json({ result: newUser, token });
//   } catch (error) {
//     res.status(500).json("Something went worng...");
//     console.log(error);
//   }
// };
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "User already Exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("Something went worng...");
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });

    console.log(existingUser);

    if (!existingUser) {
      res.status(404).json({ message: "User don't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = await jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json("Something went wrong...");
    console.log(error);
  }
};
