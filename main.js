
// показывает дату вашего рождения в привычном виде 

 function getDateFormat(date,separator){
   const newDate= date.getDate();
   const newDate2=date.getMonth()
   const newDate3=date.getFullYear()
   if(separator === "-"){
    separator
   }else {
    separator = "."
   }
   const result = `${newDate}${separator}${newDate2}${separator}${newDate3}`
   return result
 }
 const date = new Date()
 const separator ="."
 console.log(getDateFormat(date,separator))

