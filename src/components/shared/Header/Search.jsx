import Link from 'next/link'
import React from 'react'

let searchProducts = ''
const Search = () => {
  return (
    <div className='search_wrapper'>
      <input>
      </input>
      <i
        // onClick={() => handlePush()}
        className="fas fa-search"
      ></i>
      <div className={`search_overlay ${searchProducts.length == 0 && "d-none"}`}>
        <div className='search_products'>
          {/* {
            searchProducts?.map((products, index) => {
              return (
                <Link key={index} href={`/product/${products.slug}`}>
                  <div className="items">
                  <img src={product.thumbnail} alt="Product"></img>
                  <h5>{product.name}</h5>
                  <div className="product-price">
                    {product?.discount?.value > 0 ? (
                      <>
                        <span className="old-price">${product.price}</span>
                        {product.discount.discountType === "flat" ? (
                          <span className="new-price">
                            ${product.price - product.discount.value}
                          </span>
                        ) : (
                          <span className="new-price">
                            $
                            {product.price -
                              Math.floor(
                                product.price * (product.discount.value / 100)
                              )}
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="new-price">${product.price}</span>
                    )}
                  </div>
                </div>
              </Link>
            );
            })
          } */}
        </div>
      </div>
    </div>
  )
}

export default Search
