import React from 'react'

function Home()
{
    return(
        <div>
            <div className='Add to cart'>
                <img src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png"/>
             </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80' />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        Harry Potter and the  Order of The Phoenix
                    </span>
                    <span>
                        Price: $50
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home