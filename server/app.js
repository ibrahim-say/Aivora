const toolRoutes = require("./routes/tools/tool.routes");
const categoryRoutes = require("./routes/categories/category.routes");
const authRoutes = require("./routes/auth/auth.routes");
const userRoutes = require("./routes/users/user.routes");
const healthRoutes = require("./routes/health/health.routes");
const subCategoryRoutes = require("./routes/subCategories/subCategory.routes");
const contactRoutes = require("./routes/contact/contact.routes");
const errorHandler = require("./middlewares/error/error.middleware");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(
  "/images",
  express.static(path.join(__dirname, "images"))
);

app.use(cors());
app.set("trust proxy", 1);
app.use(express.json());

app.use("/api/tools", toolRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/subCategories", subCategoryRoutes);

// app.use("/api/auth", authRoutes);

// app.use("/api/users", userRoutes);

app.use("/api/health", healthRoutes);

app.use("/api/contact", contactRoutes);

app.use(errorHandler);

module.exports = app;
