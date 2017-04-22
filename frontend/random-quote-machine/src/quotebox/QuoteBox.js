import React, { Component } from 'react';
import $ from 'jquery';


let colors = require('../data/colors.json');
let quotes = require('../data/quotes.json');

class QuoteBox extends Component{
  constructor(props){
    super(props);

    this.state = {
        color : "#8a2be2"
    };
    console.log(colors[3]);
    this.changeQuote = this.changeQuote.bind(this);
  }

changeQuote(){
    let colorsIndex = Math.floor( Math.random () * (113 - 1 + 1)) + 1;
    let quotesIndex = Math.floor( Math.random () * (100 - 1 + 1)) + 1;
    $('.QuoteBox').css("background-color",colors[colorsIndex]);
    $('.quote').html(quotes[quotesIndex][0]);
    $('.author').html(quotes[quotesIndex][1]);
}

render(){
    const submit = "Next";
    return(
        <div className="QuoteContainer">
           <div className="QuoteBox">
              <blockquote className="quote">Contains Quote</blockquote>
              <p className="author">Prints Author name</p>
              <a href="#" className="tweet">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <button className="nextButton" onClick={this.changeQuote}>{submit}</button>
           </div>
        </div>
    );
  }
}

export default QuoteBox