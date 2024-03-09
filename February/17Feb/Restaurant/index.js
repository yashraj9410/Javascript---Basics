document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('bookingForm');
    const timeSlotSelect = document.getElementById('timeSlot');
    const tableNoSelect = document.getElementById('tableNo');

    // Load existing bookings from local storage
    const bookings = JSON.parse(localStorage.getItem('bookings')) || {};

    // Update table availability based on existing bookings for the selected time slot
    timeSlotSelect.addEventListener('change', function() {
        const selectedTimeSlot = this.value;
        updateTableAvailability(selectedTimeSlot);
    });

    // Initialize table availability for the default time slot
    updateTableAvailability(timeSlotSelect.value);

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // constructor methods (objects)
        const formData = new FormData(this);
        const bookingDetails = {};

        // just populating the data according to our need 
        formData.forEach((value, key) => {
            bookingDetails[key] = value;
        });

        // booking Id 
        const bookingId = generateBookingId();
        bookingDetails['bookingId'] = bookingId;

        storeBookingDetails(bookingId, bookingDetails);

        console.log('Booking Details:', bookingDetails);

        alert('Your booking ID is: ' + bookingId);

        this.reset();
    });

    function generateBookingId() {
        return 'BOOK' + Math.random().toString(36).toUpperCase();
    }

    function storeBookingDetails(bookingId, bookingDetails) {
        let bookings = JSON.parse(localStorage.getItem('bookings')) || {};
        bookings[bookingId] = bookingDetails;
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }

    // this function takes the value of current selected time slot using the event listener
    function updateTableAvailability(selectedTimeSlot) {
        const bookedTables = getBookedTables(selectedTimeSlot);

        // Enable all options
        tableNoSelect.querySelectorAll('option').forEach(option => {
            option.disabled = false;
        });

        // Disable already booked tables
        bookedTables.forEach(table => {
            // discover about the below line .
            const option = tableNoSelect.querySelector(`option[value="${table}"]`);
            if (option) {
                option.disabled = true;
            }
        });
    }

    function getBookedTables(timeSlot) {
        const bookedTables = [];
        for (const bookingId in bookings) {
            const booking = bookings[bookingId];
            if (booking.timeSlot === timeSlot) {
                bookedTables.push(booking.tableNo);
            }
        }
        return bookedTables;
    }

    // CANCEL Functionality
    const cancelBookingForm = document.getElementById('cancelBookingForm');

    cancelBookingForm.addEventListener('submit', function(event) {
        event.preventDefault();  // read more about this , used in react .

        // trim function is used to trim down all the whitespaces 
        const cancelBookingId = this.cancelBookingId.value.trim();
        if (!cancelBookingId) {
            alert('Please enter a valid Booking ID.');
            return;
        }

        if (cancelBooking(cancelBookingId)) {
            alert('Booking deleted successfully.');
        } else {
            alert('Booking not found. Please enter a valid Booking ID.');
        }

        this.reset();
    });

    function cancelBooking(bookingId) {
        let bookings = JSON.parse(localStorage.getItem('bookings')) || {};
        if (bookings[bookingId]) {
            delete bookings[bookingId];
            localStorage.setItem('bookings', JSON.stringify(bookings));
            return true;
        }
        return false;
    }

    // Function to populate the current bookings table
    function populateCurrentBookingsTable() {
        const bookingTableBody = document.getElementById('bookingTableBody');
        bookingTableBody.innerHTML = ''; // Clear existing table rows

        const bookings = JSON.parse(localStorage.getItem('bookings')) || {};
        for (const bookingId in bookings) {
            const booking = bookings[bookingId];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${booking.tableNo}</td>
                <td>${booking.timeSlot}</td>
            `;
            bookingTableBody.appendChild(row);
        }
    }

    // Populate the current bookings table initially
    populateCurrentBookingsTable();

});
