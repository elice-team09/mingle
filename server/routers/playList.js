const express = require("express");
const playListCreate = require("../services/playList/playCreate");
const playListDelete = require("../services/playList/playDelete");
const playListUpdate = require("../services/playList/playUpdate");  
const search = require("../utils/commons/search");
const router = express.Router();
const passport = require("passport");
const playListSchema = require("../db/models/playListModel");

// playlist 생성
router.post(
	"/",
	passport.authenticate("jwt-user", { session: false }),
	async (req, res, next) => {
		try {
			const userId = req.user.userId; // passport-jwt에서 추가한 사용자 정보
			const [success, result] = await playListCreate.playListCreate(
				req.body,
				userId
			);

			if (success) {
				res.json(result);
			} else {
				res.status(500).json(result);
			}
		} catch (error) {
			console.log(error);
			next({ code: 500 });
		}
	}
);

// playlist 조회
router.get(
	"/",
	passport.authenticate("jwt-user", { session: false }),
	async (req, res, next) => {
		try {
			// 현재 로그인한 사용자의 ObjectId 추출
			const userId = req.user.userId;
			// playListOwner 필드를 사용하여 해당 사용자가 생성한 플레이리스트를 찾기
			const playlists = await playListSchema.find({
				playListOwner: userId,
			});

			// 결과에 따라 응답을 처리
			res.status(200).json(playlists);
		} catch (error) {
			console.log(error);
			next({ code: 500 });
		}
	}
);

// DELETE: /플레이리스트-삭제/:playlistId
router.delete(
	"/:playlistId",
	passport.authenticate("jwt-user", { session: false }),
	async (req, res, next) => {
		try {
			const userId = req.user.objectId;
			const playlistId = req.params.playlistId;

			// playListDelete 함수를 사용하여 플레이리스트 삭제
			const [success, result] = await playListDelete.playListDelete(
				userId,
				playlistId
			);

			if (success) {
				res.json(result);
			} else {
				res.status(500).json(result);
			}
		} catch (error) {
			console.log(error);
			next({ code: 500 });
		}
	}
);

router.put(
	"/:playlistId",
	passport.authenticate("jwt-user", { session: false }),
	async (req, res, next) => {
		try {
			const playlistId = req.params.playlistId;
			const [success, result] = await playListUpdate.playListUpdate(
				playlistId,
				req.body
			);
			if (success) {
				res.json(result);
			} else {
				res.status(500).json(result);
			}
		} catch {
			console.log(error);
			next({ code: 500 });
		}
	}
);

module.exports = router;