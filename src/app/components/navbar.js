"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import axios from 'axios'

const Navbar = () => {

  const [user, setUser] = useState({})

  useEffect(() => {
    const loggedUser = sessionStorage.getItem('loggedUser')
    console.log('loggedUser', loggedUser)
    setUser(loggedUser || {name: 'avatar'})
  },  [])

const styles = {
  header: {"width": "100dvw", "height": "50px", "display": "flex", "justifyContent": "space-around", "alignItems": "center"},
  headerRight: {"display": "flex", "alignItems": "center", "gap": "10px"},
  input: {"height": "60%", "width":"150px"},
  userIconContainer: { "position": "relative", "height": "40px", "width": "40px"},
  aside: {"position": "absolute", "zIndex": 2, "left": "50%", "transform": "translateX(-50%)", "bottom": "-300%", "width": "auto", "height": "auto", "padding": "3px", "backgroundColor": "white", "color": "black"},
  asideItem: {"height": "100%", "width": "auto", "fontSize": "18px", "textWrap": "nowrap", "textAlign": "center", "padding": "3px"}
}

  if(user?.exist){
    return (
      <header className="bg-white" style={styles.header}>
        <div>
          <Image src='./next.svg' width={40} height={40} alt="logo" />
        </div>
        <div style={styles.headerRight}>
          <input type="text" placeholder="search" style={styles.input} />
          <div style={styles.userIconContainer}>
            <Image src='./next.svg' width={40} height={40} alt="user" />
            <aside style={styles.aside}>
              <p style={styles.asideItem}>{user?.name}</p>
              <p style={styles.asideItem}>LogOut</p>
            </aside>
            </div>
        </div>
        
      </header>
    )
  }else{
    return (
      <header style={styles.header}>
        <div>
          <Image src='./next.svg' width={40} height={40} alt="logo" />
        </div>
        <div style={styles.headerRight}>
          <input type="text" placeholder="search" style={styles.input} />
          <div style={styles.userIconContainer}>
            <Image src='./next.svg' width={40} height={40} alt="user" />
            <aside style={styles.aside}>
              <p style={styles.asideItem}>{user?.name}</p>
              <p style={styles.asideItem}>Sign in</p>
              <p style={styles.asideItem}>Log in</p>
            </aside>
          </div>
        </div>
      </header>
    )
  }
};

export default Navbar;
