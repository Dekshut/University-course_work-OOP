import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './ColorFilter.scss'
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const requestFetch = (url) => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Smth gone wrong')
      e.data = error
      throw e
    })
  });
}

function ColorFilter() {
  const [allColors, setAllColors] = React.useState([]);
  const [color, setColor] = React.useState('');
  const [colorInput, setColorInput] = React.useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const url = 'http://localhost:8080/api/color';

    requestFetch(url)
      .then(data => {
        // console.log(data)
        setAllColors(data)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])


  return (
    <div className="filter__item filter-color">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 className="filter__title">Color Filter</h3>
        <AddIcon onClick={handleOpen} style={{ color: '#fff', background: '#34c3ff', borderRadius: 5, cursor: 'pointer' }} />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add new color
            </Typography>
            <div className='color-pallete'>
              <input onInput={(e) => setColorInput(e.target.value)} type='color' />
              <ArrowForwardIosIcon />
              <div>{colorInput || 'Select color!'}</div>
            </div>

            <TextField
              fullWidth
              style={{ marginBottom: 30 }}
              label="Color Name"
              variant='outlined'
            />

            <Button variant="contained" type='submit'>Confirm</Button>
          </Box>
        </form>
      </Modal>

      <FormControl sx={{ m: 1, minWidth: 300, margin: 0 }} >
        <InputLabel id="demo-select-small">Color</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={color}
          label="Color"
          onChange={handleChange}
          MenuProps={
            {
              PaperProps: {
                style: {
                  maxHeight: 200,
                  width: 200,
                },
              },
            }
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {allColors?.map(item => (
            <MenuItem value={item.id}>
              <div className='option' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='colorRect' style={{ background: item.hex }} />{item.name}
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ColorFilter;