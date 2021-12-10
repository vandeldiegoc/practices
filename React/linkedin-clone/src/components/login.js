import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src='/images/LinkedIn_Logo.svg' alt='' />
                </a>
                <div>
                    <Join>Join Now</Join>
                    <SignIn>SignIn</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src='/images/login-hero.svg' alt='' />
                </Hero>
                <Form>
                    <Google>
                        <img src='/images/Google.svg' alt=''/>
                        Sign In with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}


const Container = styled.div`
`

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding:12px 0 16px;
    display: flex;
    position: relative;
    justify-content: space-between;
    & > a {
        width: 135px;
    };
    @media (max-width: 780px) {
        padding: 0 5px;
    }
`
const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    border-radius: 4px;
&:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
}
`

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition: 162ms;
    text-align:center;
    padding: 10px 24px;
    font-size: 16px;
    line-height: 16px;
    &:hover {
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    } 
`
const Section = styled.section`
    margin: auto;
    display: flex;
    align-content: start;
    min-height: 700px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    @media (max-width: 768) {
        margin: auto;
        min-height: 0px;
    }
`
const Hero = styled.div`
    width: 100%;
    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 300;
        line-height: 70px;
        font-family: -apple-system,system-ui,
                        BlinkMacSystemFont,"Segoe UI",
                        Roboto,"Helvetica Neue","Fira Sans",
                        Ubuntu,Oxygen,"Oxygen Sans",
                        Cantarell,"Droid Sans","Apple Color Emoji",
                        "Segoe UI Emoji","Segoe UI Emoji",
                        "Segoe UI Symbol","Lucida Grande",
                        Helvetica,Arial,sans-serif;
        @media (max-width: 768px){
            text-align: center;
            font-size: 35px;
            width: 100%;
            line-height: 2;

        }
    }
    img {
        z-index: -1;
        height: 670px;
        width:700px;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px) {
            width: 300px;
            height: 320px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
`

const Form = styled.div`
    margin-top: 100px;
    width: 408px;
    @media (max-width: 780px) {
         margin-top: 20px;
    }
`

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: center;
    height: 57px;
    width: 100%;
    border-radius: 27px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    vertical-align: middle;
    font-size: 20px;
    color: rgb(0, 0, 0, 0.6);
    transition: 165ms;
    &:hover {
        background-color: rgb(207, 207, 207, 0.25);
        color: rgb(0, 0, 0, 0.75);

    }


`
export default Login