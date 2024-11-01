import { Injectable } from '@nestjs/common'

// Firebase
import * as Firebase from 'firebase-admin'

// Prisma
import { PrismaService } from 'src/prisma.service'

@Injectable()

export class ThemesRepository{

    // firebase collection
    firebase:FirebaseFirestore.CollectionReference = Firebase.firestore().collection('users')

    // Constructor
    constructor(private prisma:PrismaService){}

    // Return all themes
    async findThemes(){
        return await this.prisma.themes.findMany()
    }

    // Insert themes
    async insertTheme(image_url:string, video_url:string){
        try {

            // allUsers
            let allUsers = []

            // Find All users from firebase
            const usersFromFirebase = await this.firebase.get()

            // Push user in allUsers
            usersFromFirebase.forEach(user => allUsers.push(user.data()))

            // Get admin verification
            const verifiedUser = allUsers.find(user => user.dataUser.email === process.env.TOKEN)

            // Logic case is verified admin
            if(verifiedUser){
                // Create new theme
                await this.prisma.themes.create({
                    data:{
                        image_url,
                        video_url,
                    }
                })

                // Return message
                return {
                    message: 'Created theme in database'
                }
            }

            // Erro message
            return {
                message:'You not is verified',
            }

        } catch (error) {
            return{
                message:'Error! Not is possible create theme',
            }
        }
            
    }
}