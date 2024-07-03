// const express = require("express");
// const { createProxyMiddleware } = require("http-proxy-middleware");
// const path = require("path");
// const cors = require("cors");
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// // import { SWIGGY_API_LINK } from "./src/utils/constants";

// const app = express();

// // Proxy configuration for external API with logging
// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "https://www.swiggy.com/", // Base URL of the external API
//     changeOrigin: true,
//     pathRewrite: {
//       "^/api": "/dapi/restaurants/list/v5",
//     },
//     onProxyReq: (proxyReq, req, res) => {
//       console.log("Proxying request:", req.method, req.url);
//     },
//     onProxyRes: (proxyRes, req, res) => {
//       console.log("Received response from target:", proxyRes.statusCode);
//     },
//     onError: (err, req, res) => {
//       console.error("Proxy error:", err);
//       res.status(500).send("Proxy error");
//     },
//     secure: false,
//   })
// );

// // Proxy requests to the external API

// // Serve static files from Parcel's output directory
// app.use(express.static(path.join(__dirname, "dist")));

// // Redirect all other requests to the index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
