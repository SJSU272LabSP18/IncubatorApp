var json=[ {
    __v: 0,
    feedback: 'this is great go ahead',
    status: 'approved',
    TotalLikes: 1,
    GitLink: 'https://git.ng.bluemix.net/william.baron/Free-Range',
    OperatingSystem: 'test',
    Component: 'test',

    Product: '',
    Description: 'this is an inc',
    InnovationTitle: 'Incubator',
    CoSubmitters: 'William, Anna,Vu',
    Submitter: 'venkat',
    UserName: 'test1user' },
    {
    __v: 0,
    feedback: 'this is great go ahead',
    status: 'approved',
    TotalLikes: 1,
    GitLink: 'https://git.ng.bluemix.net/william.baron/Free-Range',
    OperatingSystem: 'test',
    Component: 'test',

    Product: '',
    Description: 'this is an inc',
    InnovationTitle: 'Incubator',
    CoSubmitters: 'William, Anna,Vu',
    Submitter: 'venkat',
    UserName: 'test1user' }
   ]


console.log("type of ", typeof json)
console.log(json.filter(value => value.status === 'approved').length)
