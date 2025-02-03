const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ToDoModel = require('./Models/Todo'); 

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://Vishal:icici%40123@cluster0.c6i0g.mongodb.net/test")
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.error("MongoDB Connection Error:", err));



app.post('/', (req, res) => {
  const { value } = req.body; 
  
  ToDoModel.create({ value: value })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.put('/:id', async (req, res) => {
  const { value } = req.body;
  const { id } = req.params;
  
  try {
    const updatedTodo = await ToDoModel.findByIdAndUpdate(id, { value }, { new: true });
   res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// app.put('/', (req, res) =>{
//   const { value } = req.body; 
  
//   ToDoModel.create({ value: value })
//     .then((result) => res.json(result))
//     .catch((error) => res.status(500).json({ error: error.message }));
// })

app.get('/', (req, res) => {
   
    const { value } = req.query;
    if (value) {
      ToDoModel.find({ value: value })
        .then((result) => res.json(result))
        .catch((error) => res.json(error));
    } else {
      ToDoModel.find()
        .then((result) => res.json(result))
        .catch((error) => res.json(error));
    }
  });

  app.delete('/:id', (req, res) => {
    const { id } = req.params;
    
    ToDoModel.findByIdAndDelete(id)
        .then(() => res.json())
        .catch(error => res.status(500).json((error)));
});

  

const live = 3001;
app.listen(live, () => {
  console.log(`Server is running on port ${live}`);
});
