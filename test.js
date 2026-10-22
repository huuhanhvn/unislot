// Trong basics.js, tự viết:

// Hàm isFull(capacity, registered) trả về true nếu lớp đã đầy.
let isFull = (a,b) =>{if(a<=b)
    return true;
    return false;
}
// Dùng for in ra các số từ 1 đến 5.
// Tạo mảng 3 object lớp học phần, in ra tên môn của từng lớp bằng for.
let Dsmh = [ {codes:"1" , Objectname :" Toan" , capacity:20, registered : 15},
    {codes:"2" , Objectname :" Ly" , capacity:20, registered: 20},
    {codes:"3" , Objectname :" Hoa" , capacity:50, registered: 20}]
    for (let i= 0; i<Dsmh.length;i++){
        if(isFull(Dsmh[i].capacity,Dsmh[i].registered)===true)
     console.log(`${Dsmh[i].Objectname} - con cho`);
        else
    console.log(`${Dsmh[i].Objectname} - con bo`)
    }