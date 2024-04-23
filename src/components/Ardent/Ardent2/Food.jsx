import React, { useState } from "react";
import "./Food.css"
const Food=[""]
const FoodItem = () =>{

    const [data, setData] = useState(Food)


    const FoodFilter = (currElem) =>{
        const updateItem = Food.filter((cateItem) =>{
            return cateItem.category === currElem;
        })
        setData(updateItem)
    }


    return(
        <>
           <div className="container-fluid">
                <h4 className="text-center pt-3">All Food Menu Item</h4><hr></hr>


                <div className="row">
                    <div className="col-12 menu-btn d-flex justify-content-center">
                        <button className="btn btn-warning" onClick={() => setData(Food)}>All Food</button>
                        <button className="btn btn-warning" onClick={() => FoodFilter('Fast Food')}>Fast Food</button>
                        <button className="btn btn-warning" onClick={() => FoodFilter('Break Fast')}>Break Fast</button>
                        <button className="btn btn-warning" onClick={() => FoodFilter('Lunch')}>Lunch</button>
                        <button className="btn btn-warning" onClick={() => FoodFilter('Dinner')}>Dinner</button>
                        <button className="btn btn-warning" onClick={() => FoodFilter('Veg')}>Veg</button>
                        <button className="btn btn-warning" onClick={() => FoodFilter('Non Veg')}>Non Veg</button>
                        <button className="btn btn-warning" onClick={() => FoodFilter('Supper')}>Supper</button>
                        <button className="btn btn-warning" onClick={() => FoodFilter('Tea')}>Tea</button>
                        <button className="btn btn-warning" onClick={() => FoodFilter('Coffee')}>Coffee</button>
                    </div>
                </div>


                <div className="row mt-4 mb-5">
                    {
                        data.map((elem) =>{
                            const {img,name,category,price} = elem
                            return(
                                <div className="col-12 col-md-3">
                                    <div className="card1 mt-3">
                                        <div className="card1-left">
                                            <img src={img} alt="..." height={'120px'} width={'100%'}></img>
                                        </div>
                                        <div className="card1-right">
                                            <h3>{name}</h3>
                                            <span>{category}</span>


                                            <div className="btn d-flex">
                                                <h6>Price : {price}</h6>
                                                <a href="">
                                                    <button className="badge badge-success">Order Now</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
           </div>
        </>
    )
}


export default FoodItem
