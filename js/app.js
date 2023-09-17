const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.data);
        displayPhone(data.data); // Pass the data to displayPhone
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayPhone = phones => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.textContent = '';

    //display 20 phone only
    phones = phones.slice(0, 20)

    //display no phones found
    const noFoundPhone = document.getElementById('no-found-message')
    if (phones.length === 0) {
        noFoundPhone.classList.remove('d-none')
    } else {
        noFoundPhone.classList.add('d-none')
    }

    //display all phon
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.brand}</h5>
                            <p class="card-text">${phone.phone_name}.
            </p>
                        </div>
                    </div>
        `;
        phonesContainer.appendChild(phoneDiv);
    });
};


document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
})

// loadPhones();
