import React from 'react';
import '../App.css';

import exe from '../exe';
var res1;

class TableId extends React.Component {
  
  constructor(){
        super()
        this.state = {
          month:"",
          date:"",
          year:"",
          day:""
        }
       
        this.monthChange = this.monthChange.bind(this);
        this.yearChange = this.yearChange.bind(this);
        this.dateChange  = this.dateChange.bind(this);
        this.findDay = this.findDay.bind(this);
        //this.exe = this.exe.bind(this);
        
      }

      dateChange(e){
        this.setState({
          date:e.target.value
        })        
      }
      yearChange(e){
        this.setState({
          year:e.target.value
        })
        var yearIs = e.target.value;
        
        var len = yearIs.length;
        var display = yearIs.substring(len - 2);
     
        if(this.state.month===2){
          if(display%4===0 && display!==0){
      
         this.setState({
           date:29
         })
         this.refs.dateIs.max=29;
        }else{
          this.setState({
            date:28
          })
          this.refs.dateIs.max=28;
        }
      }
      }
    
      monthChange(e){
        localStorage.removeItem("day")
       var val = Number(e.target.value)
       
        if(val > 12 || val === 0 ){
      
        this.setState({
          month:"",
          date:""
        })
        this.refs.dateIs.value="";
        }
        else if(val===""){
         
        }else if(val===1 || val===3 || val ===5 || val ===7 || val===8 || val===10 || val===12){
          this.setState({
            date:31,
          month:Number(e.target.value)
          })
          this.refs.dateIs.max = 31;
          this.refs.dateIs.min = 1;
        }else if(val===2){
          this.setState({
            date:28,
            month:Number(e.target.value)
          })
          this.refs.dateIs.max = 28;
          this.refs.dateIs.min = 1;
        }else if(val===0){
           this.setState({
             date:"",
             month:Number(e.target.value)
           })
        }
        else{
          this.setState({
            date:30
          })
        }
        }
        findDay(){
          var year = this.state.year;
         
          var month = this.state.month;
        
          var date = this.state.date;
        
          
          if (month === "" || month < 1 || month >12 ) {
            alert("please provide valid month to proceed");
          } else if (date === "") {
            alert("please provide valid date to proceed");
          }else if(date > 31 || date < 1){
            alert("please enter valid date")
          } 
          else if (year === "" || year < 0) {
            alert("please provide valid year to proceed");
          } else {
            var  Month = parseInt(month,10);
            var  parsedYear = parseInt(year,10);
            var  modulus = parsedYear % 100;
            var  intermediateVal = parsedYear - modulus;
            var  yearMod = intermediateVal % 400;
            var yearConst;
             if (yearMod === 0) {
               yearConst = 2;
             } else if (yearMod === 100) {
               yearConst = 0;
             } else if (yearMod === 200) {
              yearConst = 5;
             } else if (yearMod === 300) {
              yearConst = 3;
             }
            var  finalYearMod = parsedYear % 200;
             if (finalYearMod > 100) {
               finalYearMod = finalYearMod % 100;
             }
            var  z = parseInt(finalYearMod / 12,10);
            
            var  n = finalYearMod - 12 * z;
            var   p =parseInt(n / 4,10);
           
            var  sum = yearConst + z + n + p;
            
            var  res = sum % 7;
           
            var  D = parseInt(date,10);
          
          
            //calculating day in terms of number(0-6) of each months
             if (Month === 1) { //jan
               if (finalYearMod % 4 === 0) {
                 res = res - 1;
               }
               D = D + res + 7;
               D = D - 3;
               D = D % 7;
               res1 = D;
            
               exe(res1);
              
             } 
          else if (Month === 2) { //feb
              if (finalYearMod % 4 === 0) {
                 res = res - 1;
               }
               D = D % 7;
               res1 = D + res;
               if (res1 > 6) {
                 res1 = res1 % 7;
                 exe(res1);
             } else {
                 exe(res1);
               }
             } else if (Month === 3 || Month === 11) { //march and november
               D = D % 7;
               res1 = D + res;
               if (res1 > 6) {
                 res1 = res1 % 7;
                 exe(res1);
               } else {
                exe(res1);
               }
             } else if (Month === 4 || Month === 7) { //april and july
               if (D === 1) {
                 res1 = res + Month;
               } else {
                 D = D - 4;
                 D = D + res;
                 res1 = D;
               }
               if (res1 > 6) {  //june
                 res1 = res1 % 7;
                 exe(res1);
               } else {
                 exe(res1);
              }
             } else if (Month === 5) { //may
               if (D > 1) {
                 D = D - 2;
                 D = D + res;
                 if (D > 0) {
                   D = D % 7;
                 }
                 res1 = D;
               } else {
                 res1 = res - 1;
               }
               exe(res1);
             } else if (Month === 6) { //june
               if (D > 5) {
                 D = D - 6;
                 D = D % 7;
                 D = D + res;
                 if (D > 0) {
                   D = D % 7;
                 }
                 res1 = D;
               } else if (D > 0 && D < 6) {
                 D = D + res + 1;
                 if (D > 6) {
                   D = D % 7;
                 }
                 res1 = D;
               }
               exe(res1);
             } else if (Month === 8) { //aug
               res1 = D + res - 1;
               if (res1 > 7) {
                 res1 = res1 % 7;
               }
               exe(res1);
             } else if (Month === 9) { //sept
               D = D + Month + res;
               D = D % 7;
               res1 = D;
               exe(res1);
             } else if (Month === 12) { //dec
               D = D + Month + res - 3;
               D = D % 7;
               res1 = D;
               
               exe(res1);
            } else if (Month === 10) { //oct
               D = D + res + 7;
               D = D - 3;
               D = D % 7;
               res1 = D;
               exe(res1);
             }
          }
          if(window.localStorage.getItem("day")===null || this.state.year==="" || this.state.date==="" ||this.state.month===""){
            this.setState({
              day:""
            })
          }else{
          this.setState({
            day:this.state.date+"/"+this.state.month+"/"+this.state.year+" => "+window.localStorage.getItem("day")
          })
        }
        }

    render() {
        return (
          <div>
            <input type="number" className="month" placeholder="Month" onChange={this.monthChange} />
            <input type="number" ref ="dateIs" className="date" placeholder="Date" value={this.state.date} onChange={this.dateChange} />
            <input type="number" ref="yearIs" className="year" placeholder="year" value={this.state.year} onChange={this.yearChange}  />
            <input type="button" className="btn"  value="find" onClick={this.findDay}/>
            
            <div className="msg">{this.state.day}</div>
          </div>
        )
    }
}
export default TableId;