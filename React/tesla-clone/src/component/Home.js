import React from "react";
import styled from "styled-components"
import Section from "./Section";

function Home() {

    return (
        <Container>
            <Section
                title="Model S"
                description="order Online for Touchless Delivery"
                backgrounImg="model-s.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Model y"
                description="order Online for Touchless Delivery"
                backgrounImg="model-y.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />
            <Section
                title="Model x"
                description="order Online for Touchless Delivery"
                backgrounImg="model-x.jpg"
                leftBtnText="custom order"
                rightBtnText="existing inventory"
            />

            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less  Than a New Roof Plus Solar Panels"
                backgrounImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            /> 

            <Section
                title="Accesories"
                description=""
                backgrounImg="accessories.jpg"
                leftBtnText="shop now"
            /> 
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`