
// 로그인 페이지


const SocialKakao = ()=>{
    const Rest_api_key='1a74c9d4dd9557da2aa82ddde05be4e3' //REST API KEY
    const redirect_uri = 'http://localhost:3000/auth' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
        <>
            <button onClick={handleLogin}>
                카카오 로그인
            </button>
        </>
    )
}
export default SocialKakao