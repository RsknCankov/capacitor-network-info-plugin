import { CapacitorNetworkInfo } from 'capacitor-network-info';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorNetworkInfo.echo({ value: inputValue })
}
