import React from 'react';

export const VideoList = props => {
    return <ul className='col-md-4 list-group'>{props.videos.length}</ul>;
};
