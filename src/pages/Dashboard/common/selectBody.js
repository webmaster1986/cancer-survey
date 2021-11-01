import React from "react";
import { Select } from "antd";

const { Option } = Select;

const SelectBody = props => {
  const { stack, error, placeholder, onSelected, flag } = props;

  return (
    <div className="page-container">
      {stack.map((stackItem, i) => {
        if (stackItem?.location?.length > 0)
          return (
            <div className="mt-4" key={i}>
              <Select
                showSearch
                optionFilterProp="children"
                onSelect={value => onSelected(value, i, flag)}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                placeholder={
                  stack.length == 1
                    ? placeholder
                    : "Select more specific location"
                }
                style={{ width: "100%" }}
              >
                {stackItem.location.map((item, i) => (
                  <Option value={JSON.stringify(item)} key={i}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </div>
          );
        else return null;
      })}
      <p className="text-danger">{error}</p>
    </div>
  );
};

export default SelectBody;
