import React,{Suspense, useState} from 'react'
import emailjs from '@emailjs/browser'
import { Fox } from '../models/Fox';
import {Alert} from '../components/Alert';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import useAlert from '../hooks/useAlert';

export const Contact = () => {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [isLoading,setLoading] = useState(false);
    const [currentAnimations,setcurrentAnimations] = useState('idle');
    const {alert,showAlert,hideAlert} = useAlert();
    const handleChange = (e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    }
    const handleFocus = ()=>{
        setcurrentAnimations('walk');
    }
    const handleBlur = ()=>{
        setcurrentAnimations('idle');
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(import.meta.env.VITE_APP_EMAILJS_TOKENID);
        setLoading(true);
        setcurrentAnimations('hit');
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TOKENID,
            {
                from_name: form.name,
                to_name: "Shubham Kushwaha",
                from_email: form.email,
                to_email: 'shubham19kushwaha@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLICKEY

        ).then(()=>{
            setLoading(false);
            //show success message
            // hide the alerts
            setForm({name: '',email: '',message:''});
            showAlert({text:'Message Sent Successfully',type: 'success'});
            setTimeout(()=>{
                hideAlert({text:'',type:'danger'});
                setcurrentAnimations('idle');
            },[2000]);
        }).catch((error)=>{
            setLoading(false);
            setcurrentAnimations('idle');
            console.log(error);
            showAlert({text:'I did not recive your message',type: 'danger'});
            setTimeout(()=>{
                hideAlert({text:'',type:'danger'});
            },[2000]);
            // show error message
        })
    }
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
        {alert.show && <Alert {...alert} />}

        <div className='flex-1 min-w-[50%] flex flex-col'>
            <h1 className='head-text'>Get in Touch</h1>
            <form className='w-full flex flex-col gap-7 mt-14'
                onSubmit={handleSubmit}
            >
                <label className='text-blac-500 font-semibold'>
                    Name
                <input 
                    type = "text"
                    name = "name"
                    className='input'
                    placeholder='john'
                    value={form.name}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                />
                </label>
                <label className='text-blac-500 font-semibold'>
                    Email
                <input 
                    type = "email"
                    name = "email"
                    className='input'
                    placeholder='john@email.com'
                    value={form.email}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                />
                </label>
                <label className='text-blac-500 font-semibold'>
                    Message
                <textarea
                    type = "text"
                    name = "message"
                    rows={4}
                    className='textarea'
                    placeholder='Leave your message..'
                    value={form.message}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                />
                </label>
                <button
                type = "submit"
                className='btn'
                disabled = {isLoading}
                onFocus={handleFocus}
                onBlur={handleBlur}
                >
                {isLoading ? "Sending..." : "Submit"}
                </button>
            </form>

        </div>
        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
            <Canvas camera={{
                position: [0,0,5],
                fov: 75,
                near: 0.1,
                far: 1000
            }}> 
                <directionalLight intensity={2.5} position={[0,0,1]}/>
                <ambientLight intensity={0.5} />
                <Suspense fallback = {<Loader />}>
                    <Fox 
                        isLoading = {isLoading}
                        currentAnimation={currentAnimations}
                        position  = {[0.5,0.35,0]}
                        rotation = {[12.6,-0.6,0]}
                        scale = {[0.5,0.5,0.5]}
                    />
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

