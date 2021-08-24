import React, { useState } from 'react';
import {BiPlus, BiMinus} from 'react-icons/bi';

const Questions = ({ data }) => {
    const [moreInfo, setMoreInfo] = useState(false)
    const {title, info} = data;
    return (
        <article>
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={() => setMoreInfo(!moreInfo)}>{moreInfo ? <BiMinus></BiMinus> : <BiPlus></BiPlus>}</button>
            </header>
            {moreInfo && <p>{info}</p>}
        </article>
    )
}

export default Questions
