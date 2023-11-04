import React, { useState } from 'react';
import { Container, Box, TextField, List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [itemCounter, setItemCounter] = useState(0);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleAdd = (e) => {
    if(inputText != '') {
      setItems([...items, {id: itemCounter, text: inputText}]);
      setItemCounter(itemCounter + 1);
    }
    setInputText('');
  };

  const handleDelete = (item) => {
    setItems(items.filter((i) => i.id != item.id));
    setItemCounter(itemCounter - 1);
  };

  return (
    <>
      <Box sx={{bgcolor: 'background.default'}}>

        <Container maxWidth="md">
          
          <Box sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>

          <Navbar />

            <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: {xs: '2rem', sm: '2%'}}}>

              <TextField id="text" label="Enter Item" value={inputText} onChange={handleInput} onKeyDown={(e) => e.key == 'Enter' && handleAdd()} sx={{width: {xs: '100%', sm: '80%'}, borderColor: 'primary.main' }}  />

              <Button variant="contained"  color="primary" onClick={handleAdd} sx={{
                width: {xs: '100%', sm: '18%'}}}>Add Item</Button>

            </Box>

            <List>
              
              {items.map((item) => {
                return (
                  <>
                    <ListItem key={item.id}>

                      <ListItemText primary={item.text} sx={{color: 'text.primary'}} />

                      <IconButton edge='end' onClick={() => handleDelete(item)}>
                        <DeleteIcon sx={{color: 'text.primary'}} />
                      </IconButton>

                    </ListItem>

                  </>
                )
              })}

            </List>

          </Box>

        </Container>
        
      </Box>
    </>
  );
};

export default App;