declare module 'react-infinity-list' {
    import * as React from 'react';


    type ItemType = { [key: string | number]: any, subItems?: ItemType[] }
    type ItemComponentProps = { data: ItemType, depth: number, pathIndex: string }

    interface ListComponentProps {
        containerClassName?: string
        style?: React.CSSProperties
        data: ItemType[]
        ItemComponent: React.FC<ItemComponentProps>
    }


    const List: React.FC<ListComponentProps>
    export { List }

}