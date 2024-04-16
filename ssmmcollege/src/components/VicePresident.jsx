import './VicePresident.css';
import vcresidents from "../assets/vcresidents.jpg";

const VicePresident = () => {
    return (
        <div className="vice-president-container">
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

export default VicePresident;
