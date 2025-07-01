export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // only on HTTPS
    sameSite: "None", // must be "None" if using cross-site cookies
    maxAge: 7 * 24 * 60 * 60 * 1000, // optional expiry
  })
  
    .json({
      success: true,
      message,
      user,
      token,
    });
};
