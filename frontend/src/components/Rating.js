import React from 'react'

export default function Rating(props) {
    // eslint-disable-next-line no-unused-vars
    const {rating, numReviews}=props
  return (
    <div className="rating">
    <span>
        <i 
            className={
                rating>=1
                ?"fa fa-star"
                :rating>=0.5
                ?"fa fa-star-half-o"
                :"fa fa-star-o"
            }
        ></i>
    </span>
    <span>
        <i 
            className={
                rating>=1
                ?"fa fa-star"
                :rating>=0.5
                ?"fa fa-star-half-o"
                :"fa fa-star-o"
            }
        ></i>
    </span>
    <span>
        <i 
                className={
                    rating>=1
                    ?"fa fa-star"
                    :rating>=0.5
                    ?"fa fa-star-half-o"
                    :"fa fa-star-o"
                }
            ></i>
    </span>
    <span>
        <i 
            className={
                rating>=1
                ?"fa fa-star"
                :rating>=0.5
                ?"fa fa-star-half-o"
                :"fa fa-star-o"
            }
        ></i>
    </span>
    <span>
        <i 
                className={
                    rating>=1
                    ?"fa fa-star"
                    :rating>=0.5
                    ?"fa fa-star-half-o"
                    :"fa fa-star-o"
                }
            ></i>
    </span>
    <span>{numReviews + ' reviews'}</span>
  </div>
  )
}
