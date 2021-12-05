import React from "react";
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section({ description,
    backgrounImg,
    title,
    leftBtnText,
    rightBtnText }) {
    return (
        <Wrap bgImg={backgrounImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttoms>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButtom>
                            {leftBtnText}
                        </LeftButtom>
                        {rightBtnText &&
                            <RighButtom>
                                {rightBtnText}
                            </RighButtom>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttoms>
        </Wrap>
    )

}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: not-repeat;
    background-image: url('/images/model-3.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImg}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`
const LeftButtom = styled.div`
    background-color: #474545;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`
const RighButtom = styled(LeftButtom)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttoms = styled.div`
    display: flex;
    flex-direction: column;
`