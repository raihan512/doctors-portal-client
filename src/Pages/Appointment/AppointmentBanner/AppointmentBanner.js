import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';



const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className='mx-32'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
                <img alt='' src={chair} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default AppointmentBanner;