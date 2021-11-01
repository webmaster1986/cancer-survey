import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import JSONData from "./data";
import JSONBody from "./body";
import "./Dashboard.scss";
import SelectBody from "./common/selectBody";
import LocationList from "./common/locationList";

const Dashboard = () => {
  const [stack, setStack] = useState([{ location: JSONData }]);
  const [body, setBody] = useState([{ location: JSONBody }]);
  const [clear, setClear] = useState(false);
  const [isActive, setActive] = useState(false);
  const [finalSequence, setSequence] = useState([]);
  const [error, setError] = useState("");
  const [bodyError, setBodyError] = useState("");

  useEffect(() => {}, []);
  const onFirstSelected = (value, i, flag) => {
    setActive(flag);
    if (flag) {
      if (i < stack.length - 1) {
        const trimmedArray = [...stack];
        trimmedArray.splice(i + 1, stack.length - (i + 1));
        const newStack = [...trimmedArray, JSON.parse(value)];
        setStack(newStack);
      } else {
        const newStack = [...stack];
        newStack.push(JSON.parse(value));
        setStack(newStack);
      }
      setBody([{ location: JSONBody }]);
    } else {
      if (i < body.length - 1) {
        const trimmedArray = [...body];
        trimmedArray.splice(i + 1, body.length - (i + 1));
        const newStack = [...trimmedArray, JSON.parse(value)];
        setBody(newStack);
      } else {
        const newStack = [...body];
        newStack.push(JSON.parse(value));
        setBody(newStack);
      }
      setStack([{ location: JSONData }]);
    }
    setError("");
    setBodyError("");
  };

  const onNext = () => {
    if (isActive) {
      const checkLength =
        stack &&
        stack[stack.length - 1] &&
        stack[stack.length - 1].location.length;
      if (checkLength && stack.length > 1) {
        setError("Please complete further steps");
        return true;
      } else {
        setError("");
        setBodyError("");
      }
    } else {
      const checkLength =
        body && body[body.length - 1] && body[body.length - 1].location.length;
      if (checkLength && body.length > 1) {
        setBodyError("Please complete further steps");
        return true;
      } else {
        setBodyError("");
        setError("");
      }
    }
  };

  const addMore = () => {
    if (isActive) {
      const checkLength =
        stack &&
        stack[stack.length - 1] &&
        stack[stack.length - 1].location.length;
      if (checkLength && stack.length > 1) {
        setError("Please complete further steps");
        return true;
      } else {
        setError("");
        setBodyError("");
        let seqVal = [];
        stack.forEach((element, i) => {
          if (i != 0) seqVal.push(element.label);
        });
        if (seqVal.length) setSequence([...finalSequence, seqVal]);
        setStack([{ location: JSONData }]);
        setClear(!clear);
      }
    } else {
      const checkLength =
        body && body[body.length - 1] && body[body.length - 1].location.length;
      if (checkLength && body.length > 1) {
        setBodyError("Please complete further steps");
        return true;
      } else {
        setError("");
        setBodyError("");
        let seqVal = [];
        body.forEach((element, i) => {
          if (i != 0) seqVal.push(element.label);
        });
        if (seqVal.length) setSequence([...finalSequence, seqVal]);
        setBody([{ location: JSONBody }]);
        setClear(!clear);
      }
    }
  };

  const onRemove = i => {
    const array = [...finalSequence];
    array.splice(i, 1);
    setSequence(array);
  };

  return (
    <div className="page-container">
      <div className="container-fluid row">
        <div className="main-modal col-sm-12 col-md-5">
          <div className="col-sm-12 col-md-12" key={clear}>
            <p className="heading-1">Where is the cancer located?</p>
            <LocationList directory={finalSequence} onRemove={onRemove} />
            <SelectBody
              stack={stack}
              onSelected={onFirstSelected}
              flag={true}
              placeholder={"Enter or select from common locations"}
              error={error}
            />
            <span className="condition my-1">
              <b>OR</b>
            </span>
            <SelectBody
              stack={body}
              placeholder={"Select by body region"}
              flag={false}
              onSelected={onFirstSelected}
              error={bodyError}
            />

            <div className="add-more d-flex justify-content-between mt-5">
              <div
                className="d-flex align-items-center add-location"
                onClick={() => addMore()}
              >
                <PlusOutlined />
                &nbsp;Add another location
              </div>
              <button className="btn btn-dark" onClick={onNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       commonLocation: [],
//       values: []
//     };
//   }
//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevState !== this.state.values) {
//   //     console.log("Hii");
//   //   }
//   // }
//
//   handleChange = e => {
//     const value = e.target.value;
//     console.log("value----->>>", value);
//     this.setState({
//       commonLocation: value,
//       values: [value]
//     });
//   };
//
//   onChildSelect = (value, index) => {
//     let { values } = this.state;
//     if (values.some((x, i) => i === index)) {
//       values[index] = value;
//       values.splice(index + 1, values.length - (index + 1));
//     } else {
//       values.push(value);
//     }
//     this.setState({
//       values
//     });
//   };
//
//   getOptions = (indexList, index) => {
//     let array = [];
//
//     indexList.forEach((x, i) => {
//       if (index >= i) {
//         array = i === 0 ? JSONData[x - 1]?.location : array[x - 1]?.location;
//       }
//     });
//
//     return array;
//   };
//
//   render() {
//     const { commonLocation, values } = this.state;
//     return (
//       <div className="page-container">
//         <div className="container-fluid row">
//           <div className="main-modal col-sm-12 col-md-5">
//             <div className="col-sm-12 col-md-12">
//               <p className="heading-1">What is the cancer located?</p>
//               <Select
//                 showSearch
//                 style={{ width: "100%" }}
//                 placeholder="Enter or select from common locations"
//                 optionFilterProp="children"
//                 showArrow={false}
//                 value={commonLocation}
//                 onChange={value => this.handleChange({ target: { value } })}
//                 filterOption={(input, option) =>
//                   option.children.toLowerCase().indexOf(input.toLowerCase()) >=
//                   0
//                 }
//               >
//                 {JSONData &&
//                   JSONData.map((item, i) => {
//                     return (
//                       <Option value={item.key} key={i}>
//                         {item.label}
//                       </Option>
//                     );
//                   })}
//               </Select>
//
//               {values.map((value, index) => {
//                 // console.log(this.getOptions(values, index));
//                 // if (this.getOptions(values, index)?.length > 0)
//                 return (
//                   <div className="mt-5" key={index.toString()}>
//                     <CustomSelectInput
//                       options={this.getOptions(values, index) || []}
//                       onChange={e =>
//                         this.onChildSelect(e.target.value, index + 1)
//                       }
//                       value={values?.[index + 1]}
//                       placeholder={`Select more specific location ${index}`}
//                     />
//                   </div>
//                 );
//               })}
//               <span className="condition my-1">
//                 <b>OR</b>
//               </span>
//               <Select
//                 showSearch
//                 style={{ width: "100%" }}
//                 placeholder="Select by body region"
//                 optionFilterProp="children"
//                 showArrow={false}
//                 // onChange={onChange}
//                 filterOption={(input, option) =>
//                   option.children.toLowerCase().indexOf(input.toLowerCase()) >=
//                   0
//                 }
//               >
//                 <Option value="jack">Jack</Option>
//                 <Option value="lucy">Lucy</Option>
//                 <Option value="tom">Tom</Option>
//               </Select>
//
//               <div className="add-more d-flex justify-content-between mt-5">
//                 <div
//                   className="d-flex align-items-center add-location"
//                   // onClick={() => addMore()}
//                 >
//                   <PlusOutlined />
//                   &nbsp;Add another location
//                 </div>
//                 <button className="btn btn-dark">SUBMIT</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Dashboard;
