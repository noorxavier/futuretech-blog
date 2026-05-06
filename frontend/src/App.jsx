import React from "react";

export default function App() {
  return (
    <div className="bg-[#f5f3ee] text-[#1b1b1b] min-h-screen scroll-smooth">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#f5f3ee]/90 backdrop-blur-xl border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-black tracking-tight">
              FutureTech Journal
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-lg font-semibold text-gray-700">

            <a href="#home" className="hover:text-black transition">
              Home
            </a>

            <a href="#automation" className="hover:text-black transition">
              Automation
            </a>

            <a href="#impact" className="hover:text-black transition">
              Impact
            </a>

            <a href="#future" className="hover:text-black transition">
              Future
            </a>

          </nav>

         

        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="max-w-5xl">

          <p className="uppercase tracking-[0.25em] text-sm font-bold text-gray-500">
            Future of Technology
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mt-8">
            How Automation
            <br />
            Is Reshaping
            <br />
            The Modern World
          </h1>

          <p className="text-2xl text-gray-600 mt-10 leading-relaxed max-w-4xl">
            Automation is rapidly transforming businesses, industries,
            workplaces, and everyday life. From Artificial Intelligence
            and robotics to smart factories and autonomous systems,
            automation technologies are increasing productivity,
            reducing human effort, and redefining how organizations
            operate in the digital age.
          </p>

        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
          alt="Automation"
          className="w-full h-[600px] object-cover rounded-[40px]"
        />

      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-24">

        {/* Introduction */}
        <section className="mb-32">

          <h2 className="text-5xl font-black mb-10">
            Introduction to Automation
          </h2>

          <p className="text-2xl leading-relaxed text-gray-700">
            Automation refers to the use of machines, software,
            Artificial Intelligence, and advanced technologies to
            perform tasks with minimal human intervention. Modern
            organizations are increasingly integrating automation
            into their operations to improve efficiency, reduce
            repetitive work, minimize human errors, and accelerate
            productivity.
          </p>

          <p className="text-2xl leading-relaxed text-gray-600 mt-8">
            The rise of automation is driven by rapid advancements in
            cloud computing, machine learning, robotics, and AI-powered
            decision-making systems. Businesses across industries are
            leveraging intelligent technologies to optimize workflows,
            streamline operations, and deliver faster services to
            customers.
          </p>

          <p className="text-2xl leading-relaxed text-gray-600 mt-8">
            Today, automation is not limited to factories and industrial
            environments. It is now deeply integrated into healthcare,
            finance, logistics, education, retail, cybersecurity,
            transportation, and even smart homes.
          </p>

        </section>

        {/* Types of Automation */}
        <section
          id="automation"
          className="mb-32 scroll-mt-32"
        >

          <h2 className="text-5xl font-black mb-12">
            Types of Automation Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white border border-gray-200 rounded-[32px] p-10">

              <h3 className="text-3xl font-bold mb-5">
                Industrial Automation
              </h3>

              <p className="text-xl text-gray-600 leading-relaxed">
                Industrial automation uses robotics, sensors,
                programmable systems, and AI-driven machinery to
                automate manufacturing processes, assembly lines,
                packaging systems, and quality control operations.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mt-6">
                Smart factories powered by automation can operate
                continuously with higher efficiency, precision,
                and reduced operational costs.
              </p>

            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] p-10">

              <h3 className="text-3xl font-bold mb-5">
                Software Automation
              </h3>

              <p className="text-xl text-gray-600 leading-relaxed">
                Businesses use automation software to streamline
                repetitive digital tasks such as email handling,
                payroll management, customer support, workflow
                approvals, and data processing.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mt-6">
                Robotic Process Automation (RPA) tools help
                organizations reduce manual work and improve
                operational accuracy.
              </p>

            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] p-10">

              <h3 className="text-3xl font-bold mb-5">
                AI-Powered Automation
              </h3>

              <p className="text-xl text-gray-600 leading-relaxed">
                Artificial Intelligence enables systems to analyze
                data, recognize patterns, make decisions, and
                automate complex workflows intelligently.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mt-6">
                AI automation is widely used in recommendation
                systems, virtual assistants, fraud detection,
                predictive analytics, and autonomous vehicles.
              </p>

            </div>

            <div className="bg-white border border-gray-200 rounded-[32px] p-10">

              <h3 className="text-3xl font-bold mb-5">
                Smart Home Automation
              </h3>

              <p className="text-xl text-gray-600 leading-relaxed">
                Smart homes use IoT devices and connected systems
                to automate lighting, climate control, security,
                entertainment, and household appliances.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mt-6">
                Voice assistants and intelligent devices allow
                users to control home environments efficiently
                and remotely.
              </p>

            </div>

          </div>

        </section>

        {/* Impact */}
        <section
          id="impact"
          className="mb-32 scroll-mt-32"
        >

          <h2 className="text-5xl font-black mb-12">
            Impact of Automation on Industries
          </h2>

          <p className="text-2xl text-gray-700 leading-relaxed">
            Automation technologies are transforming industries
            worldwide. Healthcare organizations use AI systems
            for medical diagnostics and patient monitoring.
            Financial institutions automate fraud detection,
            risk analysis, and algorithmic trading systems.
            Logistics companies optimize supply chains using
            intelligent tracking and warehouse automation.
          </p>

          <p className="text-2xl text-gray-600 leading-relaxed mt-8">
            Educational institutions are adopting AI-powered
            learning systems to personalize education and
            improve student engagement. Retail businesses
            use automation for inventory management,
            customer analytics, and recommendation engines.
          </p>

          <div className="bg-black text-white rounded-[40px] p-12 mt-14">

            <h3 className="text-4xl font-black mb-8">
              Major Benefits of Automation
            </h3>

            <ul className="space-y-6 text-xl text-gray-300 list-disc pl-6">

              <li>Higher operational efficiency</li>

              <li>Reduced human error and operational costs</li>

              <li>Improved productivity and scalability</li>

              <li>24/7 automated operations</li>

              <li>Enhanced customer experiences</li>

              <li>Faster data processing and analytics</li>

              <li>Better workflow optimization</li>

            </ul>

          </div>

        </section>

        {/* Challenges */}
        <section className="mb-32">

          <h2 className="text-5xl font-black mb-12">
            Challenges and Risks
          </h2>

          <div className="bg-white border border-gray-200 rounded-[40px] p-12">

            <ul className="space-y-6 text-2xl text-gray-700 list-disc pl-8">

              <li>Job displacement and workforce disruption</li>

              <li>High implementation and maintenance costs</li>

              <li>Cybersecurity and privacy concerns</li>

              <li>Dependency on intelligent systems</li>

              <li>Ethical concerns around AI decision-making</li>

              <li>Need for employee reskilling and adaptation</li>

            </ul>

          </div>

          <p className="text-2xl text-gray-600 leading-relaxed mt-10">
            Governments, businesses, and researchers are actively
            working on responsible AI governance, cybersecurity
            frameworks, and workforce development strategies
            to address these challenges effectively.
          </p>

        </section>

        {/* Future */}
        <section
          id="future"
          className="mb-32 scroll-mt-32"
        >

          <h2 className="text-5xl font-black mb-12">
            The Future of Automation
          </h2>

          <p className="text-2xl text-gray-700 leading-relaxed">
            Future automation systems will combine Artificial
            Intelligence, robotics, machine learning, IoT,
            and cloud computing to create highly intelligent
            environments capable of autonomous decision-making.
          </p>

          <p className="text-2xl text-gray-600 leading-relaxed mt-8">
            Experts believe automation will continue reshaping
            the global economy by improving productivity and
            enabling new forms of innovation. Autonomous
            transportation, AI-driven healthcare systems,
            smart cities, and intelligent manufacturing
            are expected to become increasingly common
            in the coming decades.
          </p>

          <p className="text-2xl text-gray-600 leading-relaxed mt-8">
            While automation introduces challenges, it also
            creates opportunities for new industries,
            emerging technologies, and future careers
            focused on AI development, robotics engineering,
            cybersecurity, and intelligent system management.
          </p>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div>

              <h3 className="text-3xl font-black">
                FutureTech Journal
              </h3>

              <p className="text-gray-600 mt-2">
                Exploring technology, innovation, and the future of society.
              </p>

            </div>

            <div className="flex gap-8 text-gray-600 font-semibold">

              <a href="#home" className="hover:text-black transition">
                Home
              </a>

              <a href="#automation" className="hover:text-black transition">
                Automation
              </a>

              <a href="#impact" className="hover:text-black transition">
                Impact
              </a>

              <a href="#future" className="hover:text-black transition">
                Future
              </a>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}