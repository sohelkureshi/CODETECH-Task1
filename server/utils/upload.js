import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

// Setup GridFsStorage to use local MongoDB
const storage = new GridFsStorage({
    url: `mongodb://localhost:27017/BLOG`,  // Local MongoDB URL
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];

        // If file type does not match, return filename
        if (match.indexOf(file.mimetype) === -1) {
            return `${Date.now()}-blog-${file.originalname}`;
        }

        // If file type matches, store in 'photos' bucket
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

// Export multer with the storage configuration
export default multer({ storage });
