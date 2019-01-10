import React, { Component } from 'react';
import styled from 'styled-components'
import Colors from '../constants/Colors'

import placeholder from '../assets/user-placeholder.png'

class Card extends Component {
    render() {
        const { givenTo, description, from, givenToAvatar, fromAvatar } = this.props.kudos

        return (
            <StyledCard>
                <Row>
                    <h6>
                        <KudosTitle>KUDOS </KudosTitle>
                        for
                        <KudosMan> {givenTo && givenTo[0] === '@' ? givenTo.substring(1, givenTo.length) : givenTo}</KudosMan>
                    </h6>
                    <Avatar image={givenToAvatar ? givenToAvatar.image_24 : placeholder}></Avatar>
                </Row>
                <KudosContent>
                    {description}
                </KudosContent>
                <Row>
                    <KudosAuthor>
                        by <KudosMan>{from}</KudosMan>
                    </KudosAuthor>
                    <Avatar mini image={fromAvatar ? fromAvatar.image_24 : placeholder}></Avatar>
                </Row>
            </StyledCard>
        );
    }
}

const StyledCard = styled.li`
  width: 100%;
  background: ${Colors.White};
  box-sizing: border-box;
  border-radius: 10px;
  min-height: 50px;
  margin-top: 20px;
  padding: 20px;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const KudosTitle = styled.strong`
  font-weight: bold;
  font-size: 14px;
  margin-right: 3px;
`
const KudosMan = styled.span`
  color: ${Colors.GlacierBlue}
`
const KudosContent = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 8px 0 15px;
`
const KudosAuthor = styled.p`
  font-size: 12px;
`
const Avatar = styled.div`
  height: ${props => props.mini ? '20px' : '25px'};
  width: ${props => props.mini ? '20px' : '25px'};
  margin: ${props => props.mini ? '0 2.5px' : '0'};
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
`

export default Card;