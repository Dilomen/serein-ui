import React from "react";
import { Checkbox, CodePreview, Space, CheckboxGroup } from "cps";
import renderInstruction, { eventCode, GroupCode, GroupCode2 } from "./instruction";
import "./index.scss";

class CheckboxShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: ["a"],
      defaultValue2: ['1', '2']
    };
  }

  handleChange = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
  };
  handleGroupChange = (value) => {
    this.setState({
      defaultValue: value,
    });
  };

  handleGroupChange2 = (value) => {
    this.setState({
      defaultValue2: value,
    });
  }
  render() {
    const { defaultValue, defaultValue2 } = this.state;
    return (
      <>
        <CodePreview title="点击事件" code={eventCode}>
          <Space>
            <Checkbox onChange={this.handleChange} value="aa">
              改变状态
            </Checkbox>
            <Checkbox disabled>禁用</Checkbox>
            <Checkbox disabled defaultChecked={true}>
              选中禁用
            </Checkbox>
          </Space>
        </CodePreview>

        <CodePreview title="Group" code={GroupCode}>
          <CheckboxGroup
            options={["a", "b", "c"]}
            onChange={this.handleGroupChange}
            value={defaultValue}
          ></CheckboxGroup>
        </CodePreview>


        <CodePreview title="自定义Group" code={GroupCode2}>
          <CheckboxGroup onChange={this.handleGroupChange2} value={defaultValue2} disabled>
            <Checkbox value="1">1</Checkbox>
            <Checkbox value="2">2</Checkbox>
            <Checkbox value="3">3</Checkbox>
          </CheckboxGroup>
        </CodePreview>

        <div
          className="instruction"
          dangerouslySetInnerHTML={{ __html: renderInstruction }}
        ></div>
      </>
    );
  }
}

export default CheckboxShow;
