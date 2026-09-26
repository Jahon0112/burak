import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Response, res: Response) => {
  try {
    console.log("goHome");
    //LOGIC
    //SERVICE MODEL
    //...
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restaurantController.getLogin = (req: Response, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error,getLogin:", err);
  }
};

restaurantController.getSignup = (req: Response, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, Signup:", err);
  }
};

restaurantController.processLogin = (req: Response, res: Response) => {
  try {
    console.log("processLogin");
    res.send("DONE");
  } catch (err) {
    console.log("Error, processLogin:", err);
  }
};

restaurantController.processSignup = (req: Response, res: Response) => {
  try {
    console.log("processSignup");
    res.send("DONE");
  } catch (err) {
    console.log("Error, processSignup:", err);
  }
};

export default restaurantController;
