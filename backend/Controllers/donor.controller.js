import jwt from "jsonwebtoken";
import DonationModel from "../Models/donation.model.js";

const registerFood = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const {
      foodName,
      quantity,
      expiryDate,
      address,
      latitude,
      longitude,
      foodDescription,
    } = req.body;
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
      foodDescription,
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

const donatedFood = async (req, res) => {
  try {
    const { donationId } = req.body;
    const donatedF = await DonationModel.find({ _id: donationId });
    if (donatedF.length < 1) {
      return res
        .status(402)
        .json({ message: "No Donation found of given ID", success: false });
    }
    return res.status(200).json({
      message: "Successfully fetched the donation",
      donatedF,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Donation food Failed", success: false });
  }
};
export { registerFood, donatedFoodList, donatedFood };
