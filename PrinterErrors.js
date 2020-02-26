function printerError(s) {
    let total = 0, bad = 0
    s.split('').map(num => {
    if(!(num >= 'a' && num <= 'm')) 
        bad++
    total++
    })
    return `${bad}/${total}`
}