import { useState } from "react";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const { signup, isSigningUp } = useAuthStore();

    const validateForm = () => {};
    const handaleSubmit = (e) => {
        e.preventDefault();
    };

    return <div className="min-h-screen grid lg:grid-cols-2">SignUpPage
    {/* Left  side */}
    <div className="flex flex-col items-center justify-center  items-center p-6 sm:p-12">
        
     </div>
    </div>;
};
export default SignUpPage;