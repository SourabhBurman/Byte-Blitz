import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios";
import { QuizCard } from "@/widgets/cards/QuizCard";
import Lottie from "lottie-react";
import animated from "../../assets/animationDashboard.json"

export function Home() {
  const [quizzes, setQuizzes] = useState([])
  const [value, setValue] = React.useState("");
  useEffect(() => {
    axios.get(`https://embarrassed-outfit-eel.cyclic.app/quizzes?language=${value || ""}`).then(res => setQuizzes(res.data.quiz)).catch(err => console.log(err))
  }, [value]);

  return (
    <div className="mt-12">
      <div className="relative my-4 h-32 flex w-full overflow-hidden rounded-xl bg-black">

        <div className="relative h-32 w-full overflow-hidden rounded-xl flex items-center justify-end text-white text-center font-bold">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl">BYTE</span>
        </div>

        <div className="relative h-32 w-full overflow-hidden rounded-xl ">
          <Lottie animationData={animated} style={{ width: '100%', height: '100%' }} />
        </div>


        <div className="relative h-32 w-full overflow-hidden rounded-xl flex items-center justify-start text-white text-center font-bold">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl">BLITZ</span>
        </div>
      </div>
      <div className="w-58 flex sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-8 mb-8">
      <div className="w-72">
      <Select
        label="Front-End Language"
        // value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="HTML">HTML</Option>
        <Option value="React">React</Option>
        <Option value="CSS">CSS</Option>
        <Option value="JavaScript">JavaScript</Option>
      </Select>
    </div>
    <div className="w-72">
      <Select
        label="Back-End Language"
        // value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="Java">Java</Option>
        <Option value="PHP">PHP</Option>
        <Option value="Python">Python</Option>
        <Option value="Cpp">Cpp</Option>
        <Option value="Nodejs">Nodejs</Option>
      </Select>
    </div>
      </div>
      <div className="m-2 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {quizzes.map((item, index) => <QuizCard key={index} obj={item} />)}

      </div>
    </div>
  );
}

export default Home;
