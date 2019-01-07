import React, { Component } from 'react';
import styled from "styled-components";
import Colors from "../constants/Colors";

class StatsList extends Component {
    calculateBar (points) {
        // const bestScore = thxis.state.ranking[0].totalPoints
        const bestScore = 9 // TODO

        return points > 0 ? (points / bestScore) * 100 : 0
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will up', nextProps)
    }

    render () {
        const { stats } = this.props
        return (
            <StyledList>
                {
                    stats.map((kudos, index) =>
                        <li key={index}>
                            <Points>{kudos.totalPoints}</Points>
                            <Bar best={!index} height={this.calculateBar(kudos.totalPoints)}/>
                            <Name>{kudos.name}</Name>
                        </li>
                    )
                }
            </StyledList>
        )
    }
}

const StyledList = styled.ul`
   margin: 50px auto 0;
   display: flex;
   overflow-x: scroll;
   padding: 20px 20px 60px;
   li {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
   }
`
const Bar = styled.div`
  width: 100px;
  background: ${Colors.GlacierBlue};
  height: calc(${props => props.height}%);
  margin: 10px;
  position: relative;
`
const Points = styled.div`
  width: 100%;
  text-align: center;
`
const Name = styled.div`
  width: 100%;
  text-align: center;
`

export default StatsList
