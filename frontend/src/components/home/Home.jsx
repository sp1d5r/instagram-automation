import React from "react";
import {WelcomeDiv} from "../dashboard/DashboardStyle";
import styled from "styled-components";

export class Home extends React.Component {

    render() {
        const TitleDiv = styled.div`
          display: flex;
          padding: 2%;
          justify-content: center;
          box-shadow: 0px 5px 3px -5px #111;
        `;

        const NormalText = styled.p`
          display: inline-block;
        `;
        const BoldText = styled.p`
          display: inline-block;
          font-weight: bold;
          color: #ffebfa;
        `;

        return (<WelcomeDiv>
            <TitleDiv>
                <h3>Instamation</h3>
            </TitleDiv>
            <div style={{margin: "2%"}}>
                <NormalText>
                    If you don't know what Instamation is, I envy you. Life is a game, let's make instagram automation
                    a game too. Sounds simple? Not quite.
                </NormalText>
                <NormalText>
                    There are two teams, <BoldText>Researchers</BoldText> and <BoldText>LabRats</BoldText>
                    Let's be clear you are a Researcher, but if you use instagram you can also be a labrat. Your
                    goal is to try and get as much data about these labrats as possible.
                </NormalText>
                <NormalText>
                    If your goal is to get as many followers as possible, your goal is to catch as many labrats as
                    possible. It's that simple, there are different ways to get followers, you can try the follow
                    for unfollow method but you many be wondering "Okay, Eli. I hear you, where are the pools of
                    rats that I can find my labrats from?"
                </NormalText>
                <NormalText>
                    There are several pools where you can locate rats. From peoples follows, following, or even
                    engagement via likes or comments. Okay. that's enough of an introduction. Just have a go and experiment.
                </NormalText>
            </div>
        </WelcomeDiv>)
    }
}
