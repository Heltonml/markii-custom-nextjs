const Hello = (req, res) => {
    return res.status(200).json({ message: `api hello... ${process.env.ENVIRONMENT}` });
};

export default Hello;
