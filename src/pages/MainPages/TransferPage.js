import React from 'react';
import messi from '../../static/img/messi.webp';



const TransferItem = ({ item }) => {
    return (
        <div className="transfer-item">
            {item.pic &&
                <img src={item.pic} />
            }
            <div className="transfer-info">
                <div>Name: <span>{item.name}</span></div>
                <div>Age: <span>{item.age}</span></div>
                <div>Previous Team: <span>{item.prevTeam}</span></div>
                <div>Estimated Price: <span>$ 1Million</span></div>
                <div>Position: <span>{item.position}</span></div>
            </div>
        </div>
    );
}

const TransferPage = () => {
    const Transfer = [
        {
            name: 'Messi',
            age: 32,
            prevTeam: 'FCB',
            position: "Forward",
            out: false,
            pic: messi
        },
        {
            name: 'Messi',
            age: 32,
            prevTeam: 'FCB',
            position: "Forward",
            out: false,
            pic: messi
        }, {
            name: 'Messi',
            age: 32,
            prevTeam: 'FCB',
            position: "Forward",
            out: false,
            pic: messi
        }
    ]
    return (
        <div>
            <div className="transfer-wrapper">
                <div className="transfer-type">
                    19/20 Winter
                </div>
                <div className="transfer-list">
                    {
                        Transfer.map(item => (
                            <TransferItem item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TransferPage;