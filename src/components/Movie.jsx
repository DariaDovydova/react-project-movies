import React from 'react'

function Movie({Title, Year, Id, Type, Poster}) {
  return (
    <div id={Id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {
          Poster === 'N/A' ? 
          <img className="activator" src={`https://via.placeholder.com/300x450?text=${Title}`} alt=''
          />
          :
          <img className="activator" src={Poster} alt=""  />
        }
        
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{Title}</span>
        <p>{Year} <span className="right">{Type}</span></p>
      </div>
    </div>
  )
}

export { Movie };