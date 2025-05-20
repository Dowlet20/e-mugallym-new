

// pages/login.js
import axiosInstance from "@/utils/axiosInstance_user";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Ripple } from "react-css-spinners";
import { useAppContext } from "@/context/Context";
import logo from "../../public/images/logo/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Login = () => {
    const [credentials, setCredentials] = useState({phone_number: '', password: ''});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { isLightTheme, token, setToken } = useAppContext();
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (token) {
            router.push("/");
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axiosInstance.post('/token/', credentials);
            
            if (response.data.access) {
                sessionStorage.setItem('authToken', response.data.access);
                sessionStorage.setItem('refreshToken', response.data.refresh);
                setToken(true)
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
                //router.push("/");
                
            }
            

        } catch (err) {
            setError(err.response?.data?.message || 'Ýalňyş girizilen');
            sessionStorage.removeItem('authToken');
            sessionStorage.removeItem('refreshToken');
            setToken(false)
            delete axiosInstance.defaults.headers.common['Authorization'];
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && (
                <div className="d-flex bg-transparent" style={{ height: '100vh' }}>
                    <Ripple
                        color="rgba(12,235,115,1)"
                        size={115}
                        thickness={7}
                        className="mx-auto align-self-center"
                    />
                </div>
            )}
            <div className="logo position-absolute top-0 left-0">
                <Link href="/">
                    <Image
                        src={logo}
                        width={152}
                        height={50}
                        priority={true}
                        alt="Education Logo Images"
                    />
                </Link>
            </div>
            <div className="d-flex justify-content-center" style={{ marginTop: '130px' }}>
                <div className="col-lg-6 col-sm-12">
                    <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                        <h3 className="title">
                            Içeri girmek
                        </h3>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <form onSubmit={handleSubmit} className="max-width-auto">
                            <div className="form-group">
                                <input
                                    name="phone_number"
                                    type="text"
                                    required
                                    placeholder="Email ýa-da tel nomeriňiz *"
                                    onChange={handleChange}
                                    value={credentials.phone_number}
                                />
                                <span className="focus-border"></span>
                            </div>
                            <div className="form-group">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Açar sözi *"
                                    required
                                    onChange={handleChange}
                                    value={credentials.password}
                                />
                                <span className="focus-border"></span>
                            </div>
                            <div className="form-submit-group">
                                <button
                                    type="submit"
                                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                                    disabled={loading}
                                >
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">Giriş</span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right"></i>
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;