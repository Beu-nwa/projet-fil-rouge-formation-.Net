exports.startConfirmation = (port, ipAddress) => {
    return `\n\t\t\tL'application node est démarée\n
                ***************************************************
                 Local\t\t:\thttp://localhost:${port}     
                 on Network\t:\thttp://${ipAddress}:${port}  
                ***************************************************`;
}

// exports.success = (message, data) => {
//     return { message, data }
// }

// exports.getUniqueId = (list) => {
//     const coursIds = list.map(cour => cour.id);
//     const maxId = coursIds.reduce((a, b) => Math.max(a, b));
//     const uniqueId = maxId + 1;
//     return uniqueId;
// }
