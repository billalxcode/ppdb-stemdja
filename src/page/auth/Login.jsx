import { useState } from "react"
import SEO from "../../components/seo"
import authLogin from "../../service/auth"
import { redirect } from "react-router-dom"

export default function Login() {
    let [ email, setEmail ] = useState('')
    let [ password, setPassword ] = useState('')
    let [ alertMessage, setAlertMessage ] = useState({

    })

    const submit = (event) => {
        const processLogin = async () => {
            try {
                const response = await authLogin(email, password)
                if (response.status === 200) {
                    return redirect('/dashboard')
                } else {
                    setAlertMessage({
                        message: 'unknown error',
                        type: 'alert-error'
                    })
                }
            } catch (error) {
                let response = error.response.data
                let message = response.message
                setAlertMessage({
                    message: message,
                    type: 'alert-error'
                })
            }
        }
        processLogin()
        event.preventDefault()
    }

    return (
        <>
            <SEO></SEO>

            <div className="flex justify-center mt-36">
                <div className="card shadow w-1/3">
                    <div className="card-body">
                        <h1 className="font-bold text-center" style={{ fontSize: '30px' }}>Login</h1>

                        <form action="/login" method="post" className="mt-5">
                            { ( Object.keys(alertMessage).length > 0 ? 
                                <div className={"alert " + alertMessage.type + " shadow-lg"}>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Error! { alertMessage.message }</span>
                                    </div>
                                </div>
                            : "" ) }
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className="label-text">Email:</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-control w-full my-2">
                                <label className="label">
                                    <span className="label-text">Password:</span>
                                </label>
                                <input type="password" placeholder="Enter your password" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button className="btn btn-primary w-full my-2" onClick={submit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}