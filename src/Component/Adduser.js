import { useState, useEffect } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const Adduser = () => {
    const [nameproduct, nameproductchange] = useState('');
    const [price, pricechange] = useState('');
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
  
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        const productobj = { ID, nameproduct, price, image };
        dispatch(FunctionAddUser(productobj));
        navigate('/product');
    }

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
      }, [images]);
    
      function onImageChange(e) {
        setImages([...e.target.files]);
      }
    
      console.log("Images : ", images);
      console.log("imageURLs : ", imageURLs);

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>เพิ่มสินค้า</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>ชื่อสินค้า</label>
                                    <input value={nameproduct} onChange={e => nameproductchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>ราคา</label>
                                    <input value={price} onChange={e => pricechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>ประเภทสินค้า</label>
                                    <select value={role} onChange={e => rolechange(e.target.value)} className="form-control">
                                        <option value="potation">เครื่องดื่ม</option>
                                        <option value="dessert">ขนม</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <input type="file" multiple accept="image/*" onChange={onImageChange} />
                                {imageURLs.map((imageSrc, idx) => (
                                    <img key={idx} width="90" height="90" src={imageSrc} />
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/user'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Adduser;