import React from "react";
import { Form, Select } from "antd";
export const CustomSelectInput = props => {
  const { label, value, onChange, options, mode, error, placeholder } = props;
  return (
    <Form.Item label={label}>
      <Select
        value={value}
        showSearch
        onChange={value => onChange({ target: { value } })}
        mode={mode || ""}
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Select.Option value="" disabled>
          Select
        </Select.Option>
        {(options || []).map((x, index) => (
          <Select.Option value={x.key} key={index}>
            {x.label}
          </Select.Option>
        ))}
      </Select>
      <span className="text-danger">{error}</span>
    </Form.Item>
  );
};
