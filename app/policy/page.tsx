import Header from "components/Header";
import Footer from "components/Footer";

export default function PolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy & Terms of Service</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Privacy Policy</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="mb-4">
                We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we handle your data when you visit our website and tell you about your privacy rights.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
              <p className="mb-4">
                We collect information that you provide directly to us when using our transformer voltage calculator, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Input values for calculations</li>
                <li>Usage patterns and preferences</li>
                <li>Technical information about your device</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h3>
              <p className="mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our calculator service</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Communicate with you about updates and improvements</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Terms of Service</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                By using our transformer voltage calculator, you agree to these terms of service.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Use License</h3>
              <p className="mb-4">
                We grant you a personal, non-exclusive, non-transferable, limited license to use our calculator for personal, non-commercial purposes.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Disclaimer</h3>
              <p className="mb-4">
                The calculations provided by our tool are for reference purposes only. We make no warranties about the accuracy or reliability of the results. Users should verify calculations independently for critical applications.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                If you have any questions about our Privacy Policy or Terms of Service, please contact us at:
              </p>
              <p className="mb-4">
                Email: support@example.com
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 