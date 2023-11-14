const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userNickname: {
      type: String,
      required: true,
    },
    userDescription: {
      type: String,
      default: "",
    },
    likeSong: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Songs" }],
      default: [],
    },
    likePlayList: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "PlayLists" }],
      default: [],
    },
    userSong: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Songs" }],
      default: [],
    },
    userPlayList: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "PlayLists" }],
      default: [],
    },
    userPreference: {
      type: [String],
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "user", // 몽고디비 컬렉션 이름 설정
  }
);

module.exports = mongoose.model("User", userSchema);