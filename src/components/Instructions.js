import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from "../constants/Colors";

class Instructions extends Component {
    render() {
        return (
            <StyledList>
                <h4>4 steps to be a hero!</h4>
                <ul>
                    <li>
                        <Number>1</Number>
                        <Description>
                            Log in to Slack
                        </Description>
                    </li>
                    <li>
                        <Number>2</Number>
                        <Description>
                            Open random conversation
                        </Description>
                    </li>
                    <li>
                        <Number>3</Number>
                        <Description>
                            Type <Code>/kudos&nbsp;@somebody; thank&nbsp;you for&nbsp;being&nbsp;awesome;</Code>
                        </Description>
                    </li>
                    <li>
                        <Number>4</Number>
                        <Description>
                            You're a hero!
                        </Description>
                    </li>
                </ul>
            </StyledList>
        );
    }
}

const StyledList = styled.ul`
   max-width: 600px;
   margin: 20px auto;
   background: ${Colors.White};
   border-radius: 20px;
   padding: 40px;
   border: 2px solid ${Colors.Ice};
   li {
    display: flex;
    align-items: center;
    padding: 20px;
   }
   h4 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
   }
`
const Number = styled.div`
   color: ${Colors.Banana};
   font-size: 30px;
   font-weight: bold;
   margin-right: 30px;
`
const Description = styled.div`
   font-size: 16px;
   text-align: left;
`
const Code = styled.span`
   color: ${Colors.GlacierBlue}
`
export default Instructions;
