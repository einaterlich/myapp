import React from 'react'
import '../../App.css';
import './About.css'

function AboutUs() {
  return (
    <div className='about'>
        <section class="features-section">
        <header>
            <h2>Our Features</h2>
            <p>Discover the amazing features that make our service stand out.</p>
        </header>
        <div class="cards-container">
            <div class="card">
                <div class="icon"><i class="fas fa-bolt"></i></div>
                <h3>Fast</h3>
                <p>Get your account back within 24 hours.</p>
            </div>
            <div class="card">
                <div class="icon"><i class="fas fa-shield-alt"></i></div>
                <h3>Trust</h3>
                <p>No password needed, just your username for recovery.</p>
            </div>
            <div class="card">
                <div class="icon"><i class="fas fa-lock"></i></div>
                <h3>Security</h3>
                <p>Your account is protected with top-notch security measures.</p>
            </div>
        </div>
    </section>
        
    </div>
  )
}

export default AboutUs