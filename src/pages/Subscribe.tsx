import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIPTION_MUTATION = gql`
   mutation CreateSubscriber{
   CreateSubscriber(data:{name:$name, email: $email}){
      id
   }
}
`

export function Subscribe() {
   const navigate = useNavigate();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');

   const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIPTION_MUTATION);

   function handleSubscribe(event: FormEvent) {
      event?.preventDefault();
      console.log(name, email);
      createSubscriber({
         variables: {
            name,
            email
         }
      });

      navigate('/event');
   }

   return (
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
         <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
            <div className="max-w-[640px]">
               <Logo />
               <h1 className="mt-8 text-[2.5rem] leading-tight">Learn the beauty of using <strong>GitHub</strong> in your projects</h1>
               <p className="mt-4 text-gray-200 leading-relaxed">This will change the way that you develop your applications</p>
            </div>
            <div className="p-8 bg-gray-700 border border-gray-500 rounded">
               <strong>Register to this Event</strong>
               <form action="" className="flex flex-col gap-2 w-full">
                  <input
                     className="bg-gray-900 rounded px-5 h-14"
                     type="text"
                     placeholder="Name"
                     onChange={(e) => setName(e.target.value)}
                  />
                  <input
                     className="bg-gray-900 rounded px-5 h-14"
                     type="email"
                     placeholder="Email"
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                     type="submit"
                     disabled={loading}
                     className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bh-green-700 transition-colors disabled:opacity-50"
                  >
                     Register
                  </button>
               </form>
            </div>

         </div>
         <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
      </div>
   );

}