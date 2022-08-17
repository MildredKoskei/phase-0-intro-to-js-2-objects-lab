const employee = {
    name: "firstName",
    streetAddress: "address",
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        "name": "Sam",
        "streetAddress": "11 Broadway",
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee,key ){
    
    const newEmployee = {...employee}
    
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee,
    "name":"Sam",
}
    delete newEmployee.name;
    delete employee.name;
    delete employee[key];
    return employee;
    return newEmployee;
}
