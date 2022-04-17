const target = 'APLLE';
let keyword = 'APPLE';
for(let i = 0; i < target.length; i++){
    if(keyword.charAt(i) === target.charAt(i)){
        keyword = keyword.replace(target.charAt(i), '%');
    }

    console.log(keyword)
}