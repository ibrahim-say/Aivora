const mongoose = require("mongoose");

const healthCheck = async (req, res) => {
    const dbState = mongoose.connection.readyState;
  
    const isDBConnected = dbState === 1;
  
    res.status(isDBConnected ? 200 : 503).json({
      success: isDBConnected,
      status: isDBConnected ? "UP" : "DOWN",
      database: isDBConnected ? "connected" : "disconnected",
      uptime: process.uptime()
    });
  };

  module.exports = healthCheck;