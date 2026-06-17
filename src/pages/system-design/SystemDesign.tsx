import { useEffect } from "react";
import { getJson } from "../../s3Interfaces/getJson";
import "./system-design.css";

const SystemDesign = () => {
  useEffect(() => {
    let folder = "text";
    let pageName = "systemDesign";
    getJson(folder, pageName).then((data) => console.log(data));
  }, []);

  return (
    <main className="page">
      <h1 className="page-title">System Design</h1>
      <section className="design-grid">
        <div className="design-card">
          <h4>Design 1</h4>
          <p>Link 1</p>
        </div>
        <div className="design-card">
          <h4>Design 2</h4>
          <p>Link 2</p>
        </div>
        <div className="design-card">
          <h4>Design 3</h4>
          <p>Link 3</p>
        </div>
      </section>
    </main>
  );
};

export default SystemDesign;
