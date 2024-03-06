import React, { FC } from "react";
import List from "../components/List.jsx";

const ItemComponent = ({ data, depth, pathIndex }) => {
    return (
        <li className="w-full rounded-md border border-indigo-200 text-white bg-indigo-400 py-1.5 px-3">
            {`value => ${data.label} pathIndex => ${pathIndex} depth => ${depth}`}
        </li>
    )
}
const Comp = () => {
    // 
    return <List containerClassName="flex flex-col w-52 bg-gray-100 gap-y-2" ItemComponent={ItemComponent} data={
        [
            {
                label: "Dev",
                subItems: [
                    {
                        label: "oracle"
                    },
                    {
                        label: "sql"
                    },
                ]
            },
            {
                label: "AI",
                subItems: [
                    {
                        label: "YOLO",
                        subItems: [
                            {
                                label: "yolo v1",
                                subItems: [
                                    {
                                        label: "yolo v1.2",
                                        subItems: [{
                                            label: "yolo v1.2.1"
                                        }]
                                    }
                                ]
                            },
                            {
                                label: "yolo v2"
                            }
                        ]
                    },
                    {
                        label: "MLP"
                    },
                ]
            }
        ]
    } />
}
export default {
    component: Comp
}

export const defaultOne = {
    args: {}
}