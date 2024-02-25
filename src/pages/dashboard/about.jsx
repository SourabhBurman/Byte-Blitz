import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
    IconButton,
    Input,
    Textarea,
    Checkbox,
} from "@material-tailwind/react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import teamData from "@/data/team-data";
import TeamCard from "@/widgets/cards/team-card";

function About() {
    return (
        <>
            
            <section className="-mt-32 bg-white px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="mt-32 flex flex-wrap items-center">
                        <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                                <CodeBracketIcon className="h-8 w-8 text-white " />
                            </div>
                            <Typography
                                variant="h3"
                                className="mb-3 font-bold"
                                color="blue-gray"
                            >
                                Welcome to our coding quiz app
                            </Typography>
                            <Typography className="mb-8 font-normal text-blue-gray-500">
                            We are passionate about creating engaging and educational experiences that make learning to code enjoyable for everyone.
                                <br />
                                <br />
                                At our core, we believe that learning to code should be accessible to all, regardless of background or prior experience. Our mission is to empower individuals with the knowledge and skills needed to thrive in today's digital world through interactive and innovative learning tools.
                            </Typography>
                        </div>
                        <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                                <CardHeader floated={false} className="relative h-56">
                                    <img
                                        alt="Card Image"
                                        src="/img/ByteBlitzCoding.avif"
                                        className="h-full w-full"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography
                                        variant="h5"
                                        color="blue-gray"
                                        className="mb-3 mt-2 font-bold"
                                    >
                                       BYTE-BLITZ
                                    </Typography>
                                    <Typography className="font-normal text-blue-gray-500">
                                    Our coding quizzes are carefully designed to be both informative and entertaining. We strive to make every question thought-provoking and relevant to real-world coding scenarios.
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-4 pt-20 pb-24">
                <div className="container mx-auto">
                    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
                        <Typography variant="h2" color="blue-gray" className="my-3">
                            "Our Team"
                        </Typography>
                        <Typography variant="lead" className="text-blue-gray-500">
                        Our team is passionate about education and technology, and we're committed to continuously improving and expanding our app to better serve our users.
                        </Typography>
                    </div>

                    <div className="mt-24 px-16 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                        {teamData.map(({  name, position, socials }) => (
                            <TeamCard
                                key={name}
                                // img={img}
                                name={name}
                                position={position}
                                socials={
                                    <div className="flex items-center gap-2">
                                        {socials.map(({ color, name }) => (
                                            <IconButton key={name} color={color} variant="text">
                                                <i className={`fa-brands text-xl fa-${name}`} />
                                            </IconButton>
                                        ))}
                                    </div>
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>
           
            
        </>
    )
}

export default About