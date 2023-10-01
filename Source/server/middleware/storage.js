import multer from "multer"
import fs from 'fs'
import path from 'path';
const uploadPath = 'public';
function isImageFile(file) {
    // Kiểm tra loại MIME của file
    const mimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (mimeTypes.includes(file.mimetype)) {
        return true;
    }
    return false;
}
function fileFilter(req, file, cb) {
    if (isImageFile(file)) {
        cb(null, true);
    } else {
        cb(new Error('File must be an image. Please choose a valid image file.'));
    }
}

const storageImageSignatureAndAppSignature = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'signature') {
            cb(null, 'public/signature');
        } else if (file.fieldname === 'appSignature') {
            cb(null, 'public/appSignature');
        } else if (file.fieldname === 'image') {
            cb(null, 'public/orderIssue');
        } else {
            cb(new Error('Invalid fieldname'));
        }
    },
    filename: (req, file, cb) => {
        // Định nghĩa tên tệp tin lưu trữ (có thể tuỳ chỉnh theo nhu cầu)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = file.originalname.split('.').pop();
        const filename = `${uniqueSuffix}.${fileExtension}`;
        cb(null, filename);
    }
});

// export const upload = multer({ storage })

export const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/bankAccount/');
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
        }
    }),
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Only image files are allowed!");
    }
});

export const createDirectory = (directoryPath) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(directoryPath, { recursive: true }, (err) => {
            if (err) {
                console.error(err);
                reject('Cannot create directory.');
            } else {
                console.log('Folder created successfully.');
                resolve();
            }
        });
    });
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/${req.dirName}/`)
    },
    filename: (req, file, cb) => {
        let part = file.fieldname
        if (file.fieldname == 'file') {
            // handle upload multiple file
            // Add Date.now() for distint
            part = file.fieldname + Date.now();
        }
        cb(null, part)
    }
})

export const uploadImg = multer({ storage: storage })