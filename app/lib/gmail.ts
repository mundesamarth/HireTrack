import { google } from "googleapis"
import { prisma } from "./prisma"

export default async function getGmailClient(userId: string){

    const account = await prisma.account.findFirst({
        where:{userId: userId , provider: 'google'}
    })

    if(!account || !account.access_token ){
        throw new Error( "No google account found for this account")
    }

    const auth = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET
    )

    auth.setCredentials({
        access_token: account.access_token,
        refresh_token: account.refresh_token,
    })

    return google.gmail({version: "v1", auth })

}