import React, {useState} from "react"
import { EXCEL_FILE_BASE64 } from "../homepage/constants";
import { readXlsxFile } from 'react-excel-renderer';
import FileSaver from 'file-saver';
import "./main.css";
import * as XLSX from 'xlsx';

const Main=()=>{
    const [excelData, setExcelData] = useState([]);
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      readXlsxFile(file).then((rows) => {
        setExcelData(rows);
      });
    };
    const readExcel=(file)=>{
      const promise=new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file)
        fileReader.onload=(e)=>{
          const bufferArray=e.target.result;
          const wb=XLSX.read(bufferArray,{type:'buffer'});
          const wsname=wb.SheetNames[0];
          const ws=wb.Sheets[wsname];
          const data=XLSX.utils.sheet_to_json(ws);
          resolve(data);
        };
        fileReader.onerror=(error)=>{
          reject(error);
        };
      });
      promise.then((d)=>{
        console.log(d);
      })
    };
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



//const dept=useParams.get("dept2");
//const sem = searchParams.get("sem");
//console.log(dept);
//console.log(sem);
      return (
          <div className="main">
              <div className="format">
                  <button className="button" onClick={()=>{
                      handleDownload()
                    }}>
                      Download File Format
                  </button>
              </div>
              <div className="file-select">
                <input type="file" onChange={(e)=>{
                  const file=e.target.files[0];
                  readExcel(file);
                }} />
              </div>
              <div className="file-upload">
                <button onClick={handleFileUpload}>Upload Excel File</button>
              </div>
              {excelData.map((row, rowIndex) => (
                <div key={rowIndex}>
                  {row.map((cell, columnIndex) => (
                    <div key={`${rowIndex}-${columnIndex}`}>{cell}</div>
                  ))}
                </div>
                
              ))}

          </div>
      )
}

export default Main;
