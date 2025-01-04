// src/pages/Contact.jsx
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Name</label>
              <input type="text" className="w-full bg-gray-800 rounded-lg p-3" />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input type="email" className="w-full bg-gray-800 rounded-lg p-3" />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea className="w-full bg-gray-800 rounded-lg p-3 h-32"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;