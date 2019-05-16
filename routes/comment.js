const express = require('express');
const db = require('../data/knexConfig');

const commentRoute = express.Router();

commentRoute.get('/', async (req, res) => {
    console.log(req.params)
    try {
        const comments = await db('comment');
        console.log(comments)
        res.status(200).json({comments})
    } catch (error) {
        res.status(500).json({error})   
    }
})

commentRoute.post('/', async (req,res) => {
    const comment = req.body;
    try {
        const addedComment = await db('comment').insert(comment);
        res.status(200).json(addedComment);
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports = commentRoute;