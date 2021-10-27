import React, { useState } from "react";
import { Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import JSONData from "./data";
import "./Dashboard.scss";
import { CustomSelectInput } from "../../common/components/SelectInput";

const { Option } = Select;

const Dashboard = () => {
  const [commonLocation, setCommonLocation] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});
  const [childValue, setChildValue] = useState("");
  const [childLocation, setChildLocation] = useState([]);
  // const [isChild, setChild] = useState(false);

  const addMore = () => {};
  const handleChange = e => {
    // let data = [];
    const value = e.target.value;
    console.log("selected", selectedValues);
    setSelectedKeys([...selectedKeys, value]);
    setCommonLocation(value);
    // if (selectedValues) {
    //   data =
    //     selectedValues &&
    //     Object.keys(selectedValues).map(item => {
    //       item &&
    //         selectedValues[item] &&
    //         selectedValues[item].location.length &&
    //         selectedValues[item].location.find(val => Number(val.key) == value);
    //     });
    // } else {
    //   data = JSONData && JSONData.find(item => Number(item.key) == value);
    //   // selectedValues &&
    //   // selectedValues[0] &&
    //   // selectedValues[0].location.length &&
    //   // selectedValues[0].location.find(item => Number(item.key) == value);
    // }
    const data = JSONData && JSONData.find(item => Number(item.key) == value);
    setSelectedValues({ [value]: [data] });
  };
  const onChildChange = (value, index) => {
    console.log(
      "index",
      value,
      index,
      selectedValues &&
        Object.keys(selectedValues).forEach(item => {
          item &&
            selectedValues[item] &&
            selectedValues[item][0] &&
            selectedValues[item][0].location.length &&
            selectedValues[item][0].location.find(
              val => Number(val.key) == index
            );
        })
    );
    // const value = e.target.value;
    // const data =
    //   selectedValues &&
    //   selectedValues[0] &&
    //   selectedValues[0].location.length &&
    //   selectedValues[0].location.find(item => Number(item.key) == index);

    let data =
      selectedValues &&
      Object.keys(selectedValues).forEach(item => {
        item &&
          selectedValues[item] &&
          selectedValues[item][0] &&
          selectedValues[item][0].location.length &&
          selectedValues[item][0].location.find(
            val => Number(val.key) == index
          );
      });

    console.log("data", data);
    setSelectedValues({ [index]: data });
    setChildLocation(index);
    setChildValue(value);
  };
  console.log("child", childValue);
  console.log("selectedValues", selectedValues);
  // console.log("onChildChange", onChildChange);
  return (
    <div className="page-container">
      <div className="container-fluid row">
        <div className="main-modal col-sm-12 col-md-5">
          <div className="col-sm-12 col-md-12">
            <p className="heading-1">What is the cancer located?</p>
            <Select
              showSearch
              style={{ width: "100%" }}
              placeholder="Enter or select from common locations"
              optionFilterProp="children"
              showArrow={false}
              value={commonLocation}
              onChange={value => handleChange({ target: { value } })}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {JSONData &&
                JSONData.map((item, i) => {
                  return (
                    <Option value={item.key} key={i}>
                      {item.label}
                    </Option>
                  );
                })}
            </Select>
            {selectedValues &&
              Object.keys(selectedValues).map((item, i) => (
                <div className="mt-5" key={i}>
                  <CustomSelectInput
                    options={selectedValues[item][0].location || []}
                    onChange={value => onChildChange(value, i + 1)}
                    value={childLocation}
                    placeholder="Select more specific location"
                  />
                </div>
              ))}
            <span className="condition my-1">
              <b>OR</b>
            </span>
            <Select
              showSearch
              style={{ width: "100%" }}
              placeholder="Select by body region"
              optionFilterProp="children"
              showArrow={false}
              // onChange={onChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
            <div className="add-more d-flex justify-content-between mt-5">
              <div
                className="d-flex align-items-center add-location"
                onClick={() => addMore()}
              >
                <PlusOutlined />
                &nbsp;Add another location
              </div>
              <button className="btn btn-dark">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
