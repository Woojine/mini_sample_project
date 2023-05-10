import React, { useState }from "react";
import styled from "styled-components";


const Login = () => {
    const Container = styled.div`
    `;

    return(
        <Container>
            <div className="Login">
                <span>로그인</span>
            </div>
            <div className="item">
                <input type="text" placeholder="아이디를 입려해주세요" />
            </div>
        </Container>
    );
};
export default Login;