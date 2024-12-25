document.getElementById('card-donate-btn').addEventListener('click', function () {
    const inputAmount = parseFloat(document.getElementById('donate-amount').value);
    const cardAmount = parseFloat(document.getElementById('card-amount').innerText);

    if (inputAmount < 0 || isNaN(inputAmount)) {
        alert('Failed to add money. Try again');
    }
    else {


        const totalCardAmount = inputAmount + cardAmount;

        document.getElementById('card-amount').innerText = totalCardAmount.toFixed(2);

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
         
        historyContainer.insertBefore(historyItem , historyContainer.firstChild);

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

donateTab.addEventListener('click', function(){
    donateTab.classList.add('btn-style', 'py-0', 'hover:bg-green-300', 'border-0');
    historyTab.classList.remove('btn-style', 'py-0', 'hover:bg-green-400');
    historyTab.classList.add('border', 'border-gray-400', 'rounded-md', 'hover:bg-greeen-300');

    document.getElementById('history-body').classList.add('hidden');
    document.getElementById('card-body').classList.remove('hidden');



})
