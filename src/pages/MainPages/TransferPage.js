import React from 'react';
import messi from '../../static/img/messi.webp';
import { useSelector } from 'react-redux';



const TransferItem = ({ item }) => {

    return (
        <div className="transfer-item">
            <div className="transfer-info">
                <div>Name: <span>{item.name}</span></div>
                {item.isIn
                    ? (<div>From: <span>{item.from}</span></div>)
                    : (<div>To: <span>{item.to}</span></div>)
                }
                <div>Fee: <span>{item.fee}</span></div>
                <div>Position: <span>{item.position}</span></div>
            </div>
        </div>
    );
}

const TransferPage = () => {
    const { transfers } = useSelector(state => state.transfers);
    return (
        <div>
            <div className="transfer-wrapper">
                <div className="transfer-type">
                    19/20 Winter
                </div>
                <div className="transfer-list">
                    {
                        transfers.data.map(item => (
                            <TransferItem item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TransferPage;