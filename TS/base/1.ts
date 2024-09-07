const STATUS_OK: 'OK' = 'OK';
const STATUS_ERROR: 'ERROR' = 'ERROR';

function checkStatus(status: 'OK' | 'ERROR') {
  if (status === STATUS_OK) {
    console.log('Everything is fine!');
  } else {
    console.log('There was an error.');
  }
}

checkStatus(STATUS_OK); // 允许
checkStatus('OK'); // 允许