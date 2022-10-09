function solve() {
    return {
        hasClima: function hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function adjustTemp() {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                }

                if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            }
        },

        hasAudio: function hasAudio(obj) {
            obj.currentTrack = {name: null, artist: null};
            obj.nowPlaying = function nowPlaying() {
                if (currentTrack) {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
            };
        },

        hasParktronic: function hasParktronic(obj) {
            obj.checkDistance = function checkDistance(number) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log();
                }
            };
        }
    }
}


// tests
let assemblyLine = solve();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);