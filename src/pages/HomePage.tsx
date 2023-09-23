import React, { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Badge } from "antd";
import holdingFood from '../pictures/HomePageGallery/Festival_Food.png';
import onRock from '../pictures/HomePageGallery/Hiking_Ontop_Rock.png';
import rockNRoll from "../pictures/HomePageGallery/RockNRoll.png";
import UCSDGeisel from "../pictures/Education/UCSDGeiselSunSet.png";
import 'devicon/devicon.min.css';


function HomePage()  {

    const slides = [
        {
            img: holdingFood
        },
        {
            img: onRock
        },
        {
          img: rockNRoll
        },
    ];

    const[currentIndex, setCurrentIndex] = useState(0);
    const [selectedSlide, setSelectedSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedSlide(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedSlide(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
        setSelectedSlide(slideIndex);
    }


    return (
        <div className = "HomePage flex flex-wrap bg-white w-full h-screen">

            <div className = "Carousel relative justify-start max-w-[1000px] h-[800px] w-full p-20 group">
                <div style={{ backgroundImage: `url(${slides[currentIndex].img})` }} className = "w-full h-full rounded-2xl bg-center bg-cover"/>

                <div className = "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"> <BsChevronCompactLeft onClick={prevSlide}/> </div>
                <div className = "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"> <BsChevronCompactRight onClick={nextSlide}/> </div>

                <div className = "flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl cursor-pointer ${
                                selectedSlide === slideIndex ? "text-black" : "text-Dove-Gray"
                            }`}>
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>
            </div>

            <div className = "HeaderIntroduction justify-end px-20 py-20 w-90">

                <div className = "flex items-center">
                    <h1 className= "text-black text-head1 font-bree-serif font-bold">Billy Phan, </h1>

                    <a href="https://github.com/b-ianphan" target="_blank" rel="noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 mx-4 git-hub hover:fill-forest-green"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d={`M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387
                                .599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416
                                -.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
                                1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997
                                .107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
                                0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176
                                0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404
                                1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23
                                .653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
                                0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222
                                v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386
                                0-6.627-5.373-12-12-12z`}/>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/billy-phan-23009a284/" target="_blank" rel="noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 mx-4 linked-in hover:fill-forest-green"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d={'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 ' +
                                    '1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 ' +
                                    '0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'}/>
                        </svg>
                    </a>
                </div>

                <h2 className= "text-black text-head2 font-bree-serif">San Diego Native & Aspiring Software Engineer</h2>

                <div className = "border border-b-black rounded-2xl max-w-[680px]">
                    <p className = "text-head3 text-black font-bree-serif p-5">
                        I am a third year Computer Science undergrad & CSE department tutor @ UC San Diego.
                        <br/>
                        I am currently interested in and practicing:
                        <ul className="list-disc px-8">
                            <li> Full-Stack Web Development</li>
                            <li> Game Development </li>
                        </ul>
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-head2 py-5"> Programming Languages</h3>
                    <div className="grid grid-cols-4 grid-rows-2 place-items-center gap-y-5">
                        <i className="devicon-javascript-plain text-head1 text-javascript-yellow hover:scale-[110%] hover:shadow-lg hover:animate-spin"></i>
                        <i className="devicon-typescript-plain text-head1 text-typescript-blue hover:scale-[110%] hover:shadow-lg  hover:animate-spin"></i>
                        <i className="devicon-css3-plain text-head1 text-css-blue hover:scale-[110%] hover:shadow-lg hover:animate-spin"></i>
                        <i className="devicon-html5-plain text-head1 text-html-orange hover:scale-[110%] hover:shadow-lg hover:animate-spin"></i>
                        <i className="devicon-java-plain text-head1 text-java-orange hover:scale-[110%] hover:shadow-lg hover:animate-spin"></i>
                        <i className="devicon-c-plain text-head1 text-c++-blue hover:scale-[110%] hover:shadow-lg hover:animate-spin"></i>
                        <i className="devicon-cplusplus-plain text-head1 text-c++-blue hover:scale-[110%] hover:shadow-lg hover:animate-spin"></i>
                        <i className="devicon-csharp-plain text-head1 text-csharp-purple hover:scale-[110%] hover:shadow-lg hover:animate-spin"></i>
                    </div>
                </div>


                <div>
                    <h3 className="font-bold text-head2 py-5"> Dev Ops</h3>
                    <div className="grid grid-cols-5 grid-rows-1 place-items-center m-2">
                        <i className="devicon-github-plain text-head1 hover:scale-[110%] hover:shadow-lg hover:animate-spin"></i>
                        <i className="devicon-ssh-original-wordmark text-head1 hover:scale-[110%] hover:shadow-lg hover:animate-spin"></i>
                    </div>
                </div>
            </div>

            <div className = "EducationSection justify-start px-20 py-40 w-full">
                <h1 className= "text-black text-head1 font-bold font-bree-serif"> Education</h1>

                <div className="border border-b-black rounded-2xl p-5 bg-black text-white">


                    <a href="https://ucsd.edu/" target="_blank" rel="noreferrer" className = "hover:underline text-head2 flex-grow">University of California, San Diego</a>
                    <img src={UCSDGeisel} alt="Geisel" className = "w-32 h-32 rounded-full justify-items-end float-right"/>
                    <h3 className= "text-head3"> Bachelors of Science | (2021-2025)</h3>

                    <div className= "py-5">
                        <div>
                            <h4 className= "font-bold text-head4 inline"> Major: </h4>
                            <h4 className= "italic text-head4 inline">Computer Science</h4>
                        </div>
                        <div>
                            <h4 className= "font-bold text-head4 inline"> GPA: </h4>
                            <h4 className= "italic text-head4 inline"> 3.64</h4>
                        </div>

                    </div>

                    <a href="https://catalog.ucsd.edu/courses/CSE.html" target="_blank" rel="noreferrer" className=" hover:underline text-head4">Relevant Coursework: </a>

                    <div className= "flex ">
                        <div className= "flex flex-col w-1/12">
                            <div className="border border-b-Dove-Gray p-1"> Course:</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 12</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 100</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 105</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 101</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 30</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 110 </div>
                        </div>

                        <div className= "flex flex-col w-1/4">
                            <div className="border border-b-Dove-Gray p-1"> Description:</div>
                            <div className="border border-b-Dove-Gray p-1"> Basic Data Structures and Object-Oriented Design </div>
                            <div className="border border-b-Dove-Gray p-1"> Advanced Data Structures</div>
                            <div className="border border-b-Dove-Gray p-1"> Theory of Computability</div>
                            <div className="border border-b-Dove-Gray p-1"> Design and Analysis of Algorithms</div>
                            <div className="border border-b-Dove-Gray p-1"> Computer Organization and Systems Programming </div>
                            <div className="border border-b-Dove-Gray p-1"> Software Engineering </div>
                        </div>

                        <div className= "flex flex-col w-1/5">
                            <div className="border border-b-Dove-Gray p-1"> Relevance:</div>
                            <div className="border border-b-Dove-Gray p-1"> <Badge className="py-1 px-2 text-white bg-java-orange rounded-2xl mx-1">Java</Badge> </div>
                            <div className="border border-b-Dove-Gray p-1"> <Badge className="py-1 px-2 text-white bg-c++-blue rounded-2xl mx-1"> C++</Badge></div>

                            <div className= "flex flex-row border border-b-Dove-Gray p-1 justify-items-start">
                                <div> <Badge className="py-1 px-2 text-white bg-tan rounded-2xl mx-1"> Automata</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-powder-pink rounded-2xl mx-1"> Machines</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-silver-gray rounded-2xl mx-1"> Languages</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-plum rounded-2xl mx-1"> P&NP</Badge></div>
                            </div>

                            <div className="border border-b-Dove-Gray p-1"> <Badge className="py-1 px-2 text-white bg-lime-green rounded-2xl mx-1"> Algorithms</Badge></div>

                            <div className= "flex flex-row border border-b-Dove-Gray p-1 justify-items-start">
                                <div> <Badge className="py-1 px-4 text-white bg-c++-blue rounded-2xl mx-1"> C</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-regularGray rounded-2xl mx-1"> Github</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-Dove-Gray rounded-2xl mx-1"> Vim</Badge></div>
                                <div> <Badge className="border border-b-white py-0.5 px-2 text-white bg-black rounded-2xl mx-1"> Markdown</Badge></div>
                            </div>


                            <div className= "flex flex-row border border-b-Dove-Gray p-1 justify-items-start">
                                <div> <Badge className="py-1 px-2 text-white bg-java-orange rounded-2xl mx-1">Java</Badge> </div>
                                <div> <Badge className="py-1 px-2 text-white bg-mongoDB-green rounded-2xl mx-1"> MondoDB </Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-spring-boot-green rounded-2xl mx-1"> SpringBoot</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-regularGray rounded-2xl mx-1"> Github</Badge></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default HomePage;