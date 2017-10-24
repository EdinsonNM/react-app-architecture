import React, { Component } from 'react';

const siteKey = "x";

export default class Captcha extends Component {
    verifyCallback() { }
    
    expiredCallback() { }

    render() {
        return (
            <div className="g-recaptcha" 
                 data-sitekey="6LedJiATAAAAAJvpLFxW9dSiEGu8rGyoOIuTsvtg"
                 data-size="normal">
            </div>
        );
    }
}