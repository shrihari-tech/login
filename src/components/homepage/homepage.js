import React,{useState} from "react";
import { useHistory } from "react-router-dom"
import { EXCEL_FILE_BASE64 } from "./constants";
import FileSaver from 'file-saver';
import "./homepage.css"
import Select from 'react-select';


const Homepage = (props)=>{
  //console.log(props)
    const [sem2,setSem] = useState()
    const [dept2,setDept] = useState()
    const history=useHistory()
    const handleDownload = ()=>{
        let sliceSize = 1024;
        let byteCharacters = atob(EXCEL_FILE_BASE64);
        let byteLength= byteCharacters.length;
        let sliceCount = Math.ceil(byteLength/sliceSize);
        let byteArrays = new Array(sliceCount);
        for(let sliceIndex =0;sliceIndex<sliceCount;++sliceIndex){
          let begin = sliceIndex * sliceSize;
          let end = Math.min(begin+sliceSize,byteLength);
          let bytes = new Array(end-begin);
          for(var offset = begin,i=0;offset<end;++i,++offset){
            bytes[i]=byteCharacters[offset].charCodeAt(0);
          }
          byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        let blob = new Blob(byteArrays,{type:'application/vnd.ms-excel'});
        FileSaver.saveAs(new Blob([blob],{}),'format.xlsx');
      };
      const dept=[
        {
          value:1,
          label:"CSE A"
        },
        {
          value:2,
          label:"CSE B"
        },
        {
          value:3,
          label:"IT"
        },
        {
          value:4,
          label:"ECE"
        },
        {
          value:5,
          label:"AI & DS"
        },
        {
          value:6,
          label:"MECH"
        },
        {
          value:7,
          label:"CS & DS"
        }
      ];
      const sem=[
        {
          value:1,
          label:"1st sem"
        },
        {
          value:2,
          label:"2nd sem"
        },
        {
          value:3,
          label:"3rd sem"
        },
        {
          value:4,
          label:"4th sem"
        },
        {
          value:5,
          label:"5th sem"
        },
        {
          value:6,
          label:"6th sem"
        },
        {
          value:7,
          label:"7th sem"
        },
        {
          value:8,
          label:"8th sem"
        }
      ];

      const handleChange = (selectedOption) => {
        setDept(selectedOption);
        console.log(selectedOption.label)
      };
      
      const handle1Change = (selectedOption) => {
        setSem(selectedOption);
        console.log(selectedOption.label)
      };



    return(
        <div className="homepage">
          <div className="dept">Dept<br/>
            <Select options={dept} onChange={handleChange} value={dept2} />
          </div>
          <div className="sem">Semster<br/>
            <Select options={sem} onChange={handle1Change} value={sem2}   />
          </div>
            <div className="button" onClick={()=>{
                localStorage.removeItem("data")
                history.push("/")
                }}>Logout
            </div>
            <button className="format" onClick={()=>{
              //handleDownload()
              //history.push(`/main?dept=${dept2.label}$sem=${sem2.label}`);
              history.push(`/main?dept=${dept2.label}&sem=${sem2.label}`);
            }}>
                Submit
            </button>
        </div>
        
        //input type='file'
    )
}
export default Homepage