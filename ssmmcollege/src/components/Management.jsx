import residents from "../assets/residents.jpg";
import vcresidents from "../assets/vcresidents.jpg";
import sbp from "../assets/sbp.jpeg";

const President = () => {
    return (
        <div className="president-container">
            {/* President content */}
            <div className="presidents-content">
                <br />
                <h2 className="text"> President Message</h2>
                <p>
                    Dear Friends... It gives me immense pleasure to introduce Pachora Taluka Co-Operative Education Society's (PTCES) Shri Sheth Muralidharji Mansingaka College of Arts, Commerce & Science. Here, academic institutes have a great role to play in enabling young people to have a grand vision and to equip them with overall ability and precise skill to change the vision into a reality. Our college offers various academic courses in almost all the streams. Our learned, concerned and responsible teaching staff endeavors to unleash the deeply embedded rational power in the mind of the students. Various extra-curricular and cultural activities happening in our college are aimed at total personality development of the students. We help students to develop an intelligent mind with analytical ability, to take on worldly challenges and a strong will power to assume social responsibility. In other words, we help in creating progressive and positive citizens.
                </p>
                <p>
                    Finally, I must express my gratitude to my entire team, Office bearers, Committee members, Principals, Faculty, Officers, Staff and Workforce. After I took over at SSMM, I was also invited to join various educational organizations, where I have charge of education and related portfolios. I have endeavored to bring this wider perspective to bear on the many opportunities and challenges that lie ahead of SSMM. The world is opening up. We have plans for further modernization and you will soon see some of Ten Thousand square feet of additional construction taking shape. But more important than all this is the pride and commitment which we all carry into our daily responsibilities. It is this teamwork and loyalty to PTCES which will I believe; take the Society to even greater heights. Our cover is a subtle expression of the combined skill and dedication which wilt help us to shape PTCES into well-known globally acknowledged institution.
                </p>
                <p id="chairman">
                    Shri. Sanjay O. Wagh <br />
                    Chairman
                </p>
            </div>
            <div className="presidents-image">
                <img src={residents} alt="President" className="president-img" />
                <p className="chairman-name">Shri. Sanjay O. Wagh</p>
            </div>
        </div>
    );
}

const VicePresident = () => {
    return (
        <div className="vice-president-container">
            {/* Vice President content */}
            <div className="vice-president-content">
                <h2 className="vice-president-title">Dear Friends...</h2>
                <p className="vice-president-text">
                    SSMM College has a reputation for being a quality institution. The college has always believed in value addition, and all tools are employed as a means to that end. The college recognizes its responsibility to provide students with an appropriate training ground in all its thrust areas. It also cares to groom every individual in terms of personality development; thus enabling students to walk the path of success. Set amidst acres of greenery, the college utilizes all its natural and human resources to their optimum for the benefit of the students. This sincere effort has been paid off in forms of consistently high university results. The students have brought laurels to the institution in both academic and extra-curricular activities at national and international levels. Achievements like 'B' grade from NAAC have aroused interest of the corporate world and students are highly placed through Campus Interviews.
                </p>
                <p className="vice-president-text">
                    The College has been 
                    witness to the rapid change occurring globally and is aware of its local implications. The global phenomenon of change is viewed in its local context to prepare global minds. My best wishes are with the college in all its ventures.
                </p>
                <p className="vice-president-signature">
                    Shri V.T. Joshi <br />
                    Vice-Chairman
                </p>
            </div>
            <div className="vice-president-image">
                <img src={vcresidents} alt="Vice President" className="vice-president-img" />
            </div>
        </div>
    );
}

const PrincipalMessage = () => {
    return (
        <div className="principal-message-container">
            {/* Principal Message content */}
            <div className="principal-message-content">
            <br></br>
            <br></br>
            <br></br>
                <h2 className="principal-message-title">Dear Friends...</h2>
                <p>
                    I would like to give the credit of these achievements to my students, teachers, and administrative staff. SSMM is a Pachora-based college run by PTCES. SSMM is amongst the most well-known colleges of the District with NAAC 'B' grade & the UGC recognition of college. The college was established in the year 1970 & the 39-year journey has been a story of hard work, sincere effort toward quality enhancement, quantitative growth & expansion.
                </p>
                <ul className="principal-message-list">
                    <li>During this short span, the number of students has increased considerably & characteristically almost 50% of the students have been girl students. Vice versa, there's been growth in infrastructure - a large campus with Gymkhana, Auditorium, a large Playground, Boatclub, Health center, well-equipped Departments, Science Lab, Computer Lab, and Spoken English Lab and experienced a qualified faculty.</li>
                    <li>Our college is forging ahead academically in all three streams, reinventing itself in terms of the add-on courses, suited to meet contemporary needs of the youth. While acknowledging the imperatives of pragmatism, it ensures that knowledge does not get drowned in a sea of information. For this, its dedicated staff strive to inculcate in the students a love for knowledge and encourage them “to seek, to strive and never to yield” in its pursuit. A very well-endowed library and excellent laboratory facilities are additional assets. It is little wonder, and then, that SSMM College has positioned itself firmly on the map of North Maharashtra University and figures on its merit lists with unfailing regularity.</li>
                    <li>The infrastructure increase has resulted in visible improvement in results. The percentage of overall passing, the number of university rankers, state & national sports persons are growing from year to year. Apart from looking after their academics the college also tries to inculcate among students a sense of social commitment through various research projects & co-curricular programs, thus trying to reach out the masses in various ways.</li>
                    <li>The new millennium underscored the need for the whole world to work together. One important means to togetherness is communication and by launching this website, the college has displayed the modern way of mass communication.</li>
                    <li>Without exaggeration, I can claim that SSMM College is a point of excellence and commitment, molding young minds and shaping our youth for a bright tomorrow.</li>
                    <li>Our commitment is for the rural students, wards of the farming community & residents of Pachora town.</li>
                </ul>
                <p>Thanking You !!</p>
                <p className="principal-message-footer">
                    <strong>Profile Details Download</strong>
                </p>
                <p id="Principle" className="principal-signature">
                    <strong>Dr. Shirish B Patil</strong><br />
                    Principal
                </p>
            </div>
            <div className="principal-image">
                <img src={sbp} alt="Principal" className="principal-img" />
            </div>
            
        </div>
    );
}

const Management = () => {
    return (
        <div className="management-container">
            <President />
            <VicePresident />
            <PrincipalMessage />
        </div>
    );
}

export default Management;
