import User from "../model/user.js";

//1st Condition
export const User1Controller = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        { income: { $lt: "$5" } },
        { $or: [{ car: "BMW" }, { car: "Mercedes-Benz" }] },
      ],
    }).exec();

    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//2nd Condition
export const User2Controller = async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $match: {
          $and: [
            { gender: "Male" },
            { $expr: { $gt: [{ $toInt: "$phone_price" }, 10000] } },
          ],
        },
      },
    ]).exec();

    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//3rd Condition
export const User3Controller = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        { last_name: /^M/i },
        { quote: { $gt: 15 } },
        { email: { $regex: /M/i } },
      ],
    }).exec();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//4th Condition

export const User4Controller = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        { car: { $in: ["BMW", "Mercedes-Benz", "Audi"] } },
        { email: { $not: /\d/ } },
      ],
    }).exec();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//5th Condition
export const User5Controller = async (req, res) => {
  try {
    const cities = await User.aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          total_income: {
            $sum: { $toDouble: { $substr: ["$income", 1, -1] } },
          },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
      {
        $project: {
          _id: 0,
          city: "$_id",
          count: 1,
          average_income: { $divide: ["$total_income", "$count"] },
        },
      },
    ]).exec();
    res.json(cities);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
