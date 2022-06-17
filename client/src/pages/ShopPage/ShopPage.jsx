import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductItem from "../../components/ProductItem/ProductItem";
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from "react";
import TypeFilter from "./TypeFilter/TypeFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import ColorFilter from "./ColorFilter/ColorFilter";
import SizeFilter from "./SizeFilter/SizeFilter";
import SortFilter from "./SortFilter/SortFilter";
import { Box, Button, Modal, TextField, Typography, InputLabel, MenuItem, FormControl, Select, PaginationItem } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import './ShopPage.scss';
import { changeLoading } from "../../redux/slices/appSlice";

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


function ShopPage() {
  const { isAdmin, allColors, allCategories } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const [toList, setToList] = useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const [searchParams, setSearchParams] = useSearchParams()
  const gender = searchParams.get('gender');

  const [productsData, setProductsData] = useState([]);
  const [cloneProducts, setCloneProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage === 1) {
      setCloneProducts([...productsData.slice(currentPage - 1, currentPage + 5)])
    } else {
      setCloneProducts([...productsData.slice((currentPage - 1) * 6, currentPage * 6)])
    }

  }, [productsData, currentPage])

  useEffect(() => {
    dispatch(changeLoading(true))
    const url = `http://localhost:8080/api/product/for/${gender === 'man' ? 'm' : 'w'}`;

    requestFetch(url)
      .then(data => {
        dispatch(changeLoading(false))
        console.log(data)
        setProductsData(data)
      })
      .catch(err => {
        dispatch(changeLoading(false))
        console.log(err);
      });
  }, [gender])

  return (
    <div className="ShopPage">
      <Breadcrumbs title={'catalog'} />

      <section className="shop">
        <div className="container">
          <TypeFilter />

          <div className="shop__inner">
            <div className="shop__filters filter">
              <PriceFilter />
              <ColorFilter />
              <SizeFilter />
            </div>

            <div className="shop-content">
              <div className="shop-content__filter">
                <div className="shop-content__filter-buttons">
                  <span>View</span>
                  <button
                    className={`shop-content__filter-btn button-grid  ${!toList && 'shop-content__filter-btn--active'}`}
                    onClick={() => { setToList(false) }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15px"
                      height="15px">
                      <path fill-rule="evenodd" fill="rgb(141, 141, 141)"
                        d="M-0.000,3.750 L3.750,3.750 L3.750,-0.000 L-0.000,-0.000 L-0.000,3.750 ZM5.625,15.000 L9.375,15.000 L9.375,11.250 L5.625,11.250 L5.625,15.000 ZM-0.000,15.000 L3.750,15.000 L3.750,11.250 L-0.000,11.250 L-0.000,15.000 ZM-0.000,9.375 L3.750,9.375 L3.750,5.625 L-0.000,5.625 L-0.000,9.375 ZM5.625,9.375 L9.375,9.375 L9.375,5.625 L5.625,5.625 L5.625,9.375 ZM11.250,-0.000 L11.250,3.750 L15.000,3.750 L15.000,-0.000 L11.250,-0.000 ZM5.625,3.750 L9.375,3.750 L9.375,-0.000 L5.625,-0.000 L5.625,3.750 ZM11.250,9.375 L15.000,9.375 L15.000,5.625 L11.250,5.625 L11.250,9.375 ZM11.250,15.000 L15.000,15.000 L15.000,11.250 L11.250,11.250 L11.250,15.000 Z" />
                    </svg>
                  </button>
                  <button
                    className={`shop-content__filter-btn button-list ${toList && 'shop-content__filter-btn--active'}`}
                    onClick={() => { setToList(true) }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px"
                      height="15px">
                      <path fill-rule="evenodd" fill="rgb(141, 141, 141)"
                        d="M5.835,14.998 L5.835,10.827 L19.994,10.827 L19.994,14.998 L5.835,14.998 ZM5.835,5.413 L19.994,5.413 L19.994,9.585 L5.835,9.585 L5.835,5.413 ZM5.835,0.000 L19.994,0.000 L19.994,4.172 L5.835,4.172 L5.835,0.000 ZM0.007,10.827 L4.429,10.827 L4.429,14.998 L0.007,14.998 L0.007,10.827 ZM0.007,5.413 L4.429,5.413 L4.429,9.585 L0.007,9.585 L0.007,5.413 ZM0.007,0.000 L4.429,0.000 L4.429,4.172 L0.007,4.172 L0.007,0.000 Z" />
                    </svg>
                  </button>
                </div>

                {isAdmin && <Button variant="contained" onClick={handleOpen}>Add new</Button>}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Add new product
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

                      <Button variant="contained" type='submit'>Add new</Button>
                    </form>
                  </Box>
                </Modal>

                <SortFilter />

              </div>
              <div className="shop-content__inner" >
                {cloneProducts.map(item => (
                  <ProductItem
                    category={allCategories.find(category => category.id === item.categoryId)}
                    colorObj={allColors.find(color => color.id === item.colorId)}
                    toList={toList}
                    img={item.img}
                    price={item.price}
                    title={item.title}
                    descr={item.description}
                    id={item.id} />
                ))}
              </div>

              <div className="pagination">
                <Pagination
                  count={productsData.length ? Math.ceil(productsData.length / 6) : 1}
                  onChange={(e, page) => setCurrentPage(page)}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopPage;