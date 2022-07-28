import { Users } from "../models/users";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: req.attributes
    });
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
