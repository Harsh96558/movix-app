import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./HeroBanner.scss"
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImg/Img'
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"


function HeroBanner() {
  const navigate = useNavigate()

  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")

  const { data, loading } = useFetch("/movie/upcoming")
  const { url } = useSelector((state) => state.home)

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg)
    console.log(url)

  }, [data])
  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`)

    }

  }
  return (
    <div className='heroBanner'>
      {!loading && <div className="backdrop-img">
        <Img src={background} alt="" />
      </div>}

      <div className="opacity-layer">
        
      </div>
      <ContentWrapper>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className='title'> Welcome</span>
            <span className="subTitle">Millions of Movies , TV shows and people to discover, Explore now</span>
            <div className="searchInput">
              <input type="text"
                placeholder='Search for movie or tv show...'
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBanner