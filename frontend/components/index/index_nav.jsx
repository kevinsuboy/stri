import React from 'react';
import { Link } from 'react-router-dom';

export default ({ page, maxPage, handleClick, handlePage, urlHead }) => {
    // const { posts, user } = props;
    // debugger
    const pages = [];
    let prev = null;
    let next = null;
    if (page !== 1) {
        prev = <li className="index-prev-btn" onClick={handleClick('prev')}>
            prev
            </li>
    }
    if (page < maxPage && maxPage >= 1) {
        next = <li className="index-nxt-btn" onClick={handleClick('next')}>
            next
            </li>
    }
    for (let i = 0; i < maxPage; i++) pages.push(
        <li><Link to={`${urlHead}/${i + 1}`} key={i} className={(page === i + 1 ? "page-selected" : "") + " index-pg"}>{i + 1}</Link></li>
    );
    if (page > maxPage) handlePage(maxPage)
    return <div className="index-nav">
        <ul className="index-pages">
            {prev ? prev : <div className="empty"></div>}
            {pages}
            {next ? next : <div className="empty"></div>}
        </ul>
    </div>

}