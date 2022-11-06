import React from 'react'
import Button from './Button'

const Header = ({title}) => {
  return (
    <Header className="header">
        <h1>{title}</h1>
        <Button />
    </Header>
  );
};
Header.defaultProps = {
    title: "Task Tracker",
};

export default Header
