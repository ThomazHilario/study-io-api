import { Test } from "@nestjs/testing";
import { SignInController } from "../sign-in.controller";
import { SignInRepository } from "../sign-in.repository";
import { SignInService } from "../sign-in.service";
import { PrismaService } from "../../prisma.service";

// Mocks
import { signInServiceMock } from "./mocks/sign-in.mock";

describe('SignInController', () => {
    let signInController: SignInController
    let signInService: SignInService
    let signInRepository: SignInRepository

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [SignInController],
            providers: [SignInService, SignInRepository, PrismaService]
        }).compile()

        signInController = moduleRef.get(SignInController)
        signInService = moduleRef.get(SignInService)
        signInRepository = moduleRef.get(SignInRepository)
    })

    it('Should be login user', async () => {
        // Mock the signIn method of the SignInService
        jest.spyOn(signInController, 'signIn').mockResolvedValue(signInServiceMock.signIn())

        // Mock the response object
        const response = {
            status: jest.fn(),
            sendStatus: jest.fn(),
            links: jest.fn(),
            json: jest.fn(),
            send: jest.fn(),
        } as any

        
        // Simulating a successful sign-in
        const result = await signInController.signIn({
            email: 'cIzgI@example.com',
            password: 'hashedPassword123'
        }, response)

        // Verify that the signIn method was called with the correct parameters
        expect(result).toEqual({
            id: '1',
            username: 'testuser',
            email: 'cIzgI@example.com',
            password: 'hashedPassword123',
            image: null
        })
    })
})