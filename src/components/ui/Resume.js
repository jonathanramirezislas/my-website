import React,{useEffect} from 'react';
import { useInView } from 'react-intersection-observer';


export const Resume = ({setProjects}) => {

	const [ref, inView] = useInView();
 
    
  
    useEffect(() => {
      if (inView ) {
        setProjects(true)
      }
    }, [inView]);

	return (
		<>
			<div className="flex flex-wrap w-full px-4 py-4 text-white bg-black border-t-8 border-red-500 border-double auto-rows-3">
				<div className="relative flex items-start justify-start w-full h-16 md:justify-center ">
					<div className="ml-4 md:ml-0">
						<span className="absolute z-20 mt-2 text-3xl font-bold text-white">RESUME</span>
						<div className="bg-white bg-opacity-50">
							<h2 className="absolute z-10 block -ml-4 text-6xl font-bold tracking-wide bg-opacity-50 bg-no-repeat bg-cover text-align letter-img-bg text-fill-transparent bg-clip-text">
								RESUME
							</h2>
						</div>
					</div>
				</div>

				<div className="flex-grow-0 flex-shrink-0 w-full md:w-2/4 ">

					<div className="p-5 mx-4 my-4 bg-gray-900 border-2 border-purple-600 rounded-lg hover:bg-white hover:text-black">
						<span className="font-bold text-pink-600 text-md ">2016-2020</span>
						<h2>Engineering in Tecnologías de la información y comunicaciones</h2>
						<span className="position"></span>
						<p className="mt-4">
							I participated in the 2018 <b>national student innovation technology</b> event in the
							category of Mobile Applications where we developed an application for access control to
							institutions.
						</p>
					</div>

					<div className="p-5 mx-4 my-4 bg-gray-900 border-2 border-purple-600 rounded-lg hover:bg-white hover:text-black">
						<span className="font-bold text-pink-600 text-md">2018</span>
						<h2>Jr Web developer</h2>
						<span className="position">J Charles & Charles </span>
						<p className="mt-4">
							Create and design eCommerce website.
							<p>Use APIs for purchases working with PayPal REST API.</p>
							<p>Implement chat for clients and administrator working Mibew Messenger.</p>
							<p>Develops chart working Canvas JS to visualize and analyze product trends. </p>
							<p>Write clients and administrator interfaces, design database. </p>
							<p>Write front-end and back-end code to support web interface</p>
						</p>
						<p>
							<b> HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, PHP and MySQL</b>
						</p>
					</div>
					<div className="p-5 mx-4 my-4 bg-gray-900 border-2 border-purple-600 rounded-lg hover:bg-white hover:text-black">
						<span className="font-bold text-pink-600 text-md">2017</span>
						<h2>Storer</h2>
						<span className="position">Grupo ISN</span>
						<p className="mt-4">
							-I worked in the warehouse area where I handled inputs and outputs of products at{' '}
							<b>Nissan A2</b>, maintaining minimum and maximum levels. .
						</p>
						<p>Responsible for inventory accuracy</p>
					</div>
				</div>
				<div className="flex-grow-0 flex-shrink-0 w-full md:w-2/4 ">
					<div className="p-5 mx-4 my-4 bg-gray-900 border-2 border-purple-600 rounded-lg hover:bg-white hover:text-black">
						<span className="font-bold text-pink-600 text-md">2020</span>
						<h2>Jr Data Scientist</h2>
						<span className="position">Nissan A1</span>
						<p className="mt-4">
							Intern Nissan School at Manufacturing Strategy department where I developed a real time
							dashboard of <b>KPIs</b> connected different servers
						</p>
						<p>Attend Zoom meetings with partners from Nissan North America In</p>
						<p className="mt-4">
							Create actions filters, parameters, calculated sets, etc. In order to generate powerful{' '}
							<b>Tableau</b> dashboards to analyze data and track problems of line production
						</p>
						<p>Develop Macros to have a proper excel file for Tableau. </p>
						<p className="mt-4">
							Write complex Queries, Store Procedures & Triggers <b>(SQL Server, MySQL)</b>.
						</p>
						<p className="mt-4">
							Extract, Transform and Load Process <b>(ETL)</b>
						</p>
					</div>
					<div className="p-5 mx-4 my-4 bg-gray-900 border-2 border-purple-600 rounded-lg hover:bg-white hover:text-black">
						<span className="font-bold text-pink-600 text-md">2020</span>
						<h2>Java Software Engineer</h2>
						<span className="position">Nissan A1</span>
						<p className="mt-4">Working for V-Preng T&C department.</p>
						<p className="mt-4">
							Develop software in Java to incorporate new technologies to manage Fit & Finish reports
							reducing the time to create from manually to automatically (3 hours to 5 minutes).
						</p>
					</div>
				</div>
			</div>
			<div ref={ref}></div>
		</>
	);
};
