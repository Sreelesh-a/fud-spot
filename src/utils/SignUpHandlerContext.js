import { useContext, createContext, useState } from "react";

const [showSigup, setShowSignup] = useState(false);

export const SignUpHandlerContext = createContext({});
