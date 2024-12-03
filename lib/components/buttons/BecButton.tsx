import React from 'react';

interface BecButtonsProps {
    children: React.ReactNode
}

const BecButton = ({children}: BecButtonsProps): React.ReactNode => {
    return (
        <button className='bg-red-500'>{children}</button>
    );
}

export { BecButton };