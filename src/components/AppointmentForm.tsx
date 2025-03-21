
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  CalendarCheck, 
  Clock, 
  Info, 
  User, 
  Mail, 
  Phone, 
  Check 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceTypes = [
  { id: 'consultation', label: 'General Consultation' },
  { id: 'testing', label: 'HIV/STI Testing' },
  { id: 'counseling', label: 'Sexual Health Counseling' },
  { id: 'education', label: 'Educational Session' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const AppointmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleServiceSelection = (serviceId: string) => {
    setSelectedService(serviceId);
  };
  
  const handleDateSelection = (date: string) => {
    setSelectedDate(date);
  };
  
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment Request:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    
    // Simulate submission
    setIsSubmitted(true);
  };
  
  // Generate some fake dates for the next 10 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 10; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          id: `date-${i}`,
          label: date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates;
  };
  
  const availableDates = generateDates();
  
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-border max-w-2xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <Check size={32} className="text-primary" />
          </div>
          <h2 className="text-2xl font-medium">Appointment Requested</h2>
          <p className="text-foreground/70 max-w-md">
            Thank you for your request. We'll confirm your appointment shortly
            via email. If you have any questions, please contact our support team.
          </p>
          <div className="mt-4 glass-effect p-4 rounded-xl w-full max-w-md">
            <div className="flex flex-col gap-3 text-left">
              <div className="flex items-start gap-3">
                <CalendarCheck size={20} className="text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Appointment Details</h3>
                  <p className="text-sm text-foreground/70">
                    {serviceTypes.find(s => s.id === selectedService)?.label} on {selectedDate} at {selectedTime}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User size={20} className="text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Your Information</h3>
                  <p className="text-sm text-foreground/70">
                    {formData.name} • {formData.email} • {formData.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button 
            className="mt-6 btn-pulse" 
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setSelectedService('');
              setSelectedDate('');
              setSelectedTime('');
              setFormData({
                name: '',
                email: '',
                phone: '',
                notes: '',
              });
            }}
          >
            Book Another Appointment
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium">Book an Appointment</h2>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map(step => (
            <div 
              key={step} 
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all",
                currentStep >= step 
                  ? "bg-primary" 
                  : "bg-primary/20"
              )}
            />
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Step 1: Service Type */}
        <div className={currentStep === 1 ? 'block' : 'hidden'}>
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Calendar size={20} className="mr-2 text-primary" />
            Select Service Type
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {serviceTypes.map(service => (
              <div 
                key={service.id}
                className={cn(
                  "border rounded-xl p-4 cursor-pointer transition-all",
                  selectedService === service.id 
                    ? "border-primary bg-primary/5" 
                    : "hover:border-primary/50"
                )}
                onClick={() => handleServiceSelection(service.id)}
              >
                <div className="flex items-start">
                  <div className={cn(
                    "w-5 h-5 rounded-full border flex items-center justify-center mr-3 mt-0.5",
                    selectedService === service.id 
                      ? "border-primary" 
                      : "border-foreground/20"
                  )}>
                    {selectedService === service.id && (
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{service.label}</h4>
                    <p className="text-sm text-foreground/70 mt-1">
                      {service.id === 'consultation' && 'General discussion about sexual health'}
                      {service.id === 'testing' && 'Confidential testing and results'}
                      {service.id === 'counseling' && 'Professional guidance and support'}
                      {service.id === 'education' && 'Learn about sexual health topics'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="button" 
              onClick={nextStep} 
              disabled={!selectedService}
              className="btn-pulse"
            >
              Next Step
            </Button>
          </div>
        </div>
        
        {/* Step 2: Date Selection */}
        <div className={currentStep === 2 ? 'block' : 'hidden'}>
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <CalendarCheck size={20} className="mr-2 text-primary" />
            Select Date
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {availableDates.map(date => (
              <div 
                key={date.id}
                className={cn(
                  "border rounded-lg p-3 cursor-pointer text-center transition-all",
                  selectedDate === date.label 
                    ? "border-primary bg-primary/5" 
                    : "hover:border-primary/50"
                )}
                onClick={() => handleDateSelection(date.label)}
              >
                <div className="text-sm">{date.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
            >
              Previous
            </Button>
            <Button 
              type="button" 
              onClick={nextStep} 
              disabled={!selectedDate}
              className="btn-pulse"
            >
              Next Step
            </Button>
          </div>
        </div>
        
        {/* Step 3: Time Selection */}
        <div className={currentStep === 3 ? 'block' : 'hidden'}>
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Clock size={20} className="mr-2 text-primary" />
            Select Time
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {timeSlots.map(time => (
              <div 
                key={time}
                className={cn(
                  "border rounded-lg p-3 cursor-pointer text-center transition-all",
                  selectedTime === time 
                    ? "border-primary bg-primary/5" 
                    : "hover:border-primary/50"
                )}
                onClick={() => handleTimeSelection(time)}
              >
                <div className="text-sm">{time}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
            >
              Previous
            </Button>
            <Button 
              type="button" 
              onClick={nextStep} 
              disabled={!selectedTime}
              className="btn-pulse"
            >
              Next Step
            </Button>
          </div>
        </div>
        
        {/* Step 4: Personal Information */}
        <div className={currentStep === 4 ? 'block' : 'hidden'}>
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <User size={20} className="mr-2 text-primary" />
            Your Information
          </h3>
          
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={16} className="text-foreground/50" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={16} className="text-foreground/50" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone size={16} className="text-foreground/50" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-1">Additional Notes (Optional)</label>
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                  <Info size={16} className="text-foreground/50" />
                </div>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="block w-full pl-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Any specific concerns or questions..."
                />
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h4 className="font-medium flex items-center">
              <Info size={16} className="mr-2 text-blue-600" />
              Appointment Summary
            </h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><span className="text-foreground/70">Service:</span> {serviceTypes.find(s => s.id === selectedService)?.label}</li>
              <li><span className="text-foreground/70">Date:</span> {selectedDate}</li>
              <li><span className="text-foreground/70">Time:</span> {selectedTime}</li>
            </ul>
          </div>
          
          <div className="flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
            >
              Previous
            </Button>
            <Button 
              type="submit" 
              disabled={!formData.name || !formData.email}
              className="btn-pulse"
            >
              Complete Booking
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
