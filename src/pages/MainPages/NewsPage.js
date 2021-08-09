import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'


const NewsPage = () => {
    const { news } = useSelector(state => state.news)
    const [selected, setSelected] = useState(0)
    if (news.loading) return null

    const moveNews = (index) => {
        if (index < 0) {
            return
        }
        if (index >= news.data.length) {
            return
        }
        setSelected(index)

    }
    return (
        <div className="main-container">
            {selected > 0 && <div className="move-btn" onClick={() => moveNews(selected - 1)}> <ArrowBackIosIcon style={{ fontSize: 80 }} /> </div>}
            <div className="main-view">

                {selected > 0 && <a className="news-container news-prev" href={news.data[selected - 1].link} >
                    <div className="img-wrapper">
                        <img src={news.data[selected - 1].thumbnail} alt="" className="main-img" />
                    </div>
                    <div className="article">
                        <div className="article-title">
                            {news.data[selected - 1].title}
                        </div>
                        <div className="article-summary">
                            {news.data[selected - 1].summary}
                        </div>
                    </div>
                </a>
                }
                <a className="news-container" href={news.data[selected].link} target="_blank" rel="noreferrer">
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
                {selected < news.data.length - 1 && <a className="news-container news-next" href={news.data[selected + 1].link}>
                    <div className="img-wrapper">
                        <img src={news.data[selected + 1].thumbnail} alt="" className="main-img" />
                    </div>
                    <div className="article">
                        <div className="article-title">
                            {news.data[selected + 1].title}
                        </div>
                        <div className="article-summary">
                            {news.data[selected + 1].summary}
                        </div>
                    </div>
                </a>
                }

            </div>
            {selected < news.data.length - 1 && <div className="move-btn" onClick={() => moveNews(selected + 1)}> <ArrowForwardIosIcon style={{ fontSize: 80 }} /> </div>}
        </div>

    )
}

export default NewsPage