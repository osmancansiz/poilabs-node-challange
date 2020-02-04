const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PointsSchema = new Schema({
  title: {
    type: String,
    maxlength: 30,
    minlength: 1
  },
  description: {
    type: String,
    maxlength: 30,
    minlength: 1
  },
  filters: {
    pointType: [
      {
        type: String
      }
    ]
  },
  location: {
    type: {
      type: String
    },
    geometry: {
      type: {
        type: String
      },
      coordinates: [
        {
          type: String
        }
      ]
    },
    properties: {
      floorLevel: {
        type: String
      },
      shopCenterPoint: [
        {
          type: String
        }
      ]
    }
  },
  navigation: {
    segments: [
      {
        id: {
          type: String
        },
        weight: {
          type: Number
        },
        mapWeight: {
          type: Number
        }
      }
    ],
    properties: {
      isVisibleOnList: {
        type: String
      }
    }
  }
});

module.exports = mongoose.model("points", PointsSchema);
