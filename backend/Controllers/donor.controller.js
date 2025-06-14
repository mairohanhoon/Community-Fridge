import jwt from "jsonwebtoken";
import DonationModel from "../Models/donation.model.js";

const registerFood = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const donatedFoodList = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const donatedList = await DonationModel.find({ donor: decodedToken._id });
    return res.status(200).json({
      message: "Successfully fetched all the donations",
      donatedList,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Donation food List Failed", success: false });
  }
};

const allDonatedFood = async (req, res) => {
  try {
    
  } catch (error) {
    res
      .status(500)
      .json({ message: "All Donation food List Failed", success: false });
  }
};

export { registerFood, donatedFoodList };
