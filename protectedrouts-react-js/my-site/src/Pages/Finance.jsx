import React from "react";

const Finance = () => {
  const financeStats = [
    { title: "Annual Budget", value: "₹45 Crores", icon: "💰" },
    { title: "Scholarships Awarded", value: "₹5 Crores", icon: "🎓" },
    { title: "Research Grants", value: "₹12 Crores", icon: "🔬" },
    { title: "Endowment Funds", value: "₹20 Crores", icon: "🏛️" },
  ];

  const scholarshipPrograms = [
    {
      name: "Merit-Based Scholarship",
      amount: "50%-100% Tuition Fee Waiver",
      eligibility: "Top 5% of Class",
    },
    {
      name: "Need-Based Aid",
      amount: "₹50,000 - ₹2,00,000 per year",
      eligibility: "Low-income Families",
    },
    {
      name: "Research Fellowship",
      amount: "₹1,00,000 per year",
      eligibility: "PG & PhD Students",
    },
  ];

  const faqList = [
    {
      question: "How can I apply for scholarships?",
      answer:
        "Students can apply for scholarships through the online portal during admission or through the annual finance office application.",
    },
    {
      question: "When is the tuition fee due?",
      answer:
        "Tuition fees are generally due at the beginning of each semester. Late payments may attract penalties.",
    },
    {
      question: "Does the university provide financial counseling?",
      answer:
        "Yes, our finance office provides free financial counseling for students and parents.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* ===== Hero Section ===== */}
      <section className="relative h-[50vh] bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Finance Department</h1>
          <p className="text-lg sm:text-2xl max-w-2xl mx-auto">
            Managing University Funds, Scholarships, Grants, and Financial Planning for Students
          </p>
        </div>
      </section>

      {/* ===== Overview ===== */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Department Overview</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          The Finance Department at Sunrise University ensures the effective management of funds, budgets, and resources. We oversee all financial operations including tuition fees, scholarships, endowments, research grants, and strategic investments. Our mission is to support students, faculty, and staff through transparent financial policies and responsible resource allocation.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          With a dedicated team of financial experts, the department works closely with various academic and administrative units to ensure timely budgeting, accurate accounting, and compliance with government regulations. We also provide guidance on personal finance, scholarships, and funding opportunities for students and researchers.
        </p>
      </section>

      {/* ===== Finance Stats ===== */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Financial Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {financeStats.map((stat, i) => (
              <div key={i} className="bg-white shadow rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-xl font-bold">{stat.value}</h3>
                <p className="text-gray-500">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Scholarships & Aid ===== */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Scholarships & Financial Aid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scholarshipPrograms.map((scholarship, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{scholarship.name}</h3>
              <p className="text-gray-700 mb-1"><strong>Amount:</strong> {scholarship.amount}</p>
              <p className="text-gray-700"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Annual Reports / Downloads ===== */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Annual Reports & Financial Documents</h2>
          <p className="text-gray-700 mb-6">
            Access detailed reports on budgets, expenditures, and grants for each fiscal year.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Download 2025 Report</a>
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Download 2024 Report</a>
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Download 2023 Report</a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqList.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Contact / Footer ===== */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">Finance Department</h3>
            <p>Sunrise University</p>
            <p>Managing University Funds, Scholarships, and Grants</p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-white">Overview</a></li>
              <li><a href="#scholarships" className="hover:text-white">Scholarships</a></li>
              <li><a href="#reports" className="hover:text-white">Reports</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <p>Email: finance@sunriseuniversity.edu</p>
            <p>Phone: +91 12345 67890</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">&copy; 1985-2026 Sunrise University. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Finance;
