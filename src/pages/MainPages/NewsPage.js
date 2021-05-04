import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const NewsPage = () => {
    const { news } = useSelector(state => state.news);
    const [selected, setSelected] = useState(0);
    if (news.loading) return null;

    const moveNews = (index) => {
        if (index < 0) {
            return;
        }
        if (index >= news.data.length) {
            return;
        }
        setSelected(index);

    }
    return (
        <div className="main-view">
            <div className="move-btn" onClick={() => moveNews(selected - 1)}> <ArrowBackIosIcon style={{ fontSize: 80 }} /> </div>
            <a className="news-container" href={news.data[selected].link}>
                <div className="img-wrapper">
                    <img src={news.data[selected].thumbnail} alt="" className="main-img" />
                </div>
                <div className="article">
                    <div className="article-title">
                        {news.data[selected].title}
                    </div>
                    <div className="article-summary">
                        {news.data[selected].summary}
                    </div>
                </div>
            </a>
            <div className="move-btn" onClick={() => moveNews(selected + 1)}> <ArrowForwardIosIcon style={{ fontSize: 80 }} /> </div>
        </div>


    )
}

export default NewsPage;