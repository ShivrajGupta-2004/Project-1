document.addEventListener('DOMContentLoaded', () => {
    // Event data
    const events = [
        {
            type: 'Corporate Meetup',
            date: 'September 25, 2024',
            location: 'Thane, Mumbai, India',
            payment: 'Rs 950/-',
            description: '30 male & 30 female\n4 weekend Saturday & Sunday\nTomorrow is Zoom meeting 2 pm\nTiming : 9 am to 6 pm\nDC: T-shirt provided\nLocation: nearby mil jayega Mumbai\nEk locations pe ek ldka & ek ldki rahege\nPayment : Male : 700/-\nFemale : 1000/-\nWork: approaching\nNeed good communication girls nd boys',
            dressCode: 'T-shirt provided',
            participants: '30 male & 30 female',
            timing: '9 am to 6 pm'
        },
        {
            type: 'Sport Event',
            date: 'September 25, 2024',
            location: 'Thane, Mumbai, India',
            payment: 'Rs 950/-',
            description: '30 male & 30 female\n4 weekend Saturday & Sunday\nTomorrow is Zoom meeting 2 pm\nTiming : 9 am to 6 pm\nDC: T-shirt provided\nLocation: nearby mil jayega Mumbai\nEk locations pe ek ldka & ek ldki rahege\nPayment : Male : 700/-\nFemale : 1000/-\nWork: approaching\nNeed good communication girls nd boys',
            dressCode: 'T-shirt provided',
            participants: '30 male & 30 female',
            timing: '9 am to 6 pm'
        },
        {
            type: 'Entertainment Event',
            date: 'September 25, 2024',
            location: 'Thane, Mumbai, India',
            payment: 'Rs 950/-',
            description: '30 male & 30 female\n4 weekend Saturday & Sunday\nTomorrow is Zoom meeting 2 pm\nTiming : 9 am to 6 pm\nDC: T-shirt provided\nLocation: nearby mil jayega Mumbai\nEk locations pe ek ldka & ek ldki rahege\nPayment : Male : 700/-\nFemale : 1000/-\nWork: approaching\nNeed good communication girls nd boys',
            dressCode: 'T-shirt provided',
            participants: '30 male & 30 female',
            timing: '9 am to 6 pm'
        },
        // Add more events as needed
    ];

     // Populate upcoming events and dropdown
    const eventContainer = document.getElementById('event-container');
    const eventSelect = document.getElementById('event-select');

    function renderEvents() {
        eventContainer.innerHTML = '';
        eventSelect.innerHTML = '';

        events.forEach((event, index) => {
            // Create event item
            const eventItem = document.createElement('div');
            eventItem.className = 'event-items';
            eventItem.innerHTML = `
                <h2>${event.type}</h2>
                <p>Date: ${event.date}</p>
                <p>Location: ${event.location}</p>
                <p>Payment: ${event.payment}</p>
                <a href="#" class="event-btn" data-index="${index}">View Detail</a>
            `;
            eventContainer.appendChild(eventItem);

            // Add option to select
            const option = document.createElement('option');
            option.value = `event-${index}`;
            option.textContent = event.type;
            eventSelect.appendChild(option);
        });
    }

    renderEvents();

    // Event detail modal
    const eventModal = document.getElementById('event-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalLocation = document.getElementById('modal-location');
    const modalPayment = document.getElementById('modal-payment');
    const modalDescription = document.getElementById('modal-description');
    const modalDressCode = document.getElementById('modal-dress-code');
    const modalParticipants = document.getElementById('modal-participants');
    const modalTiming = document.getElementById('modal-timing');
    const closeModal = document.querySelector('#event-modal .close-btn');
    const joinEventBtn = document.getElementById('join-event-btn');

    eventContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('event-btn')) {
            e.preventDefault();
            const index = e.target.getAttribute('data-index');
            const event = events[index];
            modalTitle.textContent = event.type;
            modalDate.textContent = `Date: ${event.date}`;
            modalLocation.textContent = `Location: ${event.location}`;
            modalPayment.textContent = `Payment: ${event.payment}`;
            modalDressCode.textContent = `Dress Code: ${event.dressCode}`;
            modalParticipants.textContent = `Participants: ${event.participants}`;
            modalTiming.textContent = `Timing: ${event.timing}`;
            modalDescription.textContent = `Notic: ${event.notic}`;
            eventModal.style.display = 'block';

            joinEventBtn.style.display = 'inline-block';
        }
    });

    closeModal.addEventListener('click', () => {
        eventModal.style.display = 'none';
    });

    // Add Event modal
    const addEventModal = document.getElementById('add-event-modal');
    const addEventBtn = document.getElementById('add-event-btn');
    const closeAddEvent = document.getElementById('close-add-event');
    const addEventForm = document.getElementById('add-event-form');

    addEventBtn.addEventListener('click', () => {
        addEventModal.style.display = 'block';
    });

    closeAddEvent.addEventListener('click', () => {
        addEventModal.style.display = 'none';
    });

    addEventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const type = document.getElementById('type').value.trim();
        const date = document.getElementById('date').value.trim();
        const location = document.getElementById('location').value.trim();
        const payment = document.getElementById('payment').value.trim();
        const dressCode = document.getElementById('dress-code').value.trim();
        const participants = document.getElementById('participants').value.trim();
        const timing = document.getElementById('timing').value.trim();
        const notic = document.getElementById('notic').value.trim();

        const newEvent = {
            type,
            date,
            location,
            payment,
            timing,
            participants,
            dressCode,
            notic
        };

        events.push(newEvent);
        renderEvents();
        addEventModal.style.display = 'none';
        addEventForm.reset();
    });
});