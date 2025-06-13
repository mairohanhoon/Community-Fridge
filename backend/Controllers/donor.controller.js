import jwt from "jsonwebtoken";
import DonationModel from "../Models/donation.model.js";

const registerFood = async (req, res) => {
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const { foodName, quantity, expiryDate, address, latitude, longitude } =
    req.body;
  const location = {
    address,
    latitude,
    longitude,
  };
  const donor = decodedToken._id;
  const donation = await DonationModel({
    donor,
    foodName,
    quantity,
    expiryDate,
    location,
    address,
    latitude,
    longitude,
  });
  const result = await donation.save();
  if (!result) {
    return res
      .status(401)
      .json({ message: "Failed to save Donation", success: false });
  }
  return res.status(201).json({
    message: "Donation added successfully",
    success: true,
    result,
  });
};

export { registerFood };
