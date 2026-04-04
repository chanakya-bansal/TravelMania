
import Hotel from "../assets/images/hotel.png";
import Restaurant from "../assets/images/restaurant.png";
import Entertainment from "../assets/images/entertainment.png";
import Home from "../assets/images/home.png";

const BOOKING_ITEMS = [
    { label: 'Hotel',         icon: Hotel,         type: 'hotel',         url: 'https://www.goibibo.com' },
    { label: 'Restaurant',    icon: Restaurant,    type: 'restaurant',    url: 'https://www.zomato.com' },
    { label: 'Entertainment', icon: Entertainment, type: 'entertainment', url: 'https://www.district.in' },
    { label: 'Travel',        icon: Home,          type: 'home',          url: 'https://www.makemytrip.com' },
];

const BookingBar = () => (
    <div className="toolbar booking-bar">
        <div className="toolbar-divider" />
        <span className="toolbar-section-label">Booking</span>

        {BOOKING_ITEMS.map((item) => (
            <button
                key={item.type}
                className={`tool-btn tool-btn--${item.type}`}
                onClick={() => window.open(item.url, '_blank')}
                title={`Book ${item.label}`}
            >
                <span className="tool-btn__icon">
                    <img src={item.icon} alt={item.label} width={20} height={20} />
                </span>
                <span className="tool-btn__label">{item.label}</span>
            </button>
        ))}
    </div>
);

export default BookingBar;
