document.getElementById('btn-donate-now')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donate = getInputValue('input-add-donate')
        // console.log(donate)
        // const donate = document.getElementById('input-add-donate').value
        const adddonate = parseFloat(donate);
        if (adddonate > 0) {
            const donateArea = document.getElementById('donate-area').innerText;
            // console.log(donateArea)
            const balance = document.getElementById('account-blance').innerText;
            const mainBalance = parseFloat(balance);
            const newBalance = mainBalance - adddonate;
            document.getElementById('account-blance').innerText = newBalance;

            const donateAmount = document.getElementById('donate-amount').innerText;
            const newDonateAmount = parseFloat(donateAmount)
            const donateMoney = newDonateAmount + adddonate;
            document.getElementById('donate-amount').innerText = donateMoney;
            document.getElementById('histiry-1').innerText = adddonate + ' taka is ' + donateArea;

        }
        else {
            alert('donation faild')
        }

    })
document.getElementById('btn-donate-now-2')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donate = getInputValue('input-add-donate-2')
        console.log(donate)
        // const donate = document.getElementById('input-add-donate').value
        const adddonate = parseFloat(donate);
        if (adddonate > 0) {
            const donateArea = document.getElementById('donate-area-2').innerText;
            const balance = document.getElementById('account-blance').innerText;
            const mainBalance = parseFloat(balance);
            const newBalance = mainBalance - adddonate;
            document.getElementById('account-blance').innerText = newBalance;

            const donateAmount = document.getElementById('donate-amount-2').innerText;
            const newDonateAmount = parseFloat(donateAmount)
            const donateMoney = newDonateAmount + adddonate;
            document.getElementById('donate-amount-2').innerText = donateMoney;
            document.getElementById('histiry-2').innerText = adddonate + ' taka is ' + donateArea;
        }
        else {
            alert('donation faild')
        }

    })
document.getElementById('btn-donate-now-3')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const donate = getInputValue('input-add-donate-3')
        console.log(donate)
        // const donate = document.getElementById('input-add-donate').value
        const adddonate = parseFloat(donate);
        if (adddonate > 0) {
            const donateArea = document.getElementById('donate-area-3').innerText;
            const balance = document.getElementById('account-blance').innerText;
            const mainBalance = parseFloat(balance);
            const newBalance = mainBalance - adddonate;
            document.getElementById('account-blance').innerText = newBalance;

            const donateAmount = document.getElementById('donate-amount-3').innerText;
            const newDonateAmount = parseFloat(donateAmount)
            const donateMoney = newDonateAmount + adddonate;
            document.getElementById('donate-amount-3').innerText = donateMoney;
            document.getElementById('histiry-3').innerText = adddonate + ' taka is ' + donateArea;
        }
        else {
            alert('donation faild')
        }

    })