import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Auth from './Auth';
import logoImage from '../../images/medogram-logo.png';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
`;

const LoginCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 3rem 2rem;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
`;

const Logo = styled.img`
    width: 120px;
    height: auto;
    margin-bottom: 2rem;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login to Medogram</title>
                <link rel="icon" type="image/png" href={logoImage} />
            </Helmet>
            <LoginContainer>
                <LoginCard
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Logo src={logoImage} alt="Medogram Logo" />
                    <Title>Welcome to Medogram</Title>
                    <Auth />
                </LoginCard>
            </LoginContainer>
        </>
    );
};

export default Login;