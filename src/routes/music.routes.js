import express from 'express';
import musicController from '../controller/music.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

import multer from 'multer';

const upload = multer({
    storage : multer.memoryStorage(),
});

const router = express.Router();

router.post('/upload', authMiddleware.authArtist, upload.single('music'), musicController.createMusic);
router.post('/album', authMiddleware.authArtist, musicController.createAlbum);
router.get('/', authMiddleware.authUser, musicController.getAllMusic);
router.get('/album', authMiddleware.authUser, musicController.getAllAlbum);
router.get('/album/:albumId', authMiddleware.authUser, musicController.getAlbumById);


export default router;