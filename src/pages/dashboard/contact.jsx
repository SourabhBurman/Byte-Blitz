import { Button, Checkbox, Input, Textarea, Typography } from '@material-tailwind/react'
import React from 'react'

function Contact() {
  return (
    <>
    <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 font-black"
                            >
                                Connect with Us
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-80">
                            Have questions, feedback, or suggestions? We'd love to hear from you! Feel free to reach out to us via email or social media. Your input helps us make our app even better.
                            <br />
                            <br />
                            Thank you for choosing our coding quiz app as your learning companion. Get ready to unlock your coding potential and embark on an exciting journey of discovery!
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
             <section className="relative bg-white py-24 px-4">
             <div className="container mx-auto">


                 <div className="mx-auto w-full px-4 text-center lg:w-6/12">
                     <Typography variant="h2" color="blue-gray" className="my-3">
                     Contact Us
                     </Typography>
                     <Typography variant="lead" className="text-blue-gray-500">
                         Complete this form and we will get back to you in 24 hours.
                     </Typography>
                 </div>

                 <form className="mx-auto w-full mt-12 lg:w-7/12">
                     <div className="mb-8 flex gap-4">
                         <Input variant="outlined" size="md" label="Full Name" />
                         <Input variant="outlined" size="md" label="Email Address" />
                     </div>
                     <Textarea variant="outlined" size="lg" label="Message" rows={8} />
                     <Checkbox
                         label={
                             <Typography
                                 variant="small"
                                 color="gray"
                                 className="flex items-center font-normal"
                             >
                                 I agree the
                                 <a
                                     href="#"
                                     className="font-medium transition-colors hover:text-gray-900"
                                 >
                                     &nbsp;Terms and Conditions
                                 </a>
                             </Typography>
                         }
                         containerProps={{ className: "-ml-2.5" }}
                     />
                     <Button variant="gradient" size="lg" className="mt-8" fullWidth>
                         Send Message
                     </Button>
                 </form>
             </div>
         </section>
         </>
  )
}

export default Contact