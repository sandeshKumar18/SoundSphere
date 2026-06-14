import musicModel from "../models/music.model.js";
import albumModel from "../models/album.model.js";
import uploadFile from "../services/storage.services.js";
import jwt from "jsonwebtoken";

async function createMusic(req, res) {

    

    const { title } = req.body;
    const file = req.file;
    // console.log("file", file);

    const result = await uploadFile(file.buffer.toString("base64"));
    // console.log("result", result);

    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: req.user.id,
    });

    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
  
}

async function createAlbum(req, res) {
  const token = req.cookies.token;

  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    musics: musics,
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Album created successfully",
    album: {
      id: album._id,
      title: album.title,
      artist: album.artist,
      musics: album.musics,
    },
  });
}


async function getAllMusic(req, res) {
  
    const musics = await musicModel
            .find()
            .skip(2)        //  for skip the first 2 records
            .limit(20)      // for limit the records to 20
            .populate('artist', 'username email');

    res.status(200).json({
        message : "All music fetched successfully",
        music : musics
    });
}

async function getAllAlbum(req, res) {
    
    const albums = await albumModel.find().select('title artist').populate('artist', 'username email');
    // console.log(albums);

    res.status(200).json({
        message : "All albums fetched successfully",
        albums : albums
    });
}


async function getAlbumById(req, res) {
    const { albumId } = req.params;

    const album = await albumModel.findById(albumId).populate('musics', 'title uri').populate('artist', 'username email');

    return res.status(200).json({
        message : "Album fetched successfully",
        album : album
    });
}

    
export default { createMusic, createAlbum , getAllMusic, getAllAlbum, getAlbumById };
