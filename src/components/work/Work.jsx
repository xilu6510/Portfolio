import React, { useState } from "react";
import "./work.css";
import Card from "./Card.jsx";

const Data = [
  {
    id: 1,
    category: "experience",
    icon: "icon-briefcase",
    year: "MAY 22 - Current",
    title: "Website Developer",
    desc: "the Social Media Network",
  },
  {
    id: 2,
    category: "experience",
    icon: "icon-briefcase",
    year: "SEP 21 - FEB 22",
    title: "Website Developer",
    desc: "Tech Creative Partner",
  },

  {
    id: 3,
    category: "education",
    icon: "icon-graduation",
    year: "NOV 19 - APR 21",
    title: "Master of Information Technology",
    desc: "University of Sydney",
  },
  {
    id: 4,
    category: "education",
    icon: "icon-graduation",
    year: "FEB 19 - NOV 19",
    title: "Graduate Diploma in Information Technology",
    desc: "University of Sydney",
  },
];

const Work = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="about container section" id="experience">
      <h2 className="section-title">- Experience</h2>
      <div className="work-container grid">
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
          <p className="click-view" onClick={() => setOpen(true)}>
            click to view more
          </p>
        </div>

        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>

      <div className={open ? "work-details open" : "work-details"}>
        <i className="icon-close" onClick={() => setOpen(false)}></i>
        <h3>Website Developer (May 22 - Current)</h3>
        <h5>the Social Media Network</h5>

        <p>- Key responsibilities:</p>
        <ul>
          <li>
            Proficient in customising user-friendly and responsive web designs
            using HTML, CSS, and jQuery.
          </li>
          <li>
            Develop and maintain websites by WordPress with different page
            builders, like Elementor, WPBakery, Divi and Visual Composer.
          </li>
          <li>
            Expertise in selecting and configuring appropriate plugins, such as
            WooCommerce and Mailchimp, to enhance website functionality.
          </li>
          <li>
            Experienced in connecting websites to APIs via Zapier for seamless
            data transfer to databases.
          </li>
          <li>
            Host websites on diverse servers and performing website migrations
            between platforms like Ventraip, Linode, and others.
          </li>
          <li>
            Adept at leveraging SEO software, including Ahrefs, Google
            Analytics, and Google Search Console, for effective website
            optimisation.
          </li>
        </ul>

        <p>- Achievements:</p>
        <ul>
          <li>
            Proficient in customising user-friendly and responsive website
            designs using HTML, CSS and React over 10 websites.
          </li>
          <li>
            Develop and maintain over 30 websites by Wordpress with different
            page builders from the scratch
          </li>
          <li>
            Adept at leveraging SEO softwares, including Ahrefs, Google
            Analytics for effective website optimisation.
          </li>
        </ul>

        <h3>Website developer – Part Time (Sep 21 – Feb 22)</h3>
        <h5>Tech Creative Partner</h5>
        <p>- Key responsibilities:</p>
        <ul>
          <li>
            Develop a cutting-edge e-commerce website using WordPress and
            WooCommerce based on Bridge theme, and implement responsive design
            for mobile compatibility through CSS and JavaScript enhancements.
          </li>
          <li>
            Offer supplementary services, including Google Ads, Merchant Center
            integration, Google Analytics setup, and Google My Business
            optimisation, to enhance the website's overall performance and
            visibility.
          </li>
        </ul>

        <p> -Achievements:</p>
        <ul>
          <li>
            Identified and tailored WordPress plugins to enhance website
            functionality through efficient coding practices.
          </li>
          <li>
            Create comprehensive test plans and test cases for both mobile and
            web applications.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Work;
