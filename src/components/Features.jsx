import { FaRobot, FaPenNib, FaShieldAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">

      <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
        <FaRobot className="text-4xl text-blue-500 mb-5" />

        <h2 className="text-2xl font-bold mb-3">
          AI Summaries
        </h2>

        <p className="text-gray-400">
          Generate intelligent blog summaries instantly using AI.
        </p>
      </div>

      <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
        <FaShieldAlt className="text-4xl text-blue-500 mb-5" />

        <h2 className="text-2xl font-bold mb-3">
          Toxic Detection
        </h2>

        <p className="text-gray-400">
          Detect harmful or toxic comments automatically.
        </p>
      </div>

      <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
        <FaPenNib className="text-4xl text-blue-500 mb-5" />

        <h2 className="text-2xl font-bold mb-3">
          Smart Writing
        </h2>

        <p className="text-gray-400">
          Enhance creativity with AI-powered writing assistance.
        </p>
      </div>

    </section>
  );
}

export default Features;