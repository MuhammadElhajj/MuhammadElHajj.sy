import "./CaseStudies.css";
import { FaAngleRight } from "react-icons/fa6";
import photo1 from "../images/Cmputer.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/Youtube.jpg";

function CaseStudies() {
  return (
    <div className="CaseStudies" id="CaseStudies">
      <h2>Case Studies</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        nobis laboriosam iusto maxime reiciendis earum aliquid tenetur ab
        ducimus, incidunt, sequi assumenda? Repellendus nisi ducimus ipsum ea
        id, nobis facilis.
      </p>

      <div className="CaseStudiesContainer-1">
        <div className="part-one">
          <h4>Fintech</h4>
          <h3>Cmputer Since</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            mollitia rerum, molestiae, architecto assumenda corrupti, velit
            provident officia blanditiis explicabo aspernatur nam officiis ab
            repudiandae tempore porro fugit cupiditate sit.
          </p>
          <button>
            <span>View Case Study </span>
            <FaAngleRight />
          </button>
        </div>
        <div className="part-tow">
          <img src={photo1} alt="Photo" />
        </div>
      </div>
      <div className="CaseStudiesContainer-2">
        <div className="part-one">
          <h4>Fintech</h4>
          <h3>Cmputer Since</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            mollitia rerum, molestiae, architecto assumenda corrupti, velit
            provident officia blanditiis explicabo aspernatur nam officiis ab
            repudiandae tempore porro fugit cupiditate sit.
          </p>
          <button>
            <span>View Case Study </span>
            <FaAngleRight />
          </button>
        </div>
        <div className="part-tow">
          <img src={photo2} alt="Photo" />
        </div>
      </div>
      <div className="CaseStudiesContainer-3">
        <div className="part-one">
          <h4>Fintech</h4>
          <h3>Cmputer Since</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            mollitia rerum, molestiae, architecto assumenda corrupti, velit
            provident officia blanditiis explicabo aspernatur nam officiis ab
            repudiandae tempore porro fugit cupiditate sit.
          </p>
          <button>
            <span>View Case Study </span>
            <FaAngleRight />
          </button>
        </div>
        <div className="part-tow">
          <img src={photo3} alt="Photo" />
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
