import React from 'react'


/**
 * Recursive List Component
 * 
 * TODO: Remove the currentItemIndex if not needed
 * 
 * @param {Object} props - Component props
 * @param {Array} data - Data to be displayed in the list
 * @param {React.JSX.Element} ItemComponent - Component to be used for each item in the list
 * @param {Object} style - Custom styles to be applied to the list container
 * @param {string} containerClassName - Custom classes to be applied to the list container
 * @param {number} depth - Depth of the current list
 * @param {string} currentItemIndex - Index of the current item in the list
 * @returns {React.JSX.Element} - Rendered list component
*/


const RecursiveList = React.memo(({ data, ItemComponent, containerClassName, style, depth, currentItemIndex }) => {
    return (
        <ul style={style ?? {}} className={containerClassName ?? "flex flex-col"}>
            {Array.isArray(data) && (data?.map((element, index) => {
                return (
                    <React.Fragment key={index}>
                        <ItemComponent pathIndex={index.toString()} depth={1} data={element} />
                        {element.subItems?.map((subElement, subIndex) => {
                            return <RecursiveList depth={1}
                                key={`${index}.${subIndex}`}
                                ItemComponent={ItemComponent}
                                containerClassName={containerClassName}
                                style={style}
                                currentItemIndex={`${index}.${subIndex}`}
                                data={subElement}
                            />
                        })}
                    </React.Fragment>
                )
            }))}
            {!Array.isArray(data) && (
                <React.Fragment>
                    <ItemComponent pathIndex={currentItemIndex} depth={depth} data={data} />
                    {data.subItems?.map((subElement, subIndex) => {
                        return <RecursiveList depth={depth + 1}
                            key={`${currentItemIndex}.${subIndex}`}
                            currentItemIndex={`${currentItemIndex}.${subIndex}`}
                            data={subElement}
                            ItemComponent={ItemComponent}
                            containerClassName={containerClassName}
                            style={style}
                        />
                    })}
                </React.Fragment>
            )}
        </ul>
    )
})

export default RecursiveList