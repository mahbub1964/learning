import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//  @desc     Auth user & get token
//  @route    POST /api/users/login
//  @access   Public
const authUser = asyncHandler(async (req, res) => { //console.log("req.body:", req.body);
  const {email, password} = req.body; //console.log("email:",email,", password:",password);
  const user = await User.findOne({ email }); //console.log("user:", user);
  if(user && (await user.matchPassword(password))) { //console.log("Password matched.");
    generateToken(res, user._id); res.status(200).json({
      _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin
    });
  } else { res.status(401); throw new Error("Invalid email or password"); }
});

//  @desc     Register user & get token
//  @route    POST /api/users
//  @access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if(userExists) {
    res.status(400); throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password });
  if(user) {
    generateToken(res, user._id); res.status(201).json({
      _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin
    });
  } else {
    res.status(400); throw new Error("Invalid user data");
  }
  // res.send("register user");
});

//  @desc     Logout user / clear cookie
//  @route    POST /api/users/logout
//  @access   Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { // Clear JWT as HTTP-Only cookie
    httpOnly: true, // maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    expires: new Date(0)
  });
  res.status(200).json({ message: "Logged out successfully" });
  // res.send("logout user");
});

//  @desc     Get user profile
//  @route    GET /api/users/profile
//  @access   Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); //console.log("req.user:", req.user);
  //console.log("user:", user);
  if(user) {
    res.status(200).json({
      _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin
    });
  } else {
    res.status(4004); throw new Error("User not found");
  }
  // res.send("get user profile");
});

//  @desc     Update user profile
//  @route    PUT /api/users/profile
//  @access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if(user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if(req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id, name: updatedUser.name,
      email: updatedUser.email, isAdmin: updatedUser.isAdmin
    });
  } else {
    res.status(4004); throw new Error("User not found");
  }
  // res.send("update user profile");
});

//  @desc     Get users
//  @route    GET /api/users
//  @access   Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

//  @desc     Get user by ID
//  @route    GET /api/users/:id
//  @access   Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by ID");
});

//  @desc     Delete user
//  @route    DELETE /api/users/:id
//  @access   Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

//  @desc     Update user
//  @route    PUT /api/users/:id
//  @access   Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser, registerUser, logoutUser, getUserProfile, updateUserProfile,
  getUsers, getUserById, deleteUser, updateUser
};
