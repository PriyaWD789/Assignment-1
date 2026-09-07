//    TASK -4 

import fs from 'fs';

function fileOperations() {

    fs.writeFile('data.txt', 'Hello, this is my file.', (val) => {

        if (val) {
            console.log("Error creating file:", val.message);
            return;
        }

        console.log("File created successfully.");

        fs.readFile('data.txt', 'utf8', (val, data) => {

            if (val) {
                console.log("Error reading file:", val.message);
                return;
            }

            console.log("Reading File....","\nFile content:", data);

            fs.appendFile('data.txt', 'Bye, See you soon..', (val) => {

                if (val) {
                    console.log("Error updating file:", val.message);
                    return;
                }

                console.log("File updated successfully.");


                fs.readFile('data.txt', 'utf8', (val, updatedData) => {

                    if (val) {
                        console.log("Error reading updated file:", val.message);
                        return;
                    }

                    console.log("Updated content:", updatedData);

                    fs.unlink('data.txt', (val) => {

                        if (val) {
                            console.log("Error deleting file:", val.message);
                            return;
                        }

                        console.log("File deleted successfully.");
                    });
                });
            });
        });
    });

}

fileOperations();
