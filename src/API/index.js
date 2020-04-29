import React from 'react'
import axios from 'axios'
const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) => {
let changeUrl=url;
if(country)
{
 changeUrl= `${url}/countries/${country}`
}

    try {
console.log("changeurl")
console.log(changeUrl)
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl)


        const modifyData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
return modifyData
    }
    catch (error) {

    }
}
export const fetchDataDaily= async()=>{
try{
const {data }=await axios.get(`${url}/daily`)
const modifieddata=data.map((dailydata)=>(
{
confirmed:dailydata.confirmed.total,
deaths:dailydata.deaths.total,
date:dailydata.reportDate
}
))
return modifieddata
}
catch(error)
{

}

}
export const countries=async()=>{
try{
// const {data:{countries}}=await axios.get(`${url}/countries`)
// return (countries.map((country)=>country.name))
const response=await axios.get(`${url}/countries`)
return (response.data.countries.map((country)=>country.name))
}
catch(error)
{

}
}