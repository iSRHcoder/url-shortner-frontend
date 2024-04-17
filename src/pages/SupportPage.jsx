/* eslint-disable react/no-unescaped-entities */

const SupportPage = () => {
  return (
    <>
      <div className="p-5">
        <div className="d-flex justify-content-start align-items-start flex-column">
          <div className="d-flex justify-content-start align-items-start flex-column">
            Welcome to ThaliPoint's Support Center! We are here to assist you
            with any questions or concerns you may have regarding your food
            orders. Below, you'll find information on common topics to help make
            your Thali ordering experience smooth and enjoyable.
          </div>
          <h4>Frequently Asked Questions (FAQs)</h4>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>1. Ordering and Payments</h5>

            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How do I place a Thali order?</strong>
              You can place a Thali order by exploring our menu, selecting the
              items you desire, and proceeding to checkout.
              <strong> What payment methods do you accept?</strong>
              We accept major credit cards, online payment, and other secure
              payment methods. For more details, please visit our Payment
              Methods page.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>2. Thali Options and Delivery</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How can I customize my Thali?</strong>
              You can customize your Thali by selecting your preferred dishes
              and specifying any special instructions during the ordering
              process.
              <strong>What are your delivery areas and times?</strong>
              Delivery areas and times may vary. Please refer to our Delivery
              Information page for detailed information.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>3. Returns and Refunds</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>What if I'm not satisfied with my Thali?</strong>
              If you're not satisfied with your Thali, please contact our
              support team within [X] hours of receiving your order. Visit our
              Returns & Refunds page for instructions.
              <strong>How does your refund policy work?</strong>
              We offer refunds for returned Thali items in accordance with our
              Refund Policy. Please review this policy for more information.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>4. Account and Security</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How do I create a THALIPOINT account?</strong>
              You can create an account by clicking on the "Sign Up" link and
              following the registration process.
              <strong>How can I update my account details?</strong>
              To update your account details, log in to your account and visit
              the "Account Settings" page.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
