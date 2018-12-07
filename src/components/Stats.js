import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../constants/Colors'
import { getKudosesStats } from "../api/KudosApi";

class Stats extends Component {
    state = {
        ranking: []
    }
    componentWillMount () {
        getKudosesStats()
            .then(ranking => ranking.sort(this.compare))
            .then(ranking => {
                this.setState({
                    ranking
                })
            })
    }
    // would return b.totalPoints - a.totalPoints be enough?
    compare(a, b) {
        if (a.totalPoints > b.totalPoints)
            return -1;
        else if (a.totalPoints < b.totalPoints)
            return 1;
        return 0;
    }
    calculateBar (points) {
        // very unsafe to assume there is some result ;)
        const bestScore = this.state.ranking[0].totalPoints
        return points > 0 ? (points / bestScore) * 100 : 0
    }
    render() {
        return (
            <StyledList>
                {
                    this.state.ranking
                        .map((kudos, index) =>
                        <li key={index}>
                            {/* Great! I love this approach, very flexible; would be great to see similar in Card.js */}
                            <Points>{kudos.totalPoints}</Points>
                            <Bar best={!index} height={this.calculateBar(kudos.totalPoints)}/>
                            <Name>{kudos.name}</Name>
                        </li>
                    )
                }
            </StyledList>
        );
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

export default Stats;