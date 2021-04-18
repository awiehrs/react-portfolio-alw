// Import React
import React from 'react';

// Import stylesheet generating minimum height measurement
import './style.css';

// Create and export wrapper component
export default function Wrapper(props) {
  return <main className="p-2">{props.children}</main>
}