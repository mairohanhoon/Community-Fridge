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
  const donation = await DonationModel({donor, foodName, quantity, expiryDate, location});
  
};
