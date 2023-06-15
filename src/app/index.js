import React, { useState, useEffect, useRef } from "react"
import * as C from './styles'
import { FaSearch } from 'react-icons/fa'

import Photo from '../components/Photo'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function StockPhoto() {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [photos, setPhotos] = useState([])
  const mounted = useRef(false)
  const [newImages, setNewImages] = useState(false)

  const fetchImages = async () => {
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }

    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })
      setNewImages(false)
      setLoading(false)
    } catch (error) {
      setNewImages(false)
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (!newImages) return
    if (loading) return
    setPage((oldPage) => oldPage + 1)
    // eslint-disable-next-line
  }, [newImages])

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
  },[])
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query) return
    if (page === 1) {
      fetchImages()
    }
    setPage(1)
  }

  return (
  <C.ContainerMain>
    <C.SectionForm>
        <C.Form>
            <input
              type='text'
              placeholder='search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='form-input'
            />
            <button type="submit" className="form-btn" onClick={handleSubmit}>
              <FaSearch />
            </button>
        </C.Form>
    </C.SectionForm>
      <C.SectionPhotos>
          <C.DivCenter>
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />
          })}
          </C.DivCenter>
          {loading && <h2 className="loading">Loading...</h2>}
      </C.SectionPhotos>
  </C.ContainerMain>
  )
}

export default StockPhoto
