import React from 'react';
import css from "../../../images/css.svg";
import react from "../../../images/react.svg";
import bootstrap from "../../../images/bootstrap.svg";
import figma from "../../../images/figma.svg";
import tailwind from "../../../images/tailwind.png";
import netlify from "../../../images/netlify.png";
import github from "../../../images/github.svg";
import firebase from "../../../images/firebase.svg";
import html from "../../../images/html.svg";

const Technology = () => {
    return (
        <section>
        <h4 className="text-center font-bold text-5xl text-sky-900 my-8">
          Familiar Technologies
        </h4>
        <div className="gap-8  text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center w-3/4 mx-auto">
          <div>
            <img className="technology" src={css} alt="" />
            <h5 className="font-bold text-sky-900 text-xl">Css</h5>
            <hr className="border-2 border-sky-900 my-2" />
            <p className="font-semibold">
              I can make basic to intermediate design with vanilla css
            </p>
          </div>
          <div>
            <img className="technology" src={react} alt="" />
            <h5 className="font-bold text-sky-900 text-xl">React</h5>
            <hr className="border-2 border-sky-900 my-2" />
            <p className="font-semibold">
              I am comfortable with using react and with its many plugins. React
              is awesome
            </p>
          </div>
          <div>
            <img className="technology" src={bootstrap} alt="" />
            <h5 className="font-bold text-sky-900 text-xl">bootstrap</h5>
            <hr className="border-2 border-sky-900 my-2" />
            <p className="font-semibold">
              Bootstrap makes development faster and smoother. So I learned it
            </p>
          </div>
          <div>
            <img className="technology" src={figma} alt="" />
            <h5 className="font-bold text-sky-900 text-xl">Figma</h5>
            <hr className="border-2 border-sky-900 my-2" />
            <p className="font-semibold">
              I can utilize figma file to the best. Figma is very efficient for
              developing
            </p>
          </div>
          <div>
            <img className="technology" src={tailwind} alt="" />
            <h5 className="font-bold text-sky-900 text-xl">Tailwind</h5>
            <hr className="border-2 border-sky-900 my-2" />
            <p className="font-semibold">
              Tailwind is my favorite framework. It does not have a limit when
              it comes to design
            </p>
          </div>
          <div>
            <img className="technology" src={netlify} alt="" />
            <h5 className="font-bold text-sky-900 text-xl">Netlify</h5>
            <hr className="border-2 border-sky-900 my-2" />
            <p className="font-semibold">
              I like Netlify for its easer of use.Like Drag and drop and done
              hosting.
            </p>
          </div>
          <div>
            <img className="technology" src={github} alt="" />
            <h5 className="font-bold text-sky-900 text-xl">GitHub</h5>
            <hr className="border-2 border-sky-900 my-2" />
            <p className="font-semibold">
              I can work efficiently with gitHub. I like this very powerful
              tool.
            </p>
          </div>
          <div>
            <img className="technology" src={firebase} alt="" />
            <h5 className="font-bold text-sky-900 text-xl">Firebase</h5>
            <hr className="border-2 border-sky-900 my-2" />
            <p className="font-semibold">
              Firebase is my favorite for authentication. I can also work with
              other features
            </p>
          </div>
          <div>
            <img className="technology" src={html} alt="" />
            <h5 className="font-bold text-sky-900 text-xl">Html</h5>
            <hr className="border-2 border-sky-900 my-2" />
            <p className="font-semibold">
              I first started with html. Now I am confident about making
              anything given to me with html
            </p>
          </div>
        </div>
      </section>
    );
};

export default Technology;