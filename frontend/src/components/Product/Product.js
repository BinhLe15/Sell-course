import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import './Product.css';
import { Link, Route } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { FaCartPlus } from 'react-icons/fa';
import CoursesDataService from "../../services/CoursesDataService";
import { VariantType, useSnackbar } from 'notistack';
import { addToCart,viewedItem } from "../../features/cartSlice"
import { FaEye } from 'react-icons/fa';
import { MdOutlineDateRange } from 'react-icons/md';
const Product = (props) => {
  const [billings, setBillings] = useState([]);
  const { cart } = useSelector((state) => state.Allcart)
  const dispatch = useDispatch();
  const [level, setLevel] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  let product={...props.product};
  // let purchasedCourses={...props.purchasedCourses};
  const handleClickVariant = (variant) => () => {
    // if (billings.filter(item=>item._id===props.orders._id).length!==0)
    //   {variant='warning';
    //     enqueueSnackbar('Khóa học đã ', { variant });
    //     return;
    // }
    if (cart.filter(item=>item._id===props.product._id).length!==0)
      {variant='warning';
        enqueueSnackbar('Khóa học đã có trong giỏ hàng', { variant });
        return;
    }
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Thêm vào giỏ hàng thành công', { variant });
  };
  const updateView=()=>{
    product.numberOfView++;
    CoursesDataService.updateCourseById(product._id,product)
    .then(

    )
  }
  useEffect(() => {
    setLevel(props.product.level)
  })
  let d=new Date(props.product.uploadDate);
  return (
    <div>
      <Card className="Card">
        <Link to={`/ProductDetail/${props.product._id}`}>
          <Card.Img className="card-img" onClick={()=>{updateView();dispatch(viewedItem(product))}} variant="top" src={props.product.poster} />
          </Link>
        <Card.Body style={{ textAlign: 'left', padding: '0' }}>
          {level === "normal" && <div className="btn-level-normal text-mb-10" >Cơ bản</div>}
          {level === "medium" && <div className="btn-level-medium text-mb-10" >Mọi cấp độ</div>}
          {level === "hard" && <div className="btn-level-hard text-mb-10" >Nâng cao</div>}
          <Link to={`/ProductDetail/${props.product._id}`} className="link"><Card.Title className="text-tittle" onClick={()=>{updateView();dispatch(viewedItem(product))}}>{props.product.name}</Card.Title></Link>
          <Card.Text className="text-des">
            {props.product.categories}
          </Card.Text>
          <Card.Text >
            <p className="text-price">{props.product.cost.toLocaleString('vi', { style: 'currency', currency: 'VND' })} </p>

            <p className="text-price-sales">{Math.ceil(props.product.cost * 1.3).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
          </Card.Text>
          <Row>
            <Col style={{ display: 'flex', justifyContent: 'left', alignItems:'center' }}>
              <FaEye style={{ margin: '0px 4px 0 0', width: '14px', height: '14px', alignSelf:'left' }} />
              <p className="card-text-date-view" style={{ margin:'auto 0' }}>{props.product.numberOfView}</p>
              <MdOutlineDateRange style={{ margin: '0px 2px 0 10px', width: '14px', alignSelf:'left' ,height: '14px' }} />
              
              <p className="card-text-date-view" style={{ margin:'auto 0' }}>{d.toLocaleDateString("vi-VI")}</p>
            </Col>
            <Col onClick={handleClickVariant("success")} style={{ display: 'flex', justifyContent: 'right' }}>
              <FaCartPlus className="product-cart-icon" style={{ margin: '0 0px 0 0',  cursor: 'pointer' }} onClick={() => {dispatch(addToCart(props.product))}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Product;