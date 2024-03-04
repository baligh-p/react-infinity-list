import React from 'react'


const List = ({ data, Component, key }) => {
    return (
        <ul className='flex flex-col'>
            {Array.isArray(data) && (data?.map((element, index) => {
                return <React.Fragment key={key !== undefined ? `${key}_${index}` : index}>
                    <li>{element.label}</li>
                    {element.childrens?.map((subElement, subIndex) => {
                        return <List key={subIndex} data={subElement} />
                    })}
                </React.Fragment>
            }))}
            {!Array.isArray(data) && (
                <React.Fragment>
                    <li>{data.label}</li>
                    {data.childrens?.map((subElement, subIndex) => {
                        return <List key={subIndex} data={subElement} />
                    })}
                </React.Fragment>
            )}
        </ul>
    )
}

export default List