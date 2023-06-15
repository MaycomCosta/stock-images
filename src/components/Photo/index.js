import React from 'react'

import * as C from './styles'

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <C.Article className='photo'>
      <img src={regular} alt={alt_description} />
      <C.ContainerInfo className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url} target="_blank" rel="noreferrer">
          <img src={medium} alt='' className='user-img' />
        </a>
      </C.ContainerInfo>
    </C.Article>
  )
}

export default Photo
