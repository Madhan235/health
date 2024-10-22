function Appointment() {
  return (
    <div className="p-4">
      <header className="text-2xl font-bold text-center mb-6">
        Create Appointment
      </header>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-xs">
          <h2 className="text-lg font-semibold mb-2">Online Consultation</h2>
          <div className="w-full h-32 relative">
            <img
              src="offline.webp"
              alt="Online Consultation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-full max-w-xs">
          <h2 className="text-lg font-semibold mb-2">Offline Consultation</h2>
          <div className="w-full h-32 relative">
            <img
              src="/online.jpg"
              alt="Offline Consultation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
