import { 
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent
} from "react";

import "../styles/form.css";


type Props = {

  serviceName?: string;

  onSuccess?: () => void;

  onClose?: () => void;

};



export default function RequestForm({

  serviceName,

  onSuccess,

  onClose,

}: Props) {


  const [form, setForm] = useState({

    name: "",

    email: "",

    phone: "",

    message: "",

  });



  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);



  /*
    Hide header while modal is open
  */

  useEffect(() => {


    document.body.classList.add("modal-open");



    return () => {

      document.body.classList.remove("modal-open");

    };


  }, []);




  const handleChange = (

    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

  ) => {


    setForm(prev => ({

      ...prev,

      [e.target.name]: e.target.value,

    }));


  };





  const validateForm = () => {


    if (!form.name.trim()) {

      alert("Please enter your name");

      return false;

    }



    if (!form.email.trim() || !form.email.includes("@")) {

      alert("Please enter a valid email");

      return false;

    }



    if (!form.phone.trim() || form.phone.length < 7) {

      alert("Please enter a valid phone number");

      return false;

    }



    if (!form.message.trim()) {

      alert("Please enter your message");

      return false;

    }



    return true;


  };






  const handleSubmit = async (

    e: FormEvent

  ) => {


    e.preventDefault();



    if (loading) return;



    if (!validateForm()) return;



    setLoading(true);



    try {


      const res = await fetch(

        `${import.meta.env.VITE_API_URL}/api/lead`,

        {

          method:"POST",


          headers:{

            "Content-Type":"application/json",

          },


          body:JSON.stringify({

            ...form,

            service: serviceName || "general",

          }),

        }

      );





      const data = await res.json();





      if (!res.ok || data?.success === false) {

        throw new Error(

          data?.error || "Request failed"

        );

      }





      setSuccess(true);

      setLoading(false);





      setForm({

        name:"",

        email:"",

        phone:"",

        message:"",

      });





      setTimeout(() => {


        onSuccess?.();

        onClose?.();


      },1200);






    } catch(error) {


      console.error(

        "Form error:",

        error

      );


      setLoading(false);


      alert(

        "Something went wrong. Try again later."

      );


    }


  };







  return (

    <div className="form-wrapper">



      <button

        type="button"

        className="form-close"

        onClick={onClose}

        aria-label="Close form"

      >

        ×

      </button>





      <h2 className="form-title">


        {serviceName

          ? `Get quote: ${serviceName}`

          : "Request service"

        }


      </h2>







      {success && (

        <div className="success-message">

          Request sent successfully

        </div>

      )}








      <form

        className="form"

        onSubmit={handleSubmit}

      >





        <input

          name="name"

          placeholder="Name"

          value={form.name}

          onChange={handleChange}

        />





        <input

          name="email"

          type="email"

          placeholder="Email"

          value={form.email}

          onChange={handleChange}

        />





        <input

          name="phone"

          type="tel"

          placeholder="Phone"

          value={form.phone}

          onChange={handleChange}

        />







        <textarea

          name="message"

          placeholder="Message"

          value={form.message}

          onChange={handleChange}

        />








        <button

          className="form-submit"

          disabled={loading}

        >


          {loading

            ? "Sending..."

            : "Send Request"

          }


        </button>





      </form>



    </div>

  );

}