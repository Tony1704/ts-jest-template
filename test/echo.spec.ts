import { Numeralinator3000 } from '../src/numeralinoator3000'


beforeAll(() => {
    console.log('Starting Tests...')
})

describe('Converting Arabic numbers to roman numerals', () => {

    it('Should convert 1 to I', () => {
        expect(Numeralinator3000.arabicToRoman(1)).toBe('I')
    })

    it('Should convert 6 to VI', () => {
        expect(Numeralinator3000.arabicToRoman(6)).toBe('VI')
    })

    it('Should convert 10 to X', () => {
        expect(Numeralinator3000.arabicToRoman(10)).toBe('X')
    })

    it('Should convert 50 to L', () => {
        expect(Numeralinator3000.arabicToRoman(50)).toBe('L')
    })

    it('Should convert 76 to LXXVI', () => {
        expect(Numeralinator3000.arabicToRoman(50)).toBe('LXXVI')
    })

    it('Should convert 100 to M', () => {
        expect(Numeralinator3000.arabicToRoman(100)).toBe('C')
    })
})