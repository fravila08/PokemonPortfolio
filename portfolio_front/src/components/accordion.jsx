import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios'

const MyAccordion=()=>{
    // lines 6-20: handle the axios call for 2 seperate gym badges
    const newBadge = async () =>{
        const badge= await axios.get('badges')
        if (badge.data < 3 && badge.data == 2){
            axios.put('badges')
            setShowThunder(true)
        }
    }

    const newBadgeTwo = async () =>{
        const badge= await axios.get('badges')
        if (badge.data < 4 && badge.data == 3){
            axios.put('badges')
            setShowRainbow(true)
        }
    }
    return(
        <Accordion defaultActiveKey="1" >
            <Accordion.Item eventKey="0">
                <Accordion.Header onClick={newBadgeTwo}>Certificates</Accordion.Header>
                <Accordion.Body>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Full-Stack Software Engineer</Accordion.Header>
                        <Accordion.Body>
                        What is full-stack software engineering anyway? Most sophisticated 
                        web applications can be thought of as composed of two parts: the 
                        front-end and the backend. The front-end of the stack revolves around 
                        what the end-user sees, which is the web page. HTML, CSS, and 
                        Javascript are essential technologies used to build and manipulate 
                        web pages. React.js is a powerful library for working on the 
                        front-end. The backend of the stack is where data gets stored, 
                        managed, and analyzed. Our tools-of-the-trade for backend development 
                        are Python and SQL.
                        <br/>
                        <a href="https://www.codeplatoon.org/full-stack/course-curriculum/#tab-id-1">Code Platoon</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Django</Accordion.Header>
                        <Accordion.Body>
                        Welcome to the world of Django (pronounced like JANG-go with a silent 
                        D)! Get introduced to an open-source web development framework 
                        supported by the Django Software Foundation. Django is written in 
                        Python and provides an opinionated approach to web development 
                        meaning
                        you'll know how projects are structured and have a general set of 
                        guidelines for how to bring your apps to life. Django comes with a 
                        lot of tools already provided, so you can pick and choose what you 
                        need to get the job done.
                        <br/>
                        <a href="https://www.codecademy.com">Code Cademy</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Data Analysis for Business</Accordion.Header>
                        <Accordion.Body>
                        Businesses generate tons of information, but they don’t always know 
                        how to make use of it. So they look to masters of big data to make 
                        sense of it all. Consider this your team's roadmap to success as data 
                        analysts. They'll gain step-by-step guidance as they learn the skills 
                        and tools needed to surface business critical information to the 
                        organization.
                        <br/>
                        <a href="https://www.codecademy.com">Code Cademy</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Create an Advanced Web App with React and Redux</Accordion.Header>
                        <Accordion.Body>
                        Learning the basics of HTML, CSS, and JavaScript can only get you so 
                        far. Learn React, the popular front-end library that powers Facebook 
                        and Netflix. Then, jump into Redux, the state-management library 
                        built specifically with React applications in mind.
                        <br/>
                        <a href="https://www.codecademy.com">Code Cademy</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Scaled Agile Frameworks</Accordion.Header>
                        <Accordion.Body>
                        77% of certified Scaled Agile Framework® (SAFe®) professionals pursue a 
                        SAFe certification for professional development, and 63% rely on SAFe 
                        certifications to prove their knowledge. So why should you join them?
                        <br/>
                        Business agility relies on people with the expertise to lead successful 
                        transformations. Maybe you want to grow in your role at your current 
                        company or seek new career opportunities outside your organization. 
                        By earning a SAFe certification, you’ll expand your skills and experience 
                        and be empowered to play a key role in driving business transformation.
                        <br/>
                        <a href="https://scaledagile.com">Scaled Agile</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>AWS Cloud Practitioner</Accordion.Header>
                        <Accordion.Body>
                        Who should take this exam?
                        <br/>
                        AWS Certified Cloud Practitioner is intended for anyone who has basic 
                        knowledge of the AWS platform. Before taking this exam, we recommend you 
                        have:
                        <br/>
                        -Six months of exposure to the AWS Cloud
                        -Basic understanding of IT services and their uses in the AWS Cloud platform
                        -Knowledge of core AWS services and use cases, billing and pricing models, security concepts, and how cloud impacts your business
                        <br/>
                        What does it take to earn this certification?
                        <br/>    
                        To earn this certification, you will need to take and pass the AWS Certified 
                        Cloud Practitioner exam (CLF-C01). The exam features a combination of two 
                        question formats: multiple choice and multiple response. Additional information, 
                        such as a detailed exam content outline, is in the exam guide. 
                        <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/">Amazon</a>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Projects</Accordion.Header>
                <Accordion.Body>
                    

                <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>The Happy Pig</Accordion.Header>
                        <Accordion.Body>
                        Full-Stack application using React, Django, PostgreSQL. Using two rapid 
                        API's with Django Rest Frameworks to create the menu item content while 
                        utilizing CRUD concepts to alter cart items for each user.
                        <br/>
                        <a href="https://fathehappypig.com" target="_blank">Check Me Out!</a> 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Code Platoon Fitness E-Store</Accordion.Header>
                        <Accordion.Body>
                        Django and PostgreSQL ran ecommerce application working with the noun 
                        project API to create random items from search bar. This project clearly demonstrates
                        Django's extends functionality in templates.
                        <br/>
                        <a href="https://cpfitstore.com/" target="_blank" onClick={newBadge}>Check Me Out!</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Task Manager</Accordion.Header>
                        <Accordion.Body>
                        This application was built utilizing Django, React, Django_Rest_Frameworks, PostgreSQL, and the
                        React-Draggable library. Users have the ability to create tasks by providing at minimum a date and 
                        a title for their event. Events of the day are displayed on their Dash Board and all other task lie within
                        the tasks or completed tasks tabs.
                        <br/>
                        <a href="https://fataskmanager.com" target="_blanck">Check Me Out!</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>



                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default MyAccordion;