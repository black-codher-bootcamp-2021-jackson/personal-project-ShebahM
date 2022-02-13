const mongoose = require("mongoose");
const Health = mongoose.model("userdata");

const healthdataRoutes = (app) => {
  app.get(`/healthdata`, async (req, res) => {
    const userdata = await Health.find();

    return res.status(200).send(userdata);
  });

  app.post('/healthdata', async (req, res) => {

    const newData = new Health({
      username: req.body.username,
      bloodpressure: req.body.bloodpressure,
      bloodsugar: req.body.bloodsugar
    })

    newData.save();

    return res.status(201).send("User data succesfully created");
  })

  app.post(`/healthdata`, async (req, res) => {
    const userdata = await Health.create(req.body);

    return res.status(201).send({
      error: false,
      userdata,
    });
  });

  app.patch(`/healthdata/:id`, async (req, res) => {
    const { id } = req.params;

    const userdata = await Health.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      userdata,
    });
  });

  app.delete(`/healthdata/:id`, async (req, res) => {
    const { id } = req.params;

    const userdata = await Health.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      userdata,
    });
  });
};

module.exports = healthdataRoutes;
