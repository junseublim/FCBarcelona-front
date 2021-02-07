import React from 'react';
import styled from 'styled-components';
import UpcomingItem from './UpcomingItem';

const UpcomingListWrapper = styled.div`

`;



const UpcomingList = () => {
    return (
        <UpcomingListWrapper>
            <UpcomingItem/>
            <UpcomingItem/>
            <UpcomingItem/>
        </UpcomingListWrapper>
    )
}
export default UpcomingList;