import React from 'react'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'
import patriclesConfig from './config/particle-config'
import './home.css'
import inter from './inter.png'
import prob from './problem.png'
import puz from './puzzle.png'

export default function Home(props) {

    return (
        <div className="home">
            <Particles
                params={patriclesConfig} />
            <div className="maincontent" style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.6vw', fontWeight: 'lighter', color: '#263238' }}>Space Helps You</h1>
                <h2 style={{ fontSize: '3.6vw', fontWeight: 'bold', color: '#263238' }}>Build Bright Future</h2>
            </div>
            <div className="bottom_box" style={{ textAlign: 'center' }}>
                <div className="imgContainer"><img src={inter} alt="Interview" />
                    <h3 className='hh3'>Interview</h3>
                    <button class="btn info">Interview</button>
                </div>
                <div className="imgContainer pull"><img src={prob} alt="Problem" />
                    <h3 className='hh3'>Problem Solving</h3>
                    <button class="btn info">Problem Solving</button>
                </div>
                <div className="imgContainer pull">
                    <img src={puz} alt="Puzzle" />
                    <h3 className='hh3'>Puzzles</h3>
                    <button class="btn info">Puzzles</button>
                </div>
                <div><Link to='/'>LogOut</Link></div>
            </div>
        </div>
    )
}

/*
<div className="maincontent" style={{ textAlign: 'center' }}>
                <h1>Home Page</h1>
                <h2>Name: {props.user.name}</h2>
                <h2>Email: {props.user.email}</h2>
                <Link to='/'>LogOut</Link>
            </div>

*/