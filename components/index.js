const data = [{
    name: 'sahil',
    subjects: [{
        name: 'OS',
        marks: 12,
    }
        ,
    {
        name: 'CN',
        marks: 54,
    },
    {
        name: 'M3',
        marks: 144,
    },
    {
        name: 'OOPs',
        marks: 49,
    }]
},
{
    name: 'smit',
    subjects: [{
        name: 'op',
        marks: 12,
    }
        ,
    {
        name: 'm4',
        marks: 54,
    },
    {
        name: 'M3',
        marks: 144,
    },
    {
        name: 'OOPs',
        marks: 49,
    }]
}]


const getMarks = (studentData, nameStudent) => {

    const newdata = studentData.find((data, index) => {
        return data.name == nameStudent
    }
    )
    const subjectaData = newdata.subjects
    const data1 = subjectaData.map(({name})=>{
        console.log(name)
        return name
    })
    console.log(data1)
    // let average = 0;
    // let total = 0;
    // for(let i = 0 ; i<data.length ; i++){
    //     if(data[i].name == studentName){
    //         for(let  j = 0 ; j<data[i].subjects.length ; j++){
    //             total += data[i].subjects[j].marks 
    //         }
    //         average =  total / data[i].subjects.length
    //     }
    // }

    // console.log(average)
}
getMarks(data, 'sahil')