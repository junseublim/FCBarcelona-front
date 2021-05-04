import React from 'react';
import styled from 'styled-components';
import UpcomingItem from './UpcomingItem';
import { useSelector } from 'react-redux';

const UpcomingListWrapper = styled.div`
`;



const UpcomingList = () => {
    const { match } = useSelector(state => state.match);
    if (match.loading) return null;

    return (
        <UpcomingListWrapper>
            {match.data.length && match.data.map(item => (
                <UpcomingItem match={item} />
            ))}

        </UpcomingListWrapper>
    )
}
export default UpcomingList;