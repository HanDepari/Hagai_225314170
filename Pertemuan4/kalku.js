let bil1 = '';
        let bil2 = '';
        let operator = '';

        function c() {
            document.getElementById('inputbil1').value = '';
            bil1 = '';
            bil2 = '';
            operator = '';
        }

        function samadengan() {
            // let hasil = 0;
            switch (operator) {
                case '+':
                    hasil = parseFloat(bil1) + parseFloat(bil2);
                    break;
                case '-':
                    hasil = parseFloat(bil1) - parseFloat(bil2);
                    break;
                case '*':
                    hasil = parseFloat(bil1) * parseFloat(bil2);
                    break;
                case '/':
                    hasil = parseFloat(bil1) / parseFloat(bil2);
                    break;   

            }
            document.getElementById('inputbil1').value = hasil;
            bil1 = hasil.toString();
            bil2 = '';
            operator = '';
        }

        function bagi() {
            operator = '/';
            document.getElementById('inputbil1').value += '/';
        }

        function kali() {
            operator = '*';
            document.getElementById('inputbil1').value += '*';
        }

        function kurang() {
            operator = '-';
            document.getElementById('inputbil1').value += '-';
        }

        function tambah() {
            operator = '+';
            document.getElementById('inputbil1').value += '+';
        }

        function nol() {
            document.getElementById('inputbil1').value += '0';
            if (operator === '') {
                bil1 += '0';
            } else {
                bil2 += '0';
            }
        }

        function satu() {
            document.getElementById('inputbil1').value += '1';
            if (operator === '') {
                bil1 += '1';
            } else {
                bil2 += '1';
            }
        }
        function dua() {
            document.getElementById('inputbil1').value += '2';
            if (operator === '') {
                bil1 += '2';
            } else {
                bil2 += '2';
            }
        }

        function tiga() {
            document.getElementById('inputbil1').value += '3';
            if (operator === '') {
                bil1 += '3';
            } else {
                bil2 += '3';
            }
        }

        function empat() {
            document.getElementById('inputbil1').value += '4';
            if (operator === '') {
                bil1 += '4';
            } else {
                bil2 += '4';
            }
        }
        function lima() {
            document.getElementById('inputbil1').value += '5';
            if (operator === '') {
                bil1 += '5';
            } else {
                bil2 += '5';
            }
        }

        function enam() {
            document.getElementById('inputbil1').value += '6';
            if (operator === '') {
                bil1 += '6';
            } else {
                bil2 += '6';
            }
        }

        function tujuh() {
            document.getElementById('inputbil1').value += '7';
            if (operator === '') {
                bil1 += '7';
            } else {
                bil2 += '7';
            }
        }

        function delapan() {
            document.getElementById('inputbil1').value += '8';
            if (operator === '') {
                bil1 += '8';
            } else {
                bil2 += '8';
            }
        }

        function sembilan() {
            document.getElementById('inputbil1').value += '9';
            if (operator === '') {
                bil1 += '9';
            } else {
                bil2 += '9';
            }
        }

        function titik() {
            document.getElementById('inputbil1').value += '.';
            if (operator === '') {
                bil1 += '.';
            } else {
                bil2 += '.';
            }
        }