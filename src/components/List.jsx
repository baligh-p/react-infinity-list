import React from 'react'
import "./../index.css"
import RecursiveList from './RecursiveList.jsx'

/**
 * List to display a list of items in a recursive manner
 * 
 * @param {Object} props - Component props
 * @param {Array} data - Data to be displayed in the list
 * @param {React.JSX.Element} ItemComponent - Component to be used for each item in the list
 * @param {Object} style - Custom styles to be applied to the list container
 * @param {string} className - Custom classes to be applied to the list container
 * @returns {React.JSX.Element} - Rendered list component
*/

const List = React.memo(({ data, ItemComponent, containerClassName, style }) => {
    return (
        <RecursiveList data={data} ItemComponent={ItemComponent} containerClassName={containerClassName} style={style} />
    )
})





export default List