const { User } = require("../models");

exports.allProfiles = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

exports.oneProfile = async (req, res) => {

};

exports.modifyProfile = async (req, res) => {
    
}

exports.deleteProfile = async (req, res) => {

};