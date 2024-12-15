import './style.css'
import {getAccount, setupCounter} from './counter.ts'

const acct = {
    address: '',
    amount: BigInt(0)
};

getAccount().then((account) => {
    acct.address = account.address;
    acct.amount = account.amount;

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${acct.address}</h1>
    <p class="read-the-docs">
      ${acct.amount/BigInt(1000000)} ALGO
    </p>
  </div>
`
    setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
});


