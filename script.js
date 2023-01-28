const input = document.querySelector('#reg-no');
const btn = document.querySelector('#res-btn');
const show = document.querySelector('#show');

btn.addEventListener('click', () => {
    const reg = input.value;
    if (reg) {
        apiData(reg);
    }
    else {
        show.style.display = 'none';
        document.getElementById('error').innerHTML = "Please enter Registration no.";
    }
})

async function apiData(reg) {
    try {
        const promiseData = await fetch(`https://7svrgqfdy6.execute-api.ap-south-1.amazonaws.com/prod/${reg}`);
        const data = await promiseData.json();

        document.getElementById('error').innerHTML = ""
        show.style.display = '';

        document.querySelector('#Name').innerHTML = data.Item.Name.S;
        document.querySelector('#Reg-No').innerHTML = data.Item['Reg No'].N;
        document.querySelector('#Collage').innerHTML = data.Item.College.S;
        document.querySelector('#Branch').innerHTML = data.Item.Branch.S;
        document.querySelector("#F-Name").innerHTML = data.Item['F Name'].S
        document.querySelector("#M-Name").innerHTML = data.Item['M Name'].S
        document.querySelector("#Rank").innerHTML = data.Item.Rank.S;
        document.querySelector("#CGPA").innerHTML = data.Item.CGPA.S;

    } catch (error) {
        document.getElementById('error').innerHTML = "Please enter correct Registration no.";
        show.style.display = 'none';
    }
}