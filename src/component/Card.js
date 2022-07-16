import React from "react";

const Card = ({ item }) => {
  // destructuring props
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-xs-1 col-md-6 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <div className="card-img-top text-center border">
                  <img
                    src={Val.img}
                    alt={Val.title}
                    className="photo w-100 rounded"
                  />
                </div>

                <div className="card-body border rounded-bottom">
                  <div className="card-title fw-bold fs-4">
                    {Val.title}
                    <br />
                    <button className="btn-outline-dark p-1 px-1 mx-1 btn fw-bold border">
                      {Val.price}
                    </button>
                    {Val.ice && (
                      <button className="btn-outline-dark p-1 px-2 mx-1 btn fw-bold border">
                        {Val.ice}
                      </button>
                    )}

                    {/* <button className="btn-outline-dark p-1 px-2 mx-5 btn fw-bold border">
                      {Val.ice}
                    </button> */}
                  </div>
                  <div className="card-text">{Val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
