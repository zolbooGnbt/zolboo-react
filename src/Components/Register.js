import axios from "axios";
import { useState } from "react";

const Register = ({ data }) => {
    const [userName, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    function SignUpHandler() {
        setUsername("");
        setUserEmail("")
        setPassword("");
        var users = {
            userName: userName,
            userEmail: userEmail,
            password: password,

        }

        const checkData = data.find((userCheck) => userCheck.userEmail === userEmail);
        if (checkData) {
            console.log(checkData);
            alert("Хэрэглэгчийн email бүртгэгдсэн байна!")
        } else {
            axios.post("https://blogproject-5047e-default-rtdb.firebaseio.com/user.json", users)
                .then(res => {
                    localStorage.setItem("currentUser", res.data.currentUser)
                    alert("Амжилттай бүртгэгдлээ.")
                })
                .catch(error => {
                    console.error("Registration Error:", error);
                    alert("Бүртгэгдэхэд алдаа гарлаа");
                  });
               
        }

    }
    return (
        <div className="h-[calc(80vh-50px)] flex flex-col items-center justify-center bg-gradient-to-b from-opacity-50 
                    via-opacity-50 to-opacity-100 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://bookshop-uk-prod-images.storage.googleapis.com/spree/affiliate_profiles/banner_images/5438/original/book_banner.jpg?1609791964")' }}>
            <div className="w-[500px] h-[450px] bg-white rounded-2xl p-14">
                <span className="mt-4 text-5xl font-bold ml-16"> Бүртгүүлэх</span>
                <form className="flex flex-col items-center space-y-4 mt-10">
                    <input className="w-[350px] py-4 px-4 bg-white rounded-lg focus:outline-none focus:ring focus:border-red-50 border border-red-50 text-center"
                        type="text"
                        value={userName}
                        onInput={(e) => setUsername(e.target.value)}
                        placeholder="Хэрэглэгчийн нэр" />
                    <input className="w-[350px] py-4 px-4 bg-white rounded-lg focus:outline-none focus:ring focus:border-red-50 border border-red-50 text-center"
                        type="text"
                        value={userEmail}
                        onInput={(e) => setUserEmail(e.target.value)}
                        placeholder="И-мэйл эсвэл утасний дугаар" />
                    <input className="w-[350px] py-4 px-4 bg-white rounded-lg focus:outline-none focus:ring focus:border-red-50 border border-red-50 text-center"
                        type="password"
                        value={password}
                        onInput={(e) => setPassword(e.target.value)}
                        placeholder="Нууц үг" />
                    <button
                        className="w-[350px] py-2 px-4 bg-teal-400 text-white rounded-lg cursor-pointer hover:bg-teal-600 transition duration-300 ease-in-out"
                        onClick={SignUpHandler}>
                        Бүртгүүлэх
                    </button>
                </form>
            </div>
        </div >
    );
}

export default Register