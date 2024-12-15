import {Algodv2} from "algosdk";
// Define the Algorand node connection parameters
const algodToken = ''; // free service does not require tokens
const algodServer = 'https://testnet-api.4160.nodely.dev';
const algodPort = 443;
export function setupSdk(){
    return new Algodv2(algodToken, algodServer, algodPort);
}

export async function getAccount(){
  return setupSdk().accountInformation('TUIDKH2C7MUHZDD77MAMUREJRKNK25SYXB7OAFA6JFBB24PEL5UX4S4GUU').do();
}

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
