import List from "../components/List";
import React from "react";
export default {
    component: () => {
        return <List data={
            [
                {
                    label: "Dev",
                    childrens: [
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
                    childrens: [
                        {
                            label: "YOLO",
                            childrens: [
                                {
                                    label: "yolo v1",
                                    childrens: [
                                        {
                                            label: "yolo v1.2",
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
}

export const defaultOne = {
    args: {}
}