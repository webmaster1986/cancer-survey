import React from "react";

const LocationList = ({ directory, onRemove }) => {
  return (
    <>
      {directory && directory.length
        ? directory.map((item, index) => {
            return (
              item &&
              item.map((ele, i) => {
                if (item.length - 1 === i) {
                  return (
                    <>
                      <span className="font-weight-bold" key={i}>
                        {ele}
                      </span>{" "}
                      <br />
                      <div className="remove-btn col-sm-12 col-md-12 mb-1">
                        <button
                          className="btn btn-dark"
                          onClick={() => onRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <span className="font-weight-bold" key={i}>
                      {ele + " > "}
                    </span>
                  );
                }
              })
            );
          })
        : null}
    </>
  );
};
export default LocationList;
