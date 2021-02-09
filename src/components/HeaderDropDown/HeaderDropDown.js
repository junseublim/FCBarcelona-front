import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const HeaderDropDownWrapper = styled.div`
    visibilibity: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 1;
`;

const HeaderDropDownListWrapper = styled.div`
    display: none;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: normal;
`;

const HeaderDropDown = ({type}) => {
     const [droplist, setDroplist] = useState([]);
     useEffect( () => {
        if (type === 0 ){
            setDroplist(['GoalKeepers', 'Defenders', 'Midfielders', 'Fowards']);
        }
        else if (type === 1) {
            setDroplist(['Previous', 'Upcoming']);
        }
        else if (type === 2) {
            setDroplist(['20/21 Winter', '20/21 Summer', '19/20 Winter', '19/20 Summer']);
        }
        else if (type === 3) {
            setDroplist(['News', 'SNS', 'Reporters']);
        }
     }, [])
    return (
        <HeaderDropDownWrapper className="content">
            {
                droplist.map(item => (
                    <HeaderDropDownListWrapper className="link">
                        {item}
                    </HeaderDropDownListWrapper>
                ))
            }
        </HeaderDropDownWrapper>
    );
}

export default HeaderDropDown;