import { Test } from "@nestjs/testing";
import { SignInController } from "../sign-in.controller";
import { SignInRepository } from "../sign-in.repository";
import { SignInService } from "../sign-in.service";
import { PrismaService } from "../../prisma.service";

// Mocks
import { signInServiceMock } from "./mocks/sign-in.mock";

describe('SignInService', () => {
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

    it('Should be login user in SignInService', async () => {
        // Mock the signIn method of the SignInService
        jest.spyOn(signInService, 'signIn').mockResolvedValue(signInServiceMock.signIn())

        // Simulating a successful sign-in
        const result = await signInService.signIn('cIzgI@example.com', 'hashedPassword123')

        // Expect the result to match the mock data
        expect(result).toEqual({
            id:'1',
            username: 'testuser',
            email: 'cIzgI@example.com',
            password: 'hashedPassword123',
            image: null
        })
    })
})