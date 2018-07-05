import React from "react";
import FAIcon from '@fortawesome/react-fontawesome'
import faSolid from '@fortawesome/fontawesome-free-solid'
import { Upload, Icon, message, Button } from 'antd';
const Dragger = Upload.Dragger;

export default class UploadImage extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      haveFile:false,
      fileList:[],
    }
  }
  imageUpload(file){
    let{imageSearchBegin} = this.props;
    this.getBase64(file,(base64)=>{
      imageSearchBegin(base64);
    })
  }
  getBase64(file,callBack){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
      callBack(this.result);
    }
  }
  render(){
      return(
        <Dragger 
          // onChange ={(e)=>this.imageUpload(e)}
          beforeUpload = {(e)=>this.imageUpload(e)}
          showUploadList = {false}

        >
           <FAIcon className = "toolStart"  icon ={faSolid.faUpload}/>
          <p className="ant-upload-text">Reverse Image Search</p>
          <p className="ant-upload-hint">Support for a single upload.</p>
        </Dragger>
      ); 
  }
}