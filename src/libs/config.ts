import session from "express-session";
import { app, store } from "../app";

export const MORGAN_FORMAT = `:method :url :response-time [:status]\n`;
