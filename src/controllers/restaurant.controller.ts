import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Response, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.getLogin = (req: Response, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error,getLogin:", err);
  }
};

restaurantController.getSignup = (req: Response, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, Signup:", err);
  }
};

export default restaurantController;
