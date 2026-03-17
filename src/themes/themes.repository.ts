import { HttpStatus, Injectable } from '@nestjs/common'

import { 
    S3Client,
    PutObjectCommand,
    ListObjectsV2Command,
} from '@aws-sdk/client-s3'

@Injectable()

export class ThemesRepository{
    private client: S3Client;

    constructor(){
        this.client = new S3Client({
            region: "auto",
            endpoint: process.env.R2_CLOUDFLARE_API_KEY!,
            credentials: {
                accessKeyId: process.env.R2_ACCESS_THEME_KEY!,
                secretAccessKey: process.env.R2_SECRET_THEME_KEY!,
            },
        })
    }

    async findThemes(theme: string = "themes"){
        return await this.listFilesBucket(theme)
    };

    async uploadFile(bucketName: string, file: Express.Multer.File){
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: file.filename,
            Body: file.buffer,
            ContentType: file.mimetype
        });

        await this.client.send(command)

        return {
            status: HttpStatus.ACCEPTED,
            message: "Upload realizado!"
        }
    };

    async listFilesBucket(bucketName: string){
        const command = new ListObjectsV2Command({
            Bucket: bucketName,
        });

        const response = await this.client.send(command);

        return response.Contents.map(file => {
            return {
                ...file,
                url: `${process.env.URL_CLOUDFLARE_BUCKET!}/${file.Key}`
            }
        });
    }
}