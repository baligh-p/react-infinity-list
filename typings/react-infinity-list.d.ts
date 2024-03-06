

declare module 'react-infinity-list' {
    import * as React from 'react';


    export type ItemType = { [key: string | number]: any, subItems?: ItemType[] }
    export type ItemComponentProps = { data: ItemType, depth: number, pathIndex: string }

    export interface ListComponentProps {
        containerClassName?: string
        style?: React.CSSProperties
        data: ItemType[]
        ItemComponent: React.FC<ItemComponentProps>
    }


    export const List: React.FC<ListComponentProps>

}