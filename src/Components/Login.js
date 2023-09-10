import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ data }) {
    const [loginName, setLoginName] = useState("");
    const [loginPassword, setLoginPassword] = useState("")
    const navigate = useNavigate();

    function LoginHandler() {
        const userData = data.find((user) => user.userName === loginName);

        if (userData) {
            if (userData.password !== loginPassword) {
                alert("Нууц үг эсвэл хэрэглэгчийн нэрээ шалгана уу");
                window.location.reload();
            } else {
                localStorage.setItem("currentUser", userData.currentUser) 
                navigate("/");
            }
        } else {
            alert("Хэрэглэгч олдсонгүй")
            window.location.reload();
        }
    }

    return (
        <div className="h-[calc(80vh-50px)] flex flex-col items-center justify-center bg-gradient-to-b from-opacity-50 
                        via-opacity-50 to-opacity-100 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://bookshop-uk-prod-images.storage.googleapis.com/spree/affiliate_profiles/banner_images/5438/original/book_banner.jpg?1609791964")' }}>
            <div className="w-[500px] h-[450px] bg-white rounded-2xl p-14">
                <span className="mt-20 text-5xl font-bold m-24 ">Нэвтрэх</span>
                <form className="flex flex-col items-center space-y-4 mt-12">
                    <input
                        className="w-[350px] py-5 px-4 bg-white rounded-lg focus:outline-none focus:ring focus:border-red-50 border border-red-50 text-center"
                        type="text"
                        placeholder="И-мэйл эсвэл утасний дугаар"
                        value={loginName}
                        onChange={(e) => setLoginName(e.target.value)} /> 
                    <input
                        className="w-[350px] py-5 outline-2 px-4 bg-white rounded-lg focus:outline-none focus:ring  focus:border-red-50 border border-red-50 text-center"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)} 
                        placeholder="Нууц үг" />
                    <button className="w-[350px] py-3 outline-2 px-4 bg-lightcoral text-white rounded-lg cursor-pointer bg-red-300 hover:bg-red-500 transition duration-300 ease-in-out"
                        onClick={LoginHandler}>
                        Нэвтрэх
                    </button>
                </form>
            </div>
        </div>
    )
}
