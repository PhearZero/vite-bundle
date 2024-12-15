import {AlgorandClient} from '@algorandfoundation/algokit-utils';

export function setupSdk(){
    return AlgorandClient.defaultLocalNet()
}

export async function getAccount(){
  return setupSdk().client.algod.accountInformation('TUIDKH2C7MUHZDD77MAMUREJRKNK25SYXB7OAFA6JFBB24PEL5UX4S4GUU').do();
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
