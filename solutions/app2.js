let dateNow = new Date();
let number = 12345.123
let string = ['első', 'második', 'harmadik']
const HU = {
    date: dateNow.toLocaleDateString('hu'),
    currency: new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(number),
    list: `${string[0]}, ${string[1]} és ${string[2]}`
};

//console.log(HU)





export default HU;
