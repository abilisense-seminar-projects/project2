const { getAlerts, getnewAlerts } = require("../services/alert.services");

const getAllertsController = async (req, res) => {
  try {
    const alerts = await getAlerts();
    res.send(alerts);
  } catch (error) {
    res.status(500).send("An error occurred");
    console.error(error);
  }
};

const getnewAlertController = async (req, res) => {
  try {
    const id = req.param.lastAlertID;
    console.log(id)

    if (!id) {
      res.status(404).send("id not valid");
    }
    const newAlerts = await getnewAlerts();
    if (newAlerts)
      res.send(new AlertAnswer({ isUpdate: true, response: newAlerts }));
    res.send({ isUpdate: false });
  } catch (error) {
    res.status(500).send("An error occurred");
    console.error(error);
  }
};
module.exports = { getnewAlertController, getAllertsController };
