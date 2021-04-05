import React from 'react'
import './SearchPage.css'
import { useStateValue } from "../../StateProvider"
import useGoogleSearch from '../../useGoogleSearch';
import Response from "../../response"
import { Link } from "react-router-dom"
import Search from "../Search/Search"

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //LIVE API CALL
  // const { data } = useGoogleSearch(term); 
  const data = Response;


  console.log(data)
  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to="/">
        <img
          className="searchPage__logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt=""
        />
        </Link>
        </div>

      <div className='searchPage__headerBody'>
        <Search hideButtons />

      </div>
    </div>
  )
}

export default SearchPage
