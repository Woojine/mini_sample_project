import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";


const AxiosApi = {
 // 회원 가입 여부 확인
 memberRegCheck : async(id) => {
    return await axios.get(KH_DOMAIN + `/check?id=${id}`);
},
// 회원 가입
memberReg : async(id, pwd, name, email) => {
    const member ={
        id : id,
        pwd: pwd,
        name: name,
        mail: email
    };
    return await axios.post(KH_DOMAIN + "/new", member);
}
}
export default AxiosApi;