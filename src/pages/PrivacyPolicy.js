import React from 'react';
import Navbar from '../components/Navbar';
import './PrivacyPolicy.css'
// import './AboutUs.css'
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='About'>
      <div className='promHomes'>
          <h1><i className="fa-solid fa-utensils"></i> Foodie Palace</h1>
          <p>Always here to provide Food</p>
        </div>
        <div className='PrivacyPolicy'>
          <h1>Privacy Policy</h1>
          <p>
            At Foodie Palace, we take your privacy seriously. This Privacy Policy
            outlines how we collect, use, and protect your personal information when
            you visit and interact with our website.
          </p>
          <h2>Information Collection and Use</h2>
          <p>
            When you visit Foodie Palace, we may collect certain information about
            your visit, such as your IP address, browser type, operating system, and
            the pages you viewed. This information is used to analyze trends,
            administer the site, track user movements, and gather demographic
            information for internal purposes.
          </p>
          <p>
            If you choose to provide us with your personal information, such as your
            name, email address, or any other details, we will only use that
            information for the purpose for which it was provided. We will never
            sell, rent, or disclose your personal information to any third parties
            without your consent, unless required by law.
          </p>
          <h2>Cookies</h2>
          <p>
            Foodie Palace uses cookies to enhance your browsing experience. Cookies
            are small text files that are stored on your computer or device. They
            help us improve the functionality and performance of our website and
            provide a personalized experience. You have the option to disable
            cookies in your browser settings, but please note that some features of
            the website may not function properly as a result.
          </p>
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. Please note that
            we are not responsible for the privacy practices or content of those
            websites. We encourage you to review the privacy policies of any
            third-party sites you visit.
          </p>
          <h2>Security</h2>
          <p>
            We take reasonable precautions to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the internet or electronic storage is 100% secure, and
            we cannot guarantee absolute security.
          </p>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be posted on this page with a revised date. We
            encourage you to review this Privacy Policy periodically for any
            updates.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us using the contact information provided on our Contact
            Us page.
          </p>
        </div>
        <br/><br/>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
