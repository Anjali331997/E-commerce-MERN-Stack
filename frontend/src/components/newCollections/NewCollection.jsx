import React from 'react'
import './NewCollections.css'
import new_collection from '../Assests/new_collections'
import Items from '../items/Items'

const NewCollection = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <div className='line'></div>
            <div className="collections">
                {
                    new_collection.map((item, index) => {
                        return (
                            <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewCollection