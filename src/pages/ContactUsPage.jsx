const ContactUsPage = () => {
  return (
    <>
      <div className="d-flex justify-content-start align-items-start flex-column p-5">
        <p>
          Welcome to ThaliPoint! If you have any questions or need assistance,
          our Customer Support team is here to help you.
        </p>
        <ul className="d-inline-block">
          <li>
            <strong>Email:</strong> support@thalipoint.com
          </li>
          <li>
            <strong>Phone:</strong> 9403886801
          </li>
        </ul>
        <h3>Hours of Operation</h3>
        <p>
          Our Customer Support team is available to assist you during the
          following hours:
        </p>
        <ul className="d-inline-block">
          <li>
            <strong>Monday-Friday:</strong> 09:00AM-08:00PM
          </li>
          <li>
            <strong>Saturday:</strong> 10:00AM-06:00PM
          </li>
          <li>
            <strong>Sunday:</strong> Closed
          </li>
        </ul>
        <h5>
          Thank you for choosing ThaliPoint! Your satisfaction is our priority,
          and we look forward to serving you delicious thalis. Enjoy your
          culinary experience with ThaliPoint!
        </h5>
      </div>
    </>
  );
};

export default ContactUsPage;
