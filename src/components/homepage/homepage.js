import React from "react"
import "./homepage.css"

const Homepage = ()=>{
    return(
        <div className="homepage">
            <div className="button">Logout</div>
            <div class="cgpa_container">
                <div class="cgpa_ttitle"><h4>CGPA Calculator</h4></div>
                <input type="text" id ="first-gpa" placeholder="1st-semester"></input>
                <input type="text" id="two-gpa" placeholder="2nd-semester"></input>
                <input type="text" id="three-gpa" placeholder="3rd-semester"></input>
                <input type="text" id="four-gpa" placeholder="4th-semester"></input>
                <input type="text" id="five-gpa" placeholder="5th-semester"></input>
                <input type="text" id="six-gpa" placeholder="6th-semester"></input>
                <input type="text" id="seven-gpa" placeholder="7th-semester"></input>
                <input type="text" id="eight-gpa" placeholder="8th-semester"></input>
                <div class="cgpa_output">
                    <h1>Total CGPA=</h1>
                    <button id="btn_re">
                            Reset
                    </button>
                    <button id="btn_sub" onclick="myFunction()">
                    submit
                    </button>
                </div>
            </div>
            <script src="calculate.js">

                function myFunction(){
                    /*document.querySelector('#btn_sub').addEventListener('click',()=>{
                        let first_gpa=document.querySelector('#first-gpa').value;
                        let first_gpa_per=(first_gpa/100)*5;
                        let first_gpa_per_result=first_gpa_per.toPrecision(3);
                        
                        let two_gpa=document.querySelector('#two-gpa').value;
                        let two_gpa_per=(two_gpa/100)*5;
                        let two_gpa_per_result=two_gpa_per.toPrecision(3);
                        
                        let three_gpa=document.querySelector('#three-gpa').value;
                        let three_gpa_per=(three_gpa/100)*5;
                        let three_gpa_per_result=three_gpa_per.toPrecision(3);

                        let foure_gpa=document.querySelector('#foure-gpa').value;
                        let foure_gpa_per=(foure_gpa/100)*5;
                        let foure_gpa_per_result=foure_gpa_per.toPrecision(3);

                        let five_gpa=document.querySelector('#five-gpa').value;
                        let five_gpa_per=(five_gpa/100)*5;
                        let five_gpa_per_result=five_gpa_per.toPrecision(3);

                        let six_gpa=document.querySelector('#six-gpa').value;
                        let six_gpa_per=(six_gpa/100)*5;
                        let six_gpa_per_result=six_gpa_per.toPrecision(3);

                        let seven_gpa=document.querySelector('#seven-gpa').value;
                        let seven_gpa_per=(seven_gpa/100)*5;
                        let seven_gpa_per_result=seven_gpa_per.toPrecision(3);

                        let eight_gpa=document.querySelector('#eight-gpa').value;
                        let eight_gpa_per=(eight_gpa/100)*5;
                        let eight_gpa_per_result=eight_gpa_per.toPrecision(3);

                        let total=
                        parseFloat(first_gpa_per_result)+parseFloat(two_gpa_per_result)+parseFloat(three_gpa_per_result)+parseFloat(foure_gpa_per_result)+
                        parseFloat(five_gpa_per_result)+parseFloat(six_gpa_per_result)+parseFloat(seven_gpa_per_result)+parseFloat(eight_gpa_per_result);

                        let total_cgpa=total.toPrecision(3);
                        document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA=${total_cgpa}`
                    })*/

                }
            </script>
        </div>
        
        
    )
}
export default Homepage