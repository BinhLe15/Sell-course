import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import "./Login.css";
const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isRecoverPasswordFormVisible, setIsRecoverPasswordFormVisible] = useState(false);
    const [emailError, setEmailError] = useState('');

  
    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(event.target.value);
        // Kiểm tra tính hợp lệ của email
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Regex để kiểm tra email
        if (!emailPattern.test(emailValue)) {
            setEmailError('Email không hợp lệ');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email === "" || password === "") {
            alert("Vui lòng nhập đầy đủ thông tin đăng nhập");
            console.log("Đăng nhập với email: ", email);
            console.log("Với mật khẩu: ", password);
        } else {
            // Xử lý đăng nhập với email và password đã nhập
            console.log("Đăng nhập với email: ", email);
            console.log("Với mật khẩu: ", password);
            // Thực hiện các xử lý đăng nhập khác (gọi API, kiểm tra hợp lệ, ...)
            window.location.href = '/'
        }
    };
    
    // Hàm để ẩn form phục hồi mật khẩu
    const showLoginForm = () => {
        setIsRecoverPasswordFormVisible(false);
        console.log("false")
    };
    // Hàm để hiển thị form phục hồi mật khẩu
    const showRecoverPasswordForm = () => {
        setIsRecoverPasswordFormVisible(true);
        console.log("true")
    };
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    return(
        <div>
            <Banner imgs={img} />
            <div className='body'>
                <p><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Đăng nhập</span></p>
                <section className="section d-flex justify-content-center">
                    {!isRecoverPasswordFormVisible ? (
                        <div className="container-form-login">
                            <h2 className="title text-center mb-4">Đăng nhập</h2>
                            {/* {isSubmitted ? <div>Đăng nhập thành công</div> : renderForm} */}
                            <div className="form">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-container">
                                        <label>
                                            Email  
                                            <span className="required"> *</span>    
                                        </label>
                                        <input type="email" message="hihi" name="email" placeholder="Email" onChange={handleEmailChange} required />
                                        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}

                                    </div>
                                    <div className="input-container">
                                        <label>
                                            Mật khẩu 
                                            <span className="required"> *</span>    
                                        </label>
                                        <input type="password" name="pass" placeholder="Mật khẩu" onChange={handlePasswordChange} required />
                                    </div>
                                    <div className="button-container">
                                        <input className="btn" type="submit" value="Đăng nhập"/>
                                    </div>
                                    <p>
                                        Bạn quên mật khẩu? 
                                        <a href="#" class="btn-link-style text-info" onClick={showRecoverPasswordForm}> Lấy lại tại đây</a>
                                    </p>
                                    <p>
                                        Bạn chưa có tài khoản? 
                                        <a href="/register" class="btn-link-style text-info"> Đăng ký ngay</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="container-form-recover-pass">
                            <h2 className="pl-4">Đặt lại mật khẩu</h2>
                            <p>
                                Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu
                            </p>
                            <form>
                                <div className="input-container">
                                    <label>
                                        Email  
                                        <span className="required"> *</span>    
                                    </label>
                                    <input type="email" name="email" placeholder="Email" onChange={handleEmailChange} required />
                                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}

                                </div>  
                                <div className="action-form_bottom">
                                    <button type="button" class="btn btn-success btn-lg">Gửi</button>
                                    <a href="#" class="btn btn-outline-secondary" onClick={showLoginForm}>Hủy</a>
                                </div>
                            </form>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );

}
export default Login;