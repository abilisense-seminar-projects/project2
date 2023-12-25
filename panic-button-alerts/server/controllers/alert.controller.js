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
    const id = req.params.lastAlertID;
    console.log(id)

    if (!id) {
      res.status(404).send("id not valid");
    }
    const newAlerts = await getnewAlerts(id);
    console.log("bhbh" + newAlerts)
    const earr=[]
    if (newAlerts.length == 0) {
      console.log(newAlerts.length)
      res.send({ isUpdate: false });
    }
    else res.send({ isUpdate: true, response: newAlerts });
  } catch (error) {
    res.status(500).send("An error occurred");
    console.error(error);
  }
};
module.exports = { getnewAlertController, getAllertsController };
