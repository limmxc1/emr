const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const d = new Date()
const randomDocsTest = {
    doc: [],
    pt: []
}

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateKey(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Generate random Doc docs
for (let i = 0; i < 12; i++) { 
    randomDocsTest.doc.push({
        progressNote: generateString(3),
        goal: generateString(5),
        plan: generateString(5),
        discharge: generateString(5),
        author: "Dr otherUser",
        submitDate: d.toLocaleDateString(),
        submitTime: d.toLocaleTimeString(),
        key: generateKey(10)
    })
  }

  // Generate random PT docs
  for (let i = 0; i < 2; i++) { 
    randomDocsTest.pt.push({
        progressNote: generateString(3),
        goal: generateString(5),
        plan: generateString(5),
        discharge: generateString(5),
        author: "PT otherUser",
        submitDate: d.toLocaleDateString(),
        submitTime: d.toLocaleTimeString(),
        key: generateKey(10)
    })
  }

export default randomDocsTest