import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Input, Button } from "antd";
import { downLoadJsonDataFn } from "../../utils/tools";

const { TextArea } = Input;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const InputCon = styled.input`
  width: 400px;
  height: 200px;
  margin-top: 20px;
`;

const TextAreaCon = styled(TextArea)`
  margin-top: 20px;
`;

const ExportBtn = styled(Button)`
  display: flex;
  width: 200px;
  justify-content: center;
  margin-top: 10px;
`;

const AddSignature4TXSerializedData = () => {
  const [files, setFiles] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };
  };

  useEffect(() => {
    setTextValue(files);
  }, [files]);

  const onChange = e => {
    setTextValue(e.target.value);
  }

  const handleExport = () => {
    downLoadJsonDataFn(textValue, `updateNft:{${String(new Date()).split(' ').join('-')}}`)
  }

  return (
    <Body>
      <Title>Choose a json file</Title>
      <InputCon type="file" onChange={handleChange}></InputCon>
      <TextAreaCon
        showCount
        onChange={onChange}
        placeholder="add sign"
        value={textValue}
        style={{
          height: 300
        }}
      />
      <ExportBtn type="primary" onClick={() => handleExport()}>export</ExportBtn>
    </Body>
  )
};

export default AddSignature4TXSerializedData;