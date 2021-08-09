import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'


const TransferItem = ({ item }) => {

    return (
        <div className="transfer-item">
            {item.isIn
                ? <ArrowBackIcon color="primary" fontSize="large" style={{ padding: 10, position: "absolute", right: 0 }} />
                : <ArrowForwardIcon color="error" fontSize="large" style={{ padding: 10, position: "absolute", right: 0 }} />
            }
            <div className="transfer-info">
                <div>Name: <span>{item.name}</span></div>
                {item.isIn
                    ? (<div>From: <span>{item.from}</span></div>)
                    : (<div>To: <span>{item.to}</span></div>)
                }
                <div>Fee: <span>{item.fee}</span></div>
                <div>Position: <span>{item.position}</span></div>
                <div>Season: <span>{item.season}</span></div>
            </div>
        </div>
    )
}

const TransferPage = () => {
    const { season1, season2 } = useParams()
    const { transfers } = useSelector(state => state.transfers)
    const [transferList, setTransferList] = useState([])
    useEffect(() => {
        if (!season1) setTransferList(transfers.data)
        else {
            const season = season1.substr(0, 2) + '/' + season1.substr(3, 2) + ' ' + season2
            setTransferList(transfers.data.filter(item => item.season === season))
        }

    }, [season1, season2, transfers])
    return (
        <div>
            <div className="transfer-wrapper">
                <div className="transfer-list">
                    {
                        transferList.map(item => (
                            <TransferItem item={item} key={item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TransferPage