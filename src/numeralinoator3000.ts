export class Numeralinator3000 {


    static arabicToRoman(arabicInput: number): string {
        return this._arabicToRomanConvertSubstring(arabicInput, 1, '')
        
    }

    private static _arabicToRomanConvertSubstring(substring: number, position: number, returnString: string) : string {
        if (substring == 0){
            return returnString
        }else{
            const lastnumber: number = substring % 10
            switch (position) {
            case 1 : if( lastnumber < 3){
                returnString += this._repeatSymbol('I', lastnumber)
            }else if( lastnumber == 4){
                returnString += 'IV'
            }else if( lastnumber >= 5 && lastnumber < 9){
                returnString += 'V' + this._repeatSymbol('I', lastnumber - 5)
            }else{
                returnString += this._repeatSymbol('I', 10 - lastnumber) + 'X'
            }
            }

            const newSubString: number = Math.floor(substring / 10)
            return this._arabicToRomanConvertSubstring(newSubString, position + 1, returnString)
        }

    }

    private static _repeatSymbol(symbol: string, times: number): string {

        return symbol.repeat(times)

    }

}