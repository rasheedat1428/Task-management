import React from 'react'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className="header">
        <h1> Welcome, {title}</h1>
        <Button />
    </header>
  );
};
 Header.defaultProps = {
     title: "Task Tracker",
 };

export default Header
