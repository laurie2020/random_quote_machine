import React from 'react';
import '../style/style.css'

export default class App extends React.Component{

    state={
        number : Math.floor(Math.random() * 5),
        quotes: [
            {
                quote: "Those who dream by day are cognizant of many things which escape those who dream only by night.",
                author: "Edgar Allan Poe"
            },
            {
                quote: "Say not, 'I have found the truth,' but rather, 'I have found a truth.'",
                author: "Kahlil Gibran"
            },
            {
                quote: "Always bear in mind that your own resolution to succeed is more important than any one thing.",
                author: "Abraham Lincoln"
            },
            {
                quote: "What if nothing exists and we're all in somebody's dream? Or what's worse, what if only that fat guy in the third row exists?",
                author: "Woody Allen"
            },
            {
                quote: "It was no wonder that people were so horrible when they started life as children.",
                author: "Kingsley Amis"
            }
        ]
    }

    handleClick = () => {
        this.setState({
            number: Math.floor(Math.random() *5)
        })
    }

    render(){


        return(
            <div id="quote-box">
                <p id="text">{this.state.quotes[this.state.number].quote}</p>
                <p id="author">- {this.state.quotes[this.state.number].author}</p>
                <button id="new-quote" onClick={this.handleClick}>NEW QUOTE</button>
                <p>
                    <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a>
                </p>
                
            </div>
        );
    }
}