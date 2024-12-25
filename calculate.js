function getInputValue(id) {
    const value = document.getElementById(id).value;
    return value;
}

function getCardAmount(id) {
    const getAmount = document.getElementById(id).innerText;
    return getAmount;
}



document.getElementById('card-donate-btn').addEventListener('click', function () {
    // const inputAmount = parseFloat(document.getElementById('donate-amount').value);
    const inputAmount = parseFloat(getInputValue('donate-amount'));
    
    const inputAmount3 = parseFloat(getInputValue('donate-amount-3'));

    // const cardAmount = parseFloat(document.getElementById('card-amount').innerText);
    const cardAmount = parseFloat(getCardAmount('card-amount'));
    
    const cardAmount3 = parseFloat(getCardAmount('card-3-amount'));


    if (inputAmount < 0 || isNaN(inputAmount)) {
        alert('Failed to add money. Try again');
    }
    else {


        const totalCardAmount = inputAmount + cardAmount;
        const totalCardAmount3 = inputAmount3 + cardAmount3;
        

        document.getElementById('card-amount').innerText = totalCardAmount.toFixed(2);
        document.getElementById('card-3-amount').innerText = totalCardAmount.toFixed(2);


        const balance = parseFloat(document.getElementById('balance').innerText);
        const remainingBalance = balance - inputAmount;

        document.getElementById('balance').innerText = remainingBalance.toFixed(2);

        const donationName = document.getElementById('donation-name').innerText;
        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white border border-gray-200 rounded-md lg:w-full w-10/12 mx-auto py-7 px-5';

        historyItem.innerHTML = `
        <p class='text-lg font-style'>${inputAmount} Taka is Donated for ${donationName}</p>
        <p class='text-md'>Date: ${new Date().toDateString()} ${new Date().toTimeString()}</p>
        `
        const historyContainer = document.getElementById('history-body');

        historyContainer.insertBefore(historyItem, historyContainer.firstChild);

        document.getElementById('my_modal_4').showModal();

    }
})

document.getElementById('card-2-donate-btn').addEventListener('click',function(){
    const inputAmount2 = parseFloat(getInputValue('donate-amount-2'));
    const cardAmount2 = parseFloat(getCardAmount('card-2-amount'));

    if (inputAmount2 < 0 || isNaN(inputAmount2)) {
        alert('Failed to add money. Try again');
    }
    else {
        const totalCardAmount2 = inputAmount2 + cardAmount2;

        document.getElementById('card-2-amount').innerText = totalCardAmount2.toFixed(2);

        const balance = parseFloat(document.getElementById('balance').innerText);
        const remainingBalance = balance - inputAmount2;

        document.getElementById('balance').innerText = remainingBalance.toFixed(2);

        const donationName = document.getElementById('donation-name-2').innerText;
        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white border border-gray-200 rounded-md lg:w-full w-10/12 mx-auto py-7 px-5';

        historyItem.innerHTML = `
        <p class='text-lg font-style'>${inputAmount2} Taka is Donated for ${donationName}</p>
        <p class='text-md'>Date: ${new Date().toDateString()} ${new Date().toTimeString()}</p>
        `
        const historyContainer = document.getElementById('history-body');

        historyContainer.insertBefore(historyItem, historyContainer.firstChild);

        document.getElementById('my_modal_4').showModal();



    }


})

document.getElementById('card-3-donate-btn').addEventListener('click',function(){
    const inputAmount3 = parseFloat(getInputValue('donate-amount-3'));
    const cardAmount3 = parseFloat(getCardAmount('card-3-amount'));

    if (inputAmount3 < 0 || isNaN(inputAmount3)) {
        alert('Failed to add money. Try again');
    }
    else {
        const totalCardAmount3 = inputAmount3 + cardAmount3;

        document.getElementById('card-3-amount').innerText = totalCardAmount3.toFixed(2);

        const balance = parseFloat(document.getElementById('balance').innerText);
        const remainingBalance = balance - inputAmount3;

        document.getElementById('balance').innerText = remainingBalance.toFixed(2);

        const donationName = document.getElementById('donation-name-3').innerText;
        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white border border-gray-200 rounded-md lg:w-full w-10/12 mx-auto py-7 px-5';

        historyItem.innerHTML = `
        <p class='text-lg font-style'>${inputAmount3} Taka is Donated for ${donationName}</p>
        <p class='text-md'>Date: ${new Date().toDateString()} ${new Date().toTimeString()}</p>
        `
        const historyContainer = document.getElementById('history-body');

        historyContainer.insertBefore(historyItem, historyContainer.firstChild);

        document.getElementById('my_modal_4').showModal();



    }


})

// history tab

const historyTab = document.getElementById('btn-history');
const donateTab = document.getElementById('btn-donate');

historyTab.addEventListener('click', function () {
    historyTab.classList.add('btn-style', 'py-0', 'hover:bg-green-300', 'border-0');
    donateTab.classList.remove('btn-style', 'py-0', 'hover:bg-green-300');
    donateTab.classList.add('border', 'border-gray-400', 'rounded-md', 'hover:bg-green-300')



    document.getElementById('card-body').classList.add('hidden');
    document.getElementById('history-body').classList.remove('hidden');
})

// donate Tab

donateTab.addEventListener('click', function () {
    donateTab.classList.add('btn-style', 'py-0', 'hover:bg-green-300', 'border-0');
    historyTab.classList.remove('btn-style', 'py-0', 'hover:bg-green-400');
    historyTab.classList.add('border', 'border-gray-400', 'rounded-md', 'hover:bg-greeen-300');

    document.getElementById('history-body').classList.add('hidden');
    document.getElementById('card-body').classList.remove('hidden');



})
