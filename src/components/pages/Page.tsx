import React from 'react';
import {PageType} from "../../data/dataState";
import {useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PagePropsType = {
    pages: PageType[]
}

export const Page: React.FC<PagePropsType> = ({pages}) => {
    const params = useParams<'id'>()
    console.log(params.id)

    const location = useLocation()
    console.log(location)
    return (
        <div>
            {location.pathname === '/page/0' && <div>SECRET TEXT</div>}
            {pages[Number(params.id)]
                ? <div>
                    <h3>{pages[Number(params.id)].heading}</h3>
                    {pages[Number(params.id)].about}
                </div>
                : <Error404/>
            }

        </div>
    );
};

