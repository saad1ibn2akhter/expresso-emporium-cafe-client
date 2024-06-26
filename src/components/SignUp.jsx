import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";

const SingUp = () => {
    const {createNewUser} = useContext(AuthContext);
    const handleCreateUser = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        console.log(email,password);

        createNewUser(email,password)
        .then(result => {
            console.log(result.user);
            const creationTime = result.user.metadata.creationTime;
            const user = {email , creationTime};
            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(user),
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    console.log('user added succesfully !!');
                }
                console.log(data);
            })
            
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleCreateUser} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingUp;