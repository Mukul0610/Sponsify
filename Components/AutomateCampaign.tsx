"use client"; 
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import style from '../Style/AutomateCampaign.module.css'
import Image from 'next/image'
import arrow_logo from '../Assets/arrow.png'
const option=[
  {value:"fashion", label: "Fashion"},
  {value: "travel", label: "Travel"},
  {value: "food", label: "Food"},
  {value: "fitness", label: "Fitness"},
  {value: "beauty", label: "Beauty"},
  {value: "lifestyle", label: "Lifestyle"},
  {value: "photography", label: "Photography"},
  {value: "art", label: "Art"},
  {value: "pets", label: "Pets"},
  {value: "nature", label: "Nature"},
  {value: "home_decor", label: "Home Decor"},
  {value: "music", label: "Music"},
  {value: "parenting", label: "Parenting"},
  {value: "technology", label: "Technology"},
  {value: "celebrity", label: "Celebrity"},
  {value: "meme", label: "Meme"},
  {value: "fan_page", label: "Fan Page"},
  {value: "health_wellness", label: "Health & Wellness"},
  {value: "education", label: "Education"},
  {value: "business_entrepreneurship", label: "Business/Entrepreneurship"},
  {value: "sports", label: "Sports"}
];

const AutomateCampaign = () => {
const [categories,setCategories]=useState([]);
const handleChange=(categories:any)=> {setCategories(categories)}
const [data,setData]=useState({
  campaigns:'',
  minFolower:'10k',
  averageViews:'100k',
  description:'',
  type:'logo',
  price:1000,
  day:7,
})        
  return (
    <div className={style.campaign}>
      <h1>Create Your Campaign</h1>
      <div className={style.main}>
          <h4>1. What's your campaign name?</h4>
          <input type='text' required onChange={e=>setData({...data,campaigns:e.target.value})} value={data.campaigns}/>
        </div>
        <div className={style.main}>
          <h4>2. Minimum followers required?</h4>
          <input type='text' required onChange={e=>setData({...data,minFolower:e.target.value})} value={data.minFolower}/>
        </div>
        <div className={style.main}>
          <h4>3. Average views required?</h4>
          <input type='text' required onChange={e=>setData({...data,averageViews:e.target.value})} value={data.averageViews}/>
        </div>
        <div className={style.main}>
          <h4>4. What's your campaign description?</h4>
          <textarea required onChange={e=>setData({...data,description:e.target.value})} value={data.description} className={style.textarea}/>
        </div>
        <div className={style.main}>
          <h4>5. Choose categories for your product</h4>
          <Select options={option} value={categories} onChange={handleChange} isMulti={true}/>
        </div>
        <div className={style.main}>
          <h4>6. Type of promotion?</h4>
          <select required onChange={e=>setData({...data,type:e.target.value})} value={data.type} className={style.logo}>
            <option value='logo'>Logo</option>
            <option value='non logo'>Not Logo</option>
          </select>
        </div>
        {data.type === 'logo' ?
        <div className={style.main}>
          <h4>7. Price per 10k in Rs?</h4>
          <input type="number" required onChange={e=>setData({...data,price:e.target.value})} value={data.price}/>
          <h4>8. Payable days for reel?</h4>
          <input type="number" required onChange={e=>setData({...data,day:e.target.value})} value={data.day}/>
        </div>
        :
        <div className={style.vln}></div>}
        <br />
      <button>Submit</button>
    </div>
  )
}

export default AutomateCampaign
