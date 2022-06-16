import { Box, Button, Modal, TextField, Typography, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import InputAmount from "../../components/InputAmount/InputAmount";
import ProductTabs from "../../components/ProductTabs/ProductTabs";
import StarRating from "../../components/StarRating/StarRating";
import img1 from '../../images/product/1.jpg';
import img2 from '../../images/product/2.jpg';
import img3 from '../../images/product/3.jpg';
import img4 from '../../images/product/4.jpg';

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

function ProductPage() {
  const [productImg, setProductImg] = useState(img1);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [category, setCategory] = useState('');
  const [photoPath, setPhotoPath] = useState('');

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main class="main">
      <Breadcrumbs title={'Product'} />

      <section class="product-page">
        <div class="container">
          <div class="product-one">
            <div class="product-one__inner">
              <div class="product-one__slide product-slide">
                <div class="product-slide__big">
                  <div class="product-slide__big-item">
                    <img src={productImg} alt="" />
                  </div>
                </div>
              </div>
              <div class="product-one__content">
                <h2 class="product-one__title">
                  Emboossed Packet Backpack
                </h2>
                <div class="product-one__box">
                  <div class="product-one__price">
                    <div class="product-one__price-new">$19.00</div>
                  </div>
                </div>
                <form style={{marginTop: 40}} class="product-one__item-form product-filter" action="#">
                  <div class="product-filter__color">
                    <div class="product-filter__color-title">Color:</div>
                    <label>
                      <input class="product-filter__color-input" type="radio" name="color" />
                      <span class="product-filter__color-chekbox">
                        <span style={{ backgroundColor: '#f49ac1' }}></span>
                      </span>
                    </label>
                    <label>
                      <input class="product-filter__color-input" type="radio" name="color" />
                      <span class="product-filter__color-chekbox">
                        <span style={{ backgroundColor: '#e5e4e1' }}></span>
                      </span>
                    </label>
                    <label>
                      <input class="product-filter__color-input" type="radio" name="color" />
                      <span class="product-filter__color-chekbox">
                        <span style={{ backgroundColor: '#ffbc41' }} ></span>
                      </span>
                    </label>
                    <label>
                      <input class="product-filter__color-input" type="radio" name="color" />
                      <span class="product-filter__color-chekbox">
                        <span style={{ backgroundColor: '#b370ff' }}></span>
                      </span>
                    </label>
                    <label>
                      <input class="product-filter__color-input" type="radio" name="color" />
                      <span class="product-filter__color-chekbox">
                        <span style={{ backgroundColor: '#6fdf9e' }}></span>
                      </span>
                    </label>
                    <label>
                      <input class="product-filter__color-input" type="radio" name="color" />
                      <span class="product-filter__color-chekbox">
                        <span style={{ backgroundColor: '#ff6060' }}></span>
                      </span>
                    </label>
                  </div>
                  <div class="product-filter__size">
                    <div class="product-filter__size-title">Size:</div>
                    <label>
                      <input class="product-filter__size-input" type="radio" name="size" />
                      <span class="product-filter__size-chekbox">S</span>
                    </label>
                    <label>
                      <input class="product-filter__size-input" type="radio" name="size" />
                      <span class="product-filter__size-chekbox">M</span>
                    </label>
                    <label>
                      <input class="product-filter__size-input" type="radio" name="size" />
                      <span class="product-filter__size-chekbox">L</span>
                    </label>
                    <label>
                      <input class="product-filter__size-input" type="radio" name="size" />
                      <span class="product-filter__size-chekbox">XS</span>
                    </label>
                    <label>
                      <input class="product-filter__size-input" type="radio" name="size" />
                      <span class="product-filter__size-chekbox">XL</span>
                    </label>
                    <label>
                      <input class="product-filter__size-input" type="radio" name="size" />
                      <span class="product-filter__size-chekbox">XXL</span>
                    </label>
                  </div>
                  <div class="product-one__item-info product-info">
                    <ul class="product-info__list">
                      <li class="product-info__item">
                        <div class="product-info__title">SKU</div>
                        <div class="product-info__text">11FSE7739</div>
                      </li>
                      <li class="product-info__item">
                        <div class="product-info__title">Categories</div>
                        <div class="product-info__text">Shirt</div>
                      </li>

                    </ul>
                  </div>

                  <Button onClick={handleOpen} variant="contained" style={{marginRight: 20}}>Edit</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit new product
                      </Typography>
                      <form className="add-form">
                        <TextField
                          fullWidth
                          label="Title"
                          variant="outlined"
                        />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Button
                            variant="outlined"
                            component="label"
                          >
                            Upload Photo
                            <input
                              type="file"
                              onInput={(e) => setPhotoPath(e.target.value)}
                              hidden
                            />
                          </Button>
                          <div
                            title={photoPath}
                            style={{ maxWidth: 170, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                            {photoPath}
                          </div>
                        </div>



                        <TextField
                          fullWidth
                          label="Description"
                          variant="outlined"
                        />
                        <TextField
                          fullWidth
                          label="Price"
                          variant="outlined"
                        />
                        <FormControl sx={{ m: 1, width: '100%', margin: 0 }} >
                          <InputLabel id="demo-select-small">Color</InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={color}
                            label="Color"
                            onChange={handleChangeColor}
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
                            <MenuItem value={10}>
                              <div className='option' style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='colorRect' style={{ background: `red` }} />Red
                              </div>
                            </MenuItem>
                            <MenuItem value={20}>
                              <div className='option' style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='colorRect' style={{ background: `Yellow` }} />Yellow
                              </div>
                            </MenuItem>
                            <MenuItem value={30}>
                              <div className='option' style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='colorRect' style={{ background: `Brown` }} />Brown
                              </div>
                            </MenuItem>
                            <MenuItem value={40}>
                              <div className='option' style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='colorRect' style={{ background: `Blue` }} />Blue
                              </div>
                            </MenuItem>
                            <MenuItem value={50}>
                              <div className='option' style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='colorRect' style={{ background: `White` }} />White
                              </div>
                            </MenuItem>
                            <MenuItem value={60}>
                              <div className='option' style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='colorRect' style={{ background: `Pink` }} />Pink
                              </div>
                            </MenuItem>
                            <MenuItem value={70}>
                              <div className='option' style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='colorRect' style={{ background: `Black` }} />Black
                              </div>
                            </MenuItem>
                            <MenuItem value={80}>
                              <div className='option' style={{ display: 'flex', alignItems: 'center' }}>
                                <div className='colorRect' style={{ background: `green` }} />Green
                              </div>
                            </MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Size</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="Size"
                            onChange={handleChangeSize}
                          >
                            <MenuItem value={10}>Xs</MenuItem>
                            <MenuItem value={20}>S</MenuItem>
                            <MenuItem value={30}>M</MenuItem>
                            <MenuItem value={40}>L</MenuItem>
                            <MenuItem value={50}>XL</MenuItem>
                            <MenuItem value={60}>XXl</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Category</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChangeCategory}
                          >
                            <MenuItem value={10}>T-Shirts</MenuItem>
                            <MenuItem value={20}>Shirts</MenuItem>
                            <MenuItem value={30}>Hoodies</MenuItem>
                            <MenuItem value={40}>Sweaters</MenuItem>
                            <MenuItem value={50}>Jackets</MenuItem>
                          </Select>
                        </FormControl>

                        <Button variant="contained" type='submit'>Confirm</Button>
                      </form>
                    </Box>
                  </Modal>
                  <Button onClick={handleOpenDelete} variant="outlined">Delete</Button>
                  <Modal
                    open={openDelete}
                    onClose={handleCloseDelete}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div id="modal-modal-title" style={{fontSize: 20, marginBottom: 40}}>
                        Are you sure you want to delete this item?
                      </div>
                      <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button variant="outlined" onClick={handleCloseDelete}>Cancel</Button>
                        <Button variant="contained">Delete</Button>
                      </div>
                      
                    </Box>
                  </Modal>

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 175 }}>
                    <InputAmount />
                    <button class="product-one__item-btn" type="submit">Add to favorite</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div style={{marginBottom: 40}}>
            <ProductTabs />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;